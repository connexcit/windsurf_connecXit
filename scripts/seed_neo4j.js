require('dotenv').config();
const neo4j = require('neo4j-driver');
const fs = require('fs');
const csv = require('csv-parse');

// Initialize Neo4j driver
const driver = neo4j.driver(
  process.env.NEO4J_URI,
  neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
);

async function seedDatabase() {
  const session = driver.session();

  try {
    // Clear existing data
    await session.run('MATCH (n) DETACH DELETE n');
    console.log('Cleared existing data');

    // Read CSV file
    const csvPath = './src/misc/Connexit_list_unDpulicated.csv';
    const fileContent = fs.readFileSync(csvPath, 'utf-8');
    
    // Parse CSV
    const records = await new Promise((resolve, reject) => {
      csv.parse(fileContent, {
        columns: true,
        skip_empty_lines: true
      }, (err, records) => {
        if (err) reject(err);
        else resolve(records);
      });
    });

    console.log(`Found ${records.length} records in CSV`);

    // Create vendors
    for (const record of records) {
      const query = `
        CREATE (v:vendors {
          name: $business_name,
          category: $category,
          description: $description,
          rating: $rating,
          reviewCount: $reviewCount,
          price: $price,
          location: $location,
          imageUrl: $imageUrl
        })
      `;

      const params = {
        business_name: record.business_name ? record.business_name.trim() : 'Unknown Vendor',
        category: record.category_title ? record.category_title.trim() : 'Uncategorized',
        description: `${record.business_name || 'Unknown Vendor'} is a ${record.category_title || 'service provider'} serving ${record.city || 'the local'} area.`,
        rating: (Math.random() * 2 + 3).toFixed(1), // Random rating between 3.0 and 5.0
        reviewCount: Math.floor(Math.random() * 100) + 1, // Random number of reviews between 1 and 100
        price: Math.floor(Math.random() * 200) + 50, // Random price between 50 and 250
        location: record.city && record.state ? `${record.city}, ${record.state}` : 'Location not specified',
        imageUrl: `https://source.unsplash.com/random/400x300/?${encodeURIComponent((record.category_title || 'business').toLowerCase())}`
      };

      await session.run(query, params);
    }

    console.log('Created vendors');

    // Create indexes
    await session.run('CREATE INDEX vendor_name IF NOT EXISTS FOR (v:vendors) ON (v.name)');
    await session.run('CREATE INDEX vendor_category IF NOT EXISTS FOR (v:vendors) ON (v.category)');

    console.log('Created indexes');

    // Verify data
    const result = await session.run('MATCH (v:vendors) RETURN count(v) as count');
    console.log(`Seeded ${result.records[0].get('count')} vendors`);

  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  } finally {
    await session.close();
    await driver.close();
  }
}

// Run the seeding
seedDatabase()
  .then(() => {
    console.log('Database seeded successfully');
    process.exit(0);
  })
  .catch(error => {
    console.error('Failed to seed database:', error);
    process.exit(1);
  });
