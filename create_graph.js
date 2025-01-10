// Create the graph with vertex and edge collections
db._createGraph('CONNECXIT_graph', [
  { from: ['users'], to: ['events', 'vendors', 'reviews', 'locations'] },
  { from: ['events'], to: ['vendors', 'event_planners'] },
  { from: ['vendors'], to: ['services', 'reviews', 'events'] },
  { from: ['event_planners'], to: ['events'] },
  { from: ['reviews'], to: ['vendors', 'event_planners'] },
  { from: ['locations'], to: ['users'] }
], [
  { name: 'booked_by', from: ['users'], to: ['events'] },
  { name: 'hires', from: ['users'], to: ['vendors'] },
  { name: 'has_service', from: ['vendors'], to: ['services'] },
  { name: 'plans_event', from: ['event_planners'], to: ['events'] },
  { name: 'vendor_for', from: ['vendors'], to: ['events'] },
  { name: 'leaves_review', from: ['users'], to: ['reviews'] },
  { name: 'reviewed_by', from: ['reviews'], to: ['vendors', 'event_planners'] },
  { name: 'located_in', from: ['users'], to: ['locations'] }
]);
