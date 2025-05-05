'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './styles.css';

/**
 * A reusable doctor card component that can be used throughout the application
 */
const DoctorCard = ({
  id,
  name,
  specialty,
  image,
  description,
  rating,
  reviewCount,
  location,
  directionsUrl,
  isFavorite,
  onToggleFavorite,
  onViewMap
}) => {
  // Generate star rating elements based on rating value
  const renderStars = () => {
    const stars = [];
    const maxStars = 5;
    
    for (let i = 1; i <= maxStars; i++) {
      stars.push(
        <li key={i} className="list-inline-item">
          <i className={`fas fa-star ${i <= rating ? 'voted' : ''}`}></i>
        </li>
      );
    }
    
    return stars;
  };
  
  return (
    <div className="doctor-card">
      <div className="favorite-btn" onClick={onToggleFavorite}>
        <i className={`fas fa-heart ${isFavorite ? 'active' : ''}`}></i>
      </div>
      
      <figure className="doctor-image">
        <Link href={`/doctors/${id}`}>
          {image ? (
            <Image 
              src={image} 
              alt={`Dr. ${name}`} 
              width={120} 
              height={120} 
              objectFit="cover"
            />
          ) : (
            <div className="placeholder-image">
              <i className="fas fa-user-md"></i>
            </div>
          )}
        </Link>
      </figure>
      
      <div className="doctor-info">
        <div className="specialty">{specialty}</div>
        <h3 className="doctor-name">Dr. {name}</h3>
        <p className="description">{description}</p>
        
        <div className="rating-container">
          <ul className="rating-stars list-inline">
            {renderStars()}
            <li className="list-inline-item review-count">
              <small>({reviewCount})</small>
            </li>
          </ul>
        </div>
        
        <div className="doctor-actions">
          <div className="action-buttons">
            <button onClick={onViewMap} className="btn-map">
              <i className="fas fa-map-marker-alt"></i> View on Map
            </button>
            
            <a 
              href={directionsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-directions"
            >
              <i className="fas fa-directions"></i> Directions
            </a>
            
            <Link href={`/doctors/${id}`} className="btn-details">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Default props for the component
DoctorCard.defaultProps = {
  rating: 0,
  reviewCount: 0,
  description: '',
  isFavorite: false,
  onToggleFavorite: () => {},
  onViewMap: () => {},
  directionsUrl: '#'
};

export default DoctorCard;
