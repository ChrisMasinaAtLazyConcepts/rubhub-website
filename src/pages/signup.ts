// pages/api/therapists/signup.ts
import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs';
import { Pool } from 'pg';

// Disable the default body parser to handle file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};

const pool = new Pool({
  host: process.env.DB_HOST || '35.239.182.6',
  port: parseInt(process.env.DB_PORT || '5432'),
  database: process.env.DB_NAME || 'rubhub',
  user: process.env.DB_USER || 'rubhub',
  password: process.env.DB_PASSWORD || '',
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const form = formidable({
      multiples: false,
      keepExtensions: true,
      uploadDir: './public/uploads/qualifications',
    });

    const [fields, files] = await form.parse(req);

    const { 
      firstName, 
      lastName, 
      email, 
      cell, 
      whatsapp 
    } = fields;

    const qualificationFile = files.qualification?.[0];

    // Validate required fields
    if (!firstName?.[0] || !lastName?.[0] || !email?.[0] || !cell?.[0]) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Save file path if uploaded
    let qualificationPath = null;
    if (qualificationFile) {
      qualificationPath = qualificationFile.filepath;
    }

    // Save to PostgreSQL
    const client = await pool.connect();
    
    try {
      await client.query(
        `INSERT INTO therapists (
          first_name, 
          last_name, 
          email, 
          cell, 
          whatsapp, 
          qualification_path, 
          created_at, 
          status
        ) VALUES ($1, $2, $3, $4, $5, $6, NOW(), 'pending')`,
        [
          firstName[0],
          lastName[0],
          email[0],
          cell[0],
          whatsapp?.[0] || cell[0], // Default to cell if whatsapp not provided
          qualificationPath,
        ]
      );

      // Create therapists table if it doesn't exist (run this SQL separately)
      /*
        CREATE TABLE therapists (
          id SERIAL PRIMARY KEY,
          first_name VARCHAR(100) NOT NULL,
          last_name VARCHAR(100) NOT NULL,
          email VARCHAR(255) UNIQUE NOT NULL,
          cell VARCHAR(20) NOT NULL,
          whatsapp VARCHAR(20),
          qualification_path VARCHAR(500),
          status VARCHAR(20) DEFAULT 'pending',
          created_at TIMESTAMP DEFAULT NOW(),
          updated_at TIMESTAMP DEFAULT NOW()
        );
      */

    } finally {
      client.release();
    }

    res.status(200).json({ 
      success: true, 
      message: 'Application submitted successfully' 
    });

  } catch (error) {
    console.error('Error saving therapist data:', error);
    res.status(500).json({ 
      error: 'Internal server error', 
      details: error instanceof Error ? error.message : 'Unknown error' 
    });
  }
}