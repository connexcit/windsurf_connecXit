'use strict';
const db = require('@arangodb').db;

// Ensure geo indexes exist
if (db.vendors.exists()) {
  db.vendors.ensureIndex({
    type: 'geo',
    fields: ['latitude', 'longitude'],
    name: 'vendor_geo'
  });
  db.vendors.ensureIndex({
    type: 'hash',
    fields: ['category'],
    name: 'vendor_category'
  });
  db.vendors.ensureIndex({
    type: 'skiplist',
    fields: ['rating'],
    name: 'vendor_rating'
  });
}

if (db.event_planners.exists()) {
  db.event_planners.ensureIndex({
    type: 'geo',
    fields: ['latitude', 'longitude'],
    name: 'planner_geo'
  });
  db.event_planners.ensureIndex({
    type: 'hash',
    fields: ['category'],
    name: 'planner_category'
  });
  db.event_planners.ensureIndex({
    type: 'skiplist',
    fields: ['rating'],
    name: 'planner_rating'
  });
}
