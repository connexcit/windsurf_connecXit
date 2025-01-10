const express = require('express');
const router = express.Router();
const neo4j = require('neo4j-driver');

// Initialize Neo4j driver
const driver = neo4j.driver(
  process.env.NEO4J_URI,
  neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
);

// Get all vendors with optional filtering
router.get('/', async (req, res) => {
  console.log('Received request for vendors with query:', req.query);
  const session = driver.session();
  const { category } = req.query;

  try {
    const query = `
      MATCH (v:vendors)
      ${category && category !== 'all' ? 'WHERE v.category = $category' : ''}
      RETURN {
        _id: toString(id(v)),
        name: v.name,
        category: v.category,
        description: v.description,
        price: v.price,
        rating: v.rating,
        reviewCount: v.reviewCount,
        location: v.location,
        imageUrl: v.imageUrl
      } as vendor
      ORDER BY vendor.rating DESC
      LIMIT 50
    `;

    console.log('Executing query:', query);
    const result = await session.run(query, { category });
    console.log('Query result records:', result.records.length);

    const vendors = result.records.map(record => {
      const vendor = record.get('vendor');
      console.log('Raw vendor data:', vendor);
      return {
        ...vendor,
        _id: vendor._id,
        rating: parseFloat(vendor.rating || '4.5').toFixed(1),
        reviewCount: parseInt(vendor.reviewCount || Math.floor(Math.random() * 50) + 10),
        price: parseInt(vendor.price || Math.floor(Math.random() * 3) + 1) * 100
      };
    });

    console.log('Sending vendors:', vendors);
    res.json(vendors);
  } catch (error) {
    console.error('Error in /vendors route:', error);
    res.status(500).json({ 
      error: 'Error fetching vendors', 
      details: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  } finally {
    await session.close();
  }
});

// Get a specific vendor by ID
router.get('/:id', async (req, res) => {
  const session = driver.session();
  const { id } = req.params;

  try {
    const query = `
      MATCH (v:vendors)
      WHERE toString(id(v)) = $id
      RETURN {
        _id: toString(id(v)),
        name: v.name,
        category: v.category,
        description: v.description,
        price: v.price,
        rating: v.rating,
        location: v.location,
        imageUrl: v.imageUrl
      } as vendor
    `;

    const result = await session.run(query, { id });
    
    if (result.records.length === 0) {
      return res.status(404).json({ error: 'Vendor not found' });
    }

    const vendor = result.records[0].get('vendor');
    res.json({
      ...vendor,
      rating: parseFloat(vendor.rating || '4.5').toFixed(1),
      reviewCount: parseInt(vendor.reviewCount || Math.floor(Math.random() * 50) + 10),
      price: parseInt(vendor.price || Math.floor(Math.random() * 3) + 1) * 100
    });
  } catch (error) {
    console.error('Error fetching vendor details:', error);
    res.status(500).json({ 
      error: 'Error fetching vendor details',
      details: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  } finally {
    await session.close();
  }
});

module.exports = router;
