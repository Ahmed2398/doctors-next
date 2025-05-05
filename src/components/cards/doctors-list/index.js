'use client';

import React, { useState } from 'react';
import DoctorCard from '../doctor-card';
import './styles.css';

/**
 * A component that renders a list of doctor cards
 * This demonstrates how to use the DoctorCard component in different contexts
 */
const DoctorsList = ({ doctors, viewMode = 'grid', title = 'Our Doctors' }) => {
  const [favorites, setFavorites] = useState({});
  
  const handleToggleFavorite = (doctorId) => {
    setFavorites(prev => ({
      ...prev,
      [doctorId]: !prev[doctorId]
    }));
  };
  
  const handleViewMap = (doctorId, location) => {
    // In a real app, this would open a map with the doctor's location
    console.log(`Viewing map for doctor ${doctorId} at location:`, location);
    alert(`Map view would open for Dr. ${doctors.find(d => d.id === doctorId)?.name}`);
  };
  
  return (
    <div className="doctors-list-container">
      {title && <h2 className="doctors-list-title">{title}</h2>}
      
      <div className={`doctors-list ${viewMode}`}>
        {doctors.map(doctor => (
          <DoctorCard
            key={doctor.id}
            id={doctor.id}
            name={doctor.name}
            specialty={doctor.specialty}
            image={doctor.image}
            description={doctor.description}
            rating={doctor.rating}
            reviewCount={doctor.reviewCount}
            location={doctor.location}
            directionsUrl={doctor.directionsUrl}
            isFavorite={favorites[doctor.id] || false}
            onToggleFavorite={() => handleToggleFavorite(doctor.id)}
            onViewMap={() => handleViewMap(doctor.id, doctor.location)}
          />
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;
