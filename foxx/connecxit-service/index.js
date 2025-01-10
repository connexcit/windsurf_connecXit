'use strict';
const createRouter = require('@arangodb/foxx/router');
const router = createRouter();
const joi = require('joi');
const db = require('@arangodb').db;
const aql = require('@arangodb').aql;

const DOC_NOT_FOUND = { error: true, code: 404, message: 'Document not found' };
const ARANGO_NOT_FOUND = 1202;
const ARANGO_DUPLICATE = 1210;
const ARANGO_CONFLICT = 409;
const HTTP_NOT_FOUND = 404;
const HTTP_BAD = 400;

module.context.use(router);

// Schema definitions
const providerSchema = joi.object().required().keys({
  type: joi.string().valid('vendor', 'planner').required(),
  latitude: joi.number().min(-90).max(90).required(),
  longitude: joi.number().min(-180).max(180).required(),
  radius: joi.number().min(0).required(),
  category: joi.string().optional(),
  minRating: joi.number().min(0).max(5).optional(),
  maxPrice: joi.number().min(0).optional(),
  sortBy: joi.string().valid('rating', 'distance', 'price').default('distance'),
  sortOrder: joi.string().valid('asc', 'desc').default('asc'),
  limit: joi.number().integer().min(1).max(100).default(20),
  offset: joi.number().integer().min(0).default(0)
});

// API endpoints
router.get('/providers', function (req, res) {
  const params = req.queryParams;
  const validation = providerSchema.validate(params);
  
  if (validation.error) {
    res.status(HTTP_BAD);
    res.json({ error: true, message: validation.error.message });
    return;
  }

  const validated = validation.value;
  let collection = validated.type === 'vendor' ? 'vendors' : 'event_planners';
  
  // Build the AQL query
  let query = aql`
    FOR provider IN ${collection}
    LET distance = DISTANCE(provider.latitude, provider.longitude, ${validated.latitude}, ${validated.longitude})
    FILTER distance <= ${validated.radius}
  `;

  // Add optional filters
  if (validated.category) {
    query = aql`
      ${query}
      FILTER provider.category == ${validated.category}
    `;
  }

  if (validated.minRating) {
    query = aql`
      ${query}
      FILTER provider.rating >= ${validated.minRating}
    `;
  }

  // Add sorting
  let sortExpr;
  switch (validated.sortBy) {
    case 'rating':
      sortExpr = 'provider.rating';
      break;
    case 'distance':
      sortExpr = 'distance';
      break;
    case 'price':
      sortExpr = 'provider.price';
      break;
  }

  query = aql`
    ${query}
    SORT ${sortExpr} ${validated.sortOrder === 'desc' ? 'DESC' : 'ASC'}
    LIMIT ${validated.offset}, ${validated.limit}
    RETURN MERGE(
      provider,
      { 
        distance: distance,
        reviews: (
          FOR r IN reviews
          FILTER r._id IN (
            FOR rev IN reviewed_by
            FILTER rev._to == provider._id
            RETURN rev._from
          )
          RETURN r
        ),
        services: (
          FOR s IN services
          FILTER s._id IN (
            FOR serv IN has_service
            FILTER serv._from == provider._id
            RETURN serv._to
          )
          RETURN s
        )
      }
    )
  `;

  try {
    const providers = db._query(query);
    res.json({
      success: true,
      data: providers.toArray(),
      count: providers.count()
    });
  } catch (e) {
    res.status(HTTP_BAD);
    res.json({ error: true, message: e.message });
  }
})
.description('Search for service providers within a radius');

// Get provider details by ID
router.get('/providers/:id', function (req, res) {
  const id = req.pathParams.id;
  const type = req.queryParams.type || 'vendor';
  const collection = type === 'vendor' ? 'vendors' : 'event_planners';

  try {
    const query = aql`
      FOR provider IN ${collection}
      FILTER provider._key == ${id}
      RETURN MERGE(
        provider,
        {
          reviews: (
            FOR r IN reviews
            FILTER r._id IN (
              FOR rev IN reviewed_by
              FILTER rev._to == provider._id
              RETURN rev._from
            )
            RETURN r
          ),
          services: (
            FOR s IN services
            FILTER s._id IN (
              FOR serv IN has_service
              FILTER serv._from == provider._id
              RETURN serv._to
            )
            RETURN s
          ),
          events: (
            FOR e IN events
            FILTER e._id IN (
              FOR ev IN vendor_for
              FILTER ev._from == provider._id
              RETURN ev._to
            )
            RETURN e
          )
        }
      )
    `;

    const provider = db._query(query).toArray()[0];
    if (!provider) {
      res.status(HTTP_NOT_FOUND);
      res.json(DOC_NOT_FOUND);
      return;
    }

    res.json({
      success: true,
      data: provider
    });
  } catch (e) {
    res.status(HTTP_BAD);
    res.json({ error: true, message: e.message });
  }
})
.description('Get detailed information about a service provider');

// Get available categories
router.get('/categories', function (req, res) {
  const type = req.queryParams.type || 'vendor';
  const collection = type === 'vendor' ? 'vendors' : 'event_planners';

  try {
    const query = aql`
      FOR provider IN ${collection}
      COLLECT category = provider.category
      WITH COUNT INTO count
      SORT count DESC
      RETURN {
        category: category,
        count: count
      }
    `;

    const categories = db._query(query);
    res.json({
      success: true,
      data: categories.toArray()
    });
  } catch (e) {
    res.status(HTTP_BAD);
    res.json({ error: true, message: e.message });
  }
})
.description('Get list of available categories and their counts');
