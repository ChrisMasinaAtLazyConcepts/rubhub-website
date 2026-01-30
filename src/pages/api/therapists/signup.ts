// pages/api/therapists/signup.ts
import { NextApiRequest, NextApiResponse } from 'next';

// Mock database - replace this with actual PostgreSQL
const mockDB: any[] = [];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      firstName,
      lastName,
      email,
      cell,
      whatsapp = '',
      experience = '',
      speciality = ''
    } = req.body;

    console.log('Received data:', req.body);

    // Basic validation
    if (!firstName || !lastName || !email || !cell) {
      return res.status(400).json({ 
        success: false,
        error: 'Missing required fields: firstName, lastName, email, cell' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false,
        error: 'Invalid email format' 
      });
    }

    // Check if email already exists
    const existing = mockDB.find(entry => entry.email === email);
    if (existing) {
      return res.status(409).json({ 
        success: false,
        error: 'An application with this email already exists' 
      });
    }

    // Create new application
    const newApplication = {
      id: Date.now(),
      firstName,
      lastName,
      email,
      cell,
      whatsapp,
      experience,
      speciality,
      submissionDate: new Date().toISOString(),
      status: 'pending',
      ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
      userAgent: req.headers['user-agent']
    };

    // Add to mock DB
    mockDB.push(newApplication);
    
    console.log('Mock DB contents:', mockDB);

    // Simulate saving to database (replace with actual PostgreSQL)
    // For now, we'll just log it
    console.log('Would save to database:', newApplication);

    // Return success response
    res.status(201).json({
      success: true,
      message: 'Application submitted successfully! We will contact you within 48 hours.',
      data: {
        id: newApplication.id,
        name: `${firstName} ${lastName}`,
        email,
        submissionDate: newApplication.submissionDate
      }
    });

  } catch (error: any) {
    console.error('API error:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to process application',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}