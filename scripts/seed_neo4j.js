const { getSession } = require('../src/config/neo4j');
const fs = require('fs');
const { parse } = require('csv-parse/sync');

// Constants
const VENDOR_CATEGORIES = {
  'Catering': ['Food Service', 'Beverage Service'],
  'Photography': ['Event Photography', 'Portrait Photography'],
  'Venue': ['Indoor Venues', 'Outdoor Venues'],
  'Entertainment': ['Live Music', 'DJ Services'],
  'Decor': ['Floral Design', 'Event Design'],
  'Planning': ['Full Service', 'Day-of Coordination']
};

const RECORD_COUNT = 50;

async function seedDatabase() {
  const session = getSession();
  
  try {
    // Clear existing data
    await session.run('MATCH (n) DETACH DELETE n');

    // Create category nodes first
    for (const [category, subcategories] of Object.entries(VENDOR_CATEGORIES)) {
      await session.run(
        'CREATE (c:Category {name: $category, subcategories: $subcategories})',
        { category, subcategories }
      );
    }

    // Create vendor nodes and relationships
    for (let i = 0; i < RECORD_COUNT; i++) {
      const category = Object.keys(VENDOR_CATEGORIES)[Math.floor(Math.random() * Object.keys(VENDOR_CATEGORIES).length)];
      const seed = `vendor-${i}-${category.replace(/[^a-zA-Z0-9]/g, '')}`;
      const imageKeywords = [
        'business headshot',
        'professional portrait',
        'corporate headshot',
        'professional profile',
        'business profile'
      ];
      const randomKeyword = imageKeywords[Math.floor(seed.charCodeAt(0) % imageKeywords.length)];
      
      await session.run(
        `
        MATCH (c:Category {name: $category})
        CREATE (v:Vendor {
          id: $id,
          name: $name,
          category: $category,
          description: $description,
          rating: $rating,
          reviewCount: $reviewCount,
          price: $price,
          imageUrl: $imageUrl,
          contactEmail: $contactEmail,
          contactPhone: $contactPhone,
          location: point({latitude: $lat, longitude: $lng})
        })
        CREATE (v)-[:BELONGS_TO]->(c)
        `,
        {
          id: `vendor_${i}`,
          name: `Vendor ${i}`,
          category: category,
          description: `Professional ${category.toLowerCase()} service provider`,
          rating: (Math.random() * 1.5 + 3.5).toFixed(1),
          reviewCount: Math.floor(Math.random() * 50) + 10,
          price: (Math.floor(Math.random() * 3) + 1) * 100,
          imageUrl: `https://source.unsplash.com/featured/?${encodeURIComponent(randomKeyword)}&${seed}`,
          contactEmail: `vendor${i}@example.com`,
          contactPhone: `(919) ${Math.floor(Math.random() * 900 + 100)}-${Math.floor(Math.random() * 9000 + 1000)}`,
          lat: 35.7796 + (Math.random() - 0.5) * 0.1,
          lng: -78.6382 + (Math.random() - 0.5) * 0.1
        }
      );
    }

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await session.close();
  }
}

seedDatabase();
