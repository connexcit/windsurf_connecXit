// Category definitions with icons
const VENDOR_CATEGORIES = {
  'Food & Beverage': { icon: '🍽️', services: ['Catering', 'Bar Service', 'Food Trucks', 'Desserts', 'Coffee Service'] },
  'DJ': { icon: '🎧', services: ['Wedding DJ', 'Corporate Event DJ', 'Party DJ', 'Equipment Rental', 'Lighting'] },
  'Musicians': { icon: '🎵', services: ['Live Band', 'String Quartet', 'Jazz Ensemble', 'Solo Performer', 'Orchestra'] },
  'Venue': { icon: '🏰', services: ['Banquet Hall', 'Outdoor Venue', 'Hotel Venue', 'Historic Venue', 'Restaurant Venue'] },
  'Photography': { icon: '📸', services: ['Wedding Photography', 'Event Photography', 'Portrait Photography', 'Videography', 'Photo Booth'] },
  'Flowers & Decor': { icon: '💐', services: ['Floral Design', 'Event Decoration', 'Lighting Design', 'Furniture Rental', 'Props'] },
  'Production': { icon: '🎬', services: ['Audio/Visual', 'Stage Setup', 'Lighting Production', 'Video Production', 'Live Streaming'] },
  'Design': { icon: '🎨', services: ['Graphic Design', 'Invitation Design', 'Signage', 'Digital Media', 'Brand Design'] },
  'Performers': { icon: '🎭', services: ['Dancers', 'Magicians', 'Comedians', 'Circus Acts', 'Character Actors'] },
  'Professional': { icon: '👔', services: ['Event Planning', 'Coordination', 'Security', 'Valet Service', 'Consulting'] },
  'Speakers': { icon: '🎤', services: ['Keynote Speakers', 'Motivational', 'Industry Experts', 'Workshop Leaders', 'MCs'] }
};

// Raleigh, NC coordinates (approximate boundaries)
const RALEIGH_BOUNDS = {
  lat: { min: 35.7, max: 35.9 },
  lng: { min: -78.7, max: -78.5 }
};

// Helper functions
function getRandomCoordinates() {
  return {
    latitude: RALEIGH_BOUNDS.lat.min + Math.random() * (RALEIGH_BOUNDS.lat.max - RALEIGH_BOUNDS.lat.min),
    longitude: RALEIGH_BOUNDS.lng.min + Math.random() * (RALEIGH_BOUNDS.lng.max - RALEIGH_BOUNDS.lng.min)
  };
}

