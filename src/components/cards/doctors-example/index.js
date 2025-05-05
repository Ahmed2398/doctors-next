'use client';

import React, { useState } from 'react';
import DoctorsList from '../doctors-list';
import './styles.css';

// Sample data - in a real app, this would come from an API
const SAMPLE_DOCTORS = [
  {
    id: '1',
    name: 'Rana Ali',
    specialty: 'Dentist',
    image: '/images/doctor_placeholder.jpg', // Use a placeholder image
    description: 'Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cuodo....',
    rating: 5,
    reviewCount: 160,
    location: { lat: 48.8568376, lng: 2.3504305 },
    directionsUrl: 'https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/',
  },
  {
    id: '2',
    name: 'Ahmad Mahmoud',
    specialty: 'Cardiologist',
    image: '/images/doctor_placeholder.jpg',
    description: 'Expert in cardiovascular medicine with over 10 years of experience in treating heart conditions.',
    rating: 4,
    reviewCount: 78,
    location: { lat: 48.8565376, lng: 2.3514305 },
    directionsUrl: 'https://www.google.com/maps/dir//',
  },
  {
    id: '3',
    name: 'Sarah Johnson',
    specialty: 'Pediatrician',
    image: '/images/doctor_placeholder.jpg',
    description: 'Specialized in childrens healthcare with a compassionate approach to treating young patients.',
    rating: 5,
    reviewCount: 192,
    location: { lat: 48.8575376, lng: 2.3524305 },
    directionsUrl: 'https://www.google.com/maps/dir//',
  }
];

/**
 * Example component to showcase the DoctorsList component
 * with toggles between grid and list view
 */
const DoctorsExample = () => {
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'grid'
  
  return (
    <div className="container py-5">
      <div className="view-toggles">
        <button 
          className={`view-toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
          onClick={() => setViewMode('list')}
        >
          <i className="fas fa-list"></i> List View
        </button>
        <button 
          className={`view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
          onClick={() => setViewMode('grid')}
        >
          <i className="fas fa-th-large"></i> Grid View
        </button>
      </div>
      
      <DoctorsList 
        doctors={SAMPLE_DOCTORS} 
        viewMode={viewMode} 
        title="Our Specialists"
      />
    </div>
  );
};

export default DoctorsExample;
