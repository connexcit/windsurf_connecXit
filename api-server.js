const express = require('express');
const neo4j = require('neo4j-driver');
const cors = require('cors');
const fs = require('fs');
const csv = require('csv-parse');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// CORS configuration
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3005'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// JWT secret
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Neo4j driver setup
const driver = neo4j.driver(
  process.env.NEO4J_URI || 'bolt://localhost:7687',
  neo4j.auth.basic(
    process.env.NEO4J_USER || 'neo4j',
    process.env.NEO4J_PASSWORD || 'password'
  )
);

// Email configuration
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Helper function to send verification email
const sendVerificationEmail = async (email, token) => {
  const verificationUrl = `${process.env.FRONTEND_URL || 'http://localhost:5173'}/verify-email?token=${token}`;
  
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Verify your email address',
    html: `
      <h1>Welcome to ConnecXit!</h1>
      <p>Please click the link below to verify your email address:</p>
      <a href="${verificationUrl}">${verificationUrl}</a>
      <p>This link will expire in 24 hours.</p>
    `
  });
};

const vendorsRouter = require('./src/routes/vendors');

app.post('/api/upload-csv', async (req, res) => {
  const session = driver.session();

  try {
    // Read the CSV file
    const csvPath = path.join(__dirname, 'src', 'misc', 'Connexit_list_unDpulicated.csv');
    const fileContent = fs.readFileSync(csvPath, 'utf-8');

    // Parse CSV
    const records = await new Promise((resolve, reject) => {
      csv.parse(fileContent, {
        columns: true,
        skip_empty_lines: true,
        trim: true
      }, (err, records) => {
        if (err) reject(err);
        else resolve(records);
      });
    });

    console.log(`Found ${records.length} records in CSV`);

    // Drop existing constraints if any
    try {
      await session.run('DROP CONSTRAINT IF EXISTS FOR (c:CXCompany) REQUIRE c.business_name IS UNIQUE');
    } catch (error) {
      console.log('No existing constraint to drop');
    }

    // Create new constraint
    await session.run('CREATE CONSTRAINT FOR (c:CXCompany) REQUIRE c.business_name IS UNIQUE');

    // Clear existing data
    await session.run('MATCH (c:CXCompany) DETACH DELETE c');

    let successCount = 0;
    // Upload records
    for (const record of records) {
      try {
        await session.run(
          `
          MERGE (c:CXCompany {business_name: $business_name})
          SET c = $properties
          `,
          {
            business_name: record.business_name,
            properties: {
              category_title: record.category_title,
              business_name: record.business_name,
              address: record.address,
              city: record.city,
              state: record.state,
              zip_code: record.zip_code,
              display_phone: record.display_phone
            }
          }
        );
        successCount++;
      } catch (error) {
        console.error(`Error uploading record: ${record.business_name}`, error);
      }
    }

    // Get final count of records in database
    const result = await session.run('MATCH (c:CXCompany) RETURN count(c) as count');
    const finalCount = result.records[0].get('count').toNumber();

    res.json({ 
      message: 'CSV data uploaded successfully',
      totalRecords: records.length,
      successfullyUploaded: successCount,
      finalDatabaseCount: finalCount
    });
  } catch (error) {
    console.error('Error uploading CSV:', error);
    res.status(500).json({ message: 'Error uploading CSV', error: error.message });
  } finally {
    await session.close();
  }
});

// Add an endpoint to get the current count
app.get('/api/company-count', async (req, res) => {
  const session = driver.session();
  try {
    const result = await session.run('MATCH (c:CXCompany) RETURN count(c) as count');
    const count = result.records[0].get('count').toNumber();
    res.json({ count });
  } catch (error) {
    console.error('Error getting count:', error);
    res.status(500).json({ message: 'Error getting count', error: error.message });
  } finally {
    await session.close();
  }
});

// User registration endpoint with enhanced security
app.post('/api/register', [
  body('firstName').trim().notEmpty().withMessage('First name is required'),
  body('lastName').trim().notEmpty().withMessage('Last name is required'),
  body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/)
    .withMessage('Password must include one lowercase letter, one uppercase letter, one number, and one special character'),
  body('phoneNumber')
    .optional()
    .matches(/^[\d\-\(\)\s]+$/)
    .withMessage('Invalid phone number format')
], async (req, res) => {
  console.log('Registration request received:', req.body);
  
  try {
    // Check validation results
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('Validation errors:', errors.array());
      return res.status(400).json({ 
        message: 'Validation failed',
        errors: errors.array() 
      });
    }

    const { firstName, lastName, email, password, phoneNumber } = req.body;
    const session = driver.session();

    try {
      // Check if user already exists
      const existingUser = await session.run(
        'MATCH (u:CXUser {email: $email}) RETURN u',
        { email }
      );

      if (existingUser.records.length > 0) {
        return res.status(400).json({ message: 'User with this email already exists' });
      }

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Generate verification token
      const verificationToken = jwt.sign(
        { email },
        JWT_SECRET,
        { expiresIn: '24h' }
      );

      // Create new user
      const result = await session.run(
        `
        CREATE (u:CXUser {
          id: randomUUID(),
          firstName: $firstName,
          lastName: $lastName,
          email: $email,
          password: $hashedPassword,
          phoneNumber: $phoneNumber,
          verificationToken: $verificationToken,
          isVerified: false,
          createdAt: datetime(),
          updatedAt: datetime()
        })
        RETURN u
        `,
        {
          firstName,
          lastName,
          email,
          phoneNumber,
          hashedPassword,
          verificationToken
        }
      );

      const user = result.records[0].get('u').properties;
      delete user.password;
      delete user.verificationToken;

      // Try to send verification email, but don't fail if it doesn't work
      try {
        if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
          await sendVerificationEmail(email, verificationToken);
        }
      } catch (emailError) {
        console.warn('Failed to send verification email:', emailError);
        // Continue with registration even if email fails
      }

      res.json({
        message: 'Registration successful! You can now log in.',
        user
      });
    } finally {
      await session.close();
    }
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ 
      message: 'Error registering user. Please try again.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined 
    });
  }
});

// Email verification endpoint
app.get('/api/verify-email/:token', async (req, res) => {
  const session = driver.session();
  try {
    const { token } = req.params;
    
    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);
    
    // Update user verification status
    const result = await session.run(
      `
      MATCH (u:CXUser {email: $email, verificationToken: $token})
      SET u.isVerified = true,
          u.verificationToken = null,
          u.updatedAt = datetime()
      RETURN u
      `,
      {
        email: decoded.email,
        token
      }
    );

    if (result.records.length === 0) {
      return res.status(400).json({ message: 'Invalid or expired verification token' });
    }

    res.json({ message: 'Email verified successfully' });
  } catch (error) {
    console.error('Error verifying email:', error);
    res.status(400).json({ message: 'Invalid or expired verification token' });
  } finally {
    await session.close();
  }
});

// Add request logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Use vendors router
app.use('/api/vendors', vendorsRouter);

const PORT = process.env.API_PORT || 3005;
app.listen(PORT, () => {
  console.log(`API Server running on port ${PORT}`);
});
