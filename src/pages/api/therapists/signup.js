// pages/api/spa-applications.js
import { Pool } from 'pg';

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const client = await pool.connect();
  try {
    const {
      firstName,
      lastName,
      email,
      cell,
      whatsapp,
      experience,
      speciality,
    } = req.body;

    const query = `
      INSERT INTO spa_applications (
        first_name, last_name, email, cell, whatsapp, 
        experience, speciality, created_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, NOW())
      RETURNING *;
    `;

    const values = [
      firstName, lastName, email, cell, whatsapp, 
      experience, speciality
    ];

    const result = await client.query(query, values);
    
    res.status(201).json({
      success: true,
      message: 'Application submitted successfully',
      data: result.rows[0],
    });

  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error submitting application',
      error: error.message 
    });
  } finally {
    client.release();
  }
}