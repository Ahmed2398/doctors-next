'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import './DoctorsList.css';

const DoctorsList = ({ doctors, loading, error }) => {
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'grid'
  const [sortBy, setSortBy] = useState('rating'); // 'rating', 'name', 'distance'
  
  // Handle sort change
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };
  
  // Sort doctors based on selected criteria
  const getSortedDoctors = () => {
    if (!doctors || doctors.length === 0) return [];
    
    return [...doctors].sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'distance':
          return a.distance - b.distance;
        default:
          return 0;
      }
    });
  };
  
  // Create star rating display
  const renderRating = (rating) => {
    return (
      <div className="doctor-rating">
        {[...Array(5)].map((_, i) => (
          <i 
            key={i} 
            className={`${i < rating ? 'fas' : 'far'} fa-star`}
          ></i>
        ))}
        <span className="rating-value">({rating.toFixed(1)})</span>
      </div>
    );
  };
  
  // Get doctors to display
  const sortedDoctors = getSortedDoctors();
  
  // Different states
  if (loading) {
    return (
      <div className="doctors-list-container">
        <div className="doctors-list-loading">
          <div className="spinner">
            <i className="fas fa-circle-notch fa-spin"></i>
          </div>
          <p>Finding the best doctors for you...</p>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="doctors-list-container">
        <div className="doctors-list-error">
          <i className="fas fa-exclamation-circle"></i>
          <h3>Something went wrong</h3>
          <p>We encountered an error while searching for doctors. Please try again later.</p>
          <button className="btn btn-primary">Try Again</button>
        </div>
      </div>
    );
  }
  
  if (!doctors || doctors.length === 0) {
    return (
      <div className="doctors-list-container">
        <div className="doctors-list-empty">
          <i className="fas fa-user-md"></i>
          <h3>No doctors found</h3>
          <p>We couldn&apos;t find any doctors matching your criteria. Try adjusting your filters.</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="doctors-list-container">
      <div className="doctors-list-header">
        <div className="doctors-count">
          <h3>{doctors.length} Doctor{doctors.length !== 1 ? 's' : ''} Found</h3>
        </div>
        <div className="doctors-sort">
          <div className="view-toggles">
            <button 
              className={`view-toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              <i className="fas fa-list"></i>
            </button>
            <button 
              className={`view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              <i className="fas fa-th-large"></i>
            </button>
          </div>
          <div className="sort-by">
            <label htmlFor="sortBy">Sort By:</label>
            <select 
              id="sortBy" 
              className="form-control" 
              value={sortBy} 
              onChange={handleSortChange}
            >
              <option value="rating">Highest Rating</option>
              <option value="name">Name (A to Z)</option>
              <option value="distance">Distance</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className={`doctors-list ${viewMode}`}>
        {sortedDoctors.map((doctor) => (
          <div key={doctor.id} className="doctor-card">
            <div className="doctor-favorite">
              <button className="favorite-btn" title="Add to favorites">
                <i className="far fa-heart"></i>
              </button>
            </div>
            
            <div className="doctor-image">
              {doctor.image ? (
                <img src={doctor.image} alt={`Dr. ${doctor.name}`} />
              ) : (
                <div className="placeholder-image">
                  <i className="fas fa-user-md"></i>
                </div>
              )}
            </div>
            
            <div className="doctor-info">
              <div className="doctor-speciality">{doctor.specialty}</div>
              <h3 className="doctor-name">
                <Link href={`/doctors/${doctor.id}`}>Dr. {doctor.name}</Link>
              </h3>
              <div className="doctor-location">
                <i className="fas fa-map-marker-alt"></i> {doctor.location}
              </div>
              
              {renderRating(doctor.rating)}
              
              <div className="doctor-availability">
                {doctor.nextAvailable ? (
                  <span className="available">
                    <i className="fas fa-calendar-check"></i> Available {doctor.nextAvailable}
                  </span>
                ) : (
                  <span className="unavailable">
                    <i className="fas fa-calendar-times"></i> No availability
                  </span>
                )}
              </div>
              
              <div className="doctor-description">
                {doctor.description}
              </div>
              
              {doctor.insurances && doctor.insurances.length > 0 && (
                <div className="doctor-insurances">
                  <span className="insurance-label">Accepts:</span>
                  <span className="insurance-list">
                    {doctor.insurances.slice(0, 2).join(', ')}
                    {doctor.insurances.length > 2 && ` +${doctor.insurances.length - 2} more`}
                  </span>
                </div>
              )}
              
              <div className="doctor-actions">
                <Link href={`/doctors/${doctor.id}`} className="btn btn-outline-primary btn-sm">
                  View Profile
                </Link>
                <Link href={`/appointments/new?doctor=${doctor.id}`} className="btn btn-primary btn-sm">
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="doctors-pagination">
        <button className="btn btn-outline-primary btn-sm disabled">
          <i className="fas fa-chevron-left"></i> Previous
        </button>
        <div className="pagination-pages">
          <button className="btn btn-primary btn-sm">1</button>
          <button className="btn btn-outline-primary btn-sm">2</button>
          <button className="btn btn-outline-primary btn-sm">3</button>
          <span>...</span>
          <button className="btn btn-outline-primary btn-sm">10</button>
        </div>
        <button className="btn btn-outline-primary btn-sm">
          Next <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default DoctorsList;
