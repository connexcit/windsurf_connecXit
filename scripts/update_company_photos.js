require('dotenv').config();
const neo4j = require('neo4j-driver');

// Initialize Neo4j driver
const driver = neo4j.driver(
  process.env.NEO4J_URI,
  neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
);

// List of professional portrait images from Unsplash
const portraitImages = [
  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
  'https://images.unsplash.com/photo-1560250097-0b93528c311a',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956',
  'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91',
  'https://images.unsplash.com/photo-1573497019236-17f8177b81e8',
  'https://images.unsplash.com/photo-1559839734-2b71ea197ec2',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
];

function getRandomPortraitImage() {
  const imageUrl = portraitImages[Math.floor(Math.random() * portraitImages.length)];
  // Add Unsplash parameters for proper sizing and quality
  return `${imageUrl}?auto=format&fit=crop&w=400&h=400&q=80`;
}

async function updateCompanyPhotos() {
  const session = driver.session();

  try {
    // Update CXCompany nodes
    const cxCompanyResult = await session.run(`
      MATCH (c:CXCompany)
      RETURN c
    `);
    console.log(`Found ${cxCompanyResult.records.length} CXCompany nodes`);

    for (const record of cxCompanyResult.records) {
      const company = record.get('c');
      const name = company.properties.name || company.properties.business_name || 'Unknown';
      
      const imageUrl = getRandomPortraitImage();
      
      await session.run(`
        MATCH (c:CXCompany)
        WHERE id(c) = $id
        SET c.imageUrl = $imageUrl
      `, {
        id: company.identity,
        imageUrl: imageUrl
      });

      console.log(`Updated CXCompany ${name} with new portrait image URL`);
    }

    // Update vendors nodes
    const vendorsResult = await session.run(`
      MATCH (v:vendors)
      RETURN v
    `);
    console.log(`Found ${vendorsResult.records.length} vendor nodes`);

    for (const record of vendorsResult.records) {
      const vendor = record.get('v');
      const name = vendor.properties.name || vendor.properties.business_name || 'Unknown';
      
      const imageUrl = getRandomPortraitImage();
      
      await session.run(`
        MATCH (v:vendors)
        WHERE id(v) = $id
        SET v.imageUrl = $imageUrl
      `, {
        id: vendor.identity,
        imageUrl: imageUrl
      });

      console.log(`Updated vendor ${name} with new portrait image URL`);
    }

    console.log('Successfully updated all photos');
  } catch (error) {
    console.error('Error updating photos:', error);
  } finally {
    await session.close();
    await driver.close();
  }
}

// Run the update
updateCompanyPhotos()
  .then(() => {
    console.log('Update completed');
    process.exit(0);
  })
  .catch(error => {
    console.error('Update failed:', error);
    process.exit(1);
  });