function getRandomPrice(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomRating() {
  return (Math.random() * (5 - 3) + 3).toFixed(1);
}

function getRandomFutureDate() {
  const start = new Date();
  const end = new Date();
  end.setFullYear(end.getFullYear() + 2);
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().split('T')[0];
}

function getRandomElements(arr, count) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

const RECORD_COUNT = 10000;

const graphModule = require('@arangodb/general-graph');

// Drop existing graph if it exists
try {
  graphModule._drop('connecxit_graph', true);
  console.log('Dropped existing graph: connecxit_graph');
} catch (e) {
  console.log('No existing graph to drop');
}

// Drop existing collections
function dropCollection(name) {
  if (db._collection(name)) {
    db._collection(name).drop();
    console.log(`Dropped collection: ${name}`);
  }
}

['users', 'events', 'vendors', 'services', 'reviews', 'locations', 'event_planners',
 'booked_by', 'hires', 'has_service', 'plans_event', 'vendor_for', 'leaves_review',
 'reviewed_by', 'reviewed_by_planner', 'located_in'].forEach(dropCollection);

// Create collections
function createCollection(name, type = 'document') {
  if (!db._collection(name)) {
    if (type === 'edge') {
      db._createEdgeCollection(name);
    } else {
      db._createDocumentCollection(name);
    }
    console.log(`Created ${type} collection: ${name}`);
  }
}

// Create vertex collections
['users', 'events', 'vendors', 'services', 'reviews', 'locations', 'event_planners'].forEach(name => createCollection(name));

// Create edge collections
['booked_by', 'hires', 'has_service', 'plans_event', 'vendor_for', 'leaves_review', 'reviewed_by', 'reviewed_by_planner', 'located_in']
  .forEach(name => createCollection(name, 'edge'));

console.log('Generating vertices...');

// Generate vendors
for (let i = 0; i < RECORD_COUNT; i++) {
  const category = Object.keys(VENDOR_CATEGORIES)[Math.floor(Math.random() * Object.keys(VENDOR_CATEGORIES).length)];
  const coords = getRandomCoordinates();
  
  db.vendors.save({
    _key: `vendor_${i}`,
    name: `Vendor ${i}`,
    category: category,
    icon: VENDOR_CATEGORIES[category].icon,
    rating: getRandomRating(),
    latitude: coords.latitude,
    longitude: coords.longitude,
    description: `Professional ${category} service provider in Raleigh`,
    contact: {
      email: `vendor${i}@example.com`,
      phone: `(919) ${Math.floor(Math.random() * 900 + 100)}-${Math.floor(Math.random() * 9000 + 1000)}`
    }
  });
}

// Generate services
let serviceId = 0;
for (const category of Object.keys(VENDOR_CATEGORIES)) {
  for (const service of VENDOR_CATEGORIES[category].services) {
    const recordsPerService = Math.ceil(RECORD_COUNT / (Object.keys(VENDOR_CATEGORIES).length * 5));
    for (let i = 0; i < recordsPerService; i++) {
      db.services.save({
        _key: `service_${serviceId}`,
        name: service,
        category: category,
        price: getRandomPrice(100, 5000),
        description: `Professional ${service} for your event`,
        duration: Math.floor(Math.random() * 8 + 1) + ' hours'
      });
      serviceId++;
    }
  }
}

// Generate event planners
for (let i = 0; i < RECORD_COUNT; i++) {
  const coords = getRandomCoordinates();
  db.event_planners.save({
    _key: `planner_${i}`,
    name: `Event Planner ${i}`,
    rating: getRandomRating(),
    latitude: coords.latitude,
    longitude: coords.longitude,
    specialties: ['Weddings', 'Corporate Events', 'Social Events'],
    experience_years: Math.floor(Math.random() * 20 + 1),
    contact: {
      email: `planner${i}@example.com`,
      phone: `(919) ${Math.floor(Math.random() * 900 + 100)}-${Math.floor(Math.random() * 9000 + 1000)}`
    }
  });
}

// Generate users
for (let i = 0; i < RECORD_COUNT; i++) {
  db.users.save({
    _key: `user_${i}`,
    name: `User ${i}`,
    email: `user${i}@example.com`,
    type: Math.random() > 0.2 ? 'client' : 'vendor',
    preferences: {
      event_types: ['Wedding', 'Corporate', 'Social'],
      budget_range: `${Math.floor(Math.random() * 5 + 1)}000-${Math.floor(Math.random() * 5 + 6)}000`
    }
  });
}

// Generate events
for (let i = 0; i < RECORD_COUNT; i++) {
  const coords = getRandomCoordinates();
  db.events.save({
    _key: `event_${i}`,
    name: `Event ${i}`,
    type: ['Wedding', 'Corporate Event', 'Birthday Party', 'Conference', 'Social Gathering'][Math.floor(Math.random() * 5)],
    date: getRandomFutureDate(),
    budget: getRandomPrice(1000, 50000),
    expected_guests: Math.floor(Math.random() * 200 + 20),
    latitude: coords.latitude,
    longitude: coords.longitude,
    status: ['Planning', 'Confirmed', 'In Progress', 'Completed'][Math.floor(Math.random() * 4)]
  });
}

// Generate reviews
for (let i = 0; i < RECORD_COUNT; i++) {
  db.reviews.save({
    _key: `review_${i}`,
    rating: getRandomRating(),
    comment: `Review comment ${i}`,
    date: getRandomFutureDate(),
    helpful_votes: Math.floor(Math.random() * 50)
  });
}

// Generate locations
for (let i = 0; i < RECORD_COUNT; i++) {
  const coords = getRandomCoordinates();
  db.locations.save({
    _key: `location_${i}`,
    name: `Location ${i}`,
    address: `${Math.floor(Math.random() * 9999)} Main St, Raleigh, NC`,
    latitude: coords.latitude,
    longitude: coords.longitude,
    venue_type: ['Hotel', 'Restaurant', 'Conference Center', 'Outdoor Venue', 'Historic Building'][Math.floor(Math.random() * 5)]
  });
}

console.log('Generating edges...');

// Create relationships
for (let i = 0; i < RECORD_COUNT; i++) {
  try {
    // Each user books multiple events
    const eventCount = Math.floor(Math.random() * 3) + 1;
    const bookedEvents = getRandomElements([...Array(RECORD_COUNT)].map((_, j) => j), eventCount);
    bookedEvents.forEach(eventId => {
      db.booked_by.save({
        _from: `users/user_${i}`,
        _to: `events/event_${eventId}`
      });
    });

    // Each user hires multiple vendors
    const vendorCount = Math.floor(Math.random() * 5) + 1;
    const hiredVendors = getRandomElements([...Array(RECORD_COUNT)].map((_, j) => j), vendorCount);
    hiredVendors.forEach(vendorId => {
      db.hires.save({
        _from: `users/user_${i}`,
        _to: `vendors/vendor_${vendorId}`
      });
    });

    // Each vendor has multiple services
    if (i < RECORD_COUNT) {
      const serviceCount = Math.floor(Math.random() * 3) + 1;
      const vendorServices = getRandomElements([...Array(serviceId)].map((_, j) => j), serviceCount);
      vendorServices.forEach(serviceId => {
        db.has_service.save({
          _from: `vendors/vendor_${i}`,
          _to: `services/service_${serviceId}`
        });
      });
    }

    // Each event planner plans multiple events
    const plannedEventCount = Math.floor(Math.random() * 5) + 1;
    const plannedEvents = getRandomElements([...Array(RECORD_COUNT)].map((_, j) => j), plannedEventCount);
    plannedEvents.forEach(eventId => {
      db.plans_event.save({
        _from: `event_planners/planner_${i}`,
        _to: `events/event_${eventId}`
      });
    });

    // Each vendor serves multiple events
    if (i < RECORD_COUNT) {
      const servedEventCount = Math.floor(Math.random() * 3) + 1;
      const servedEvents = getRandomElements([...Array(RECORD_COUNT)].map((_, j) => j), servedEventCount);
      servedEvents.forEach(eventId => {
        db.vendor_for.save({
          _from: `vendors/vendor_${i}`,
          _to: `events/event_${eventId}`
        });
      });
    }

    // Each user leaves multiple reviews
    const reviewCount = Math.floor(Math.random() * 3) + 1;
    const userReviews = getRandomElements([...Array(RECORD_COUNT)].map((_, j) => j), reviewCount);
    userReviews.forEach(reviewId => {
      db.leaves_review.save({
        _from: `users/user_${i}`,
        _to: `reviews/review_${reviewId}`
      });
    });

    // Each review is for a vendor or planner
    if (i < RECORD_COUNT) {
      if (Math.random() > 0.5) {
        db.reviewed_by.save({
          _from: `reviews/review_${i}`,
          _to: `vendors/vendor_${Math.floor(Math.random() * RECORD_COUNT)}`
        });
      } else {
        db.reviewed_by_planner.save({
          _from: `reviews/review_${i}`,
          _to: `event_planners/planner_${Math.floor(Math.random() * RECORD_COUNT)}`
        });
      }
    }

    // Each user is located somewhere
    db.located_in.save({
      _from: `users/user_${i}`,
      _to: `locations/location_${Math.floor(Math.random() * RECORD_COUNT)}`
    });

  } catch (e) {
    console.log(`Error creating relationships for index ${i}: ${e.message}`);
  }
}

console.log('Database seeded successfully with 10,000 records per collection!');
