'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import './DoctorSearch.css';

const DoctorSearch = ({ onFilterChange }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Initial filter states (from URL or default)
  const [searchQuery, setSearchQuery] = useState(searchParams?.get('query') || '');
  const [specialty, setSpecialty] = useState(searchParams?.get('specialty') || '');
  const [location, setLocation] = useState(searchParams?.get('location') || '');
  const [rating, setRating] = useState(searchParams?.get('rating') || '');
  const [gender, setGender] = useState(searchParams?.get('gender') || '');
  const [availability, setAvailability] = useState(searchParams?.get('availability') || '');
  const [insurance, setInsurance] = useState(searchParams?.get('insurance') || '');
  const [isAdvancedFilterOpen, setIsAdvancedFilterOpen] = useState(false);
  
  // Sample data for the filters
  const specialties = [
    'Cardiology',
    'Dermatology',
    'Endocrinology',
    'Family Medicine',
    'Gastroenterology',
    'Gynecology',
    'Neurology',
    'Ophthalmology',
    'Orthopedics',
    'Pediatrics',
    'Psychiatry',
    'Urology'
  ];
  
  const locations = [
    'Cairo',
    'Alexandria',
    'Giza',
    'Sharm El Sheikh',
    'Hurghada',
    'Luxor',
    'Aswan',
    'Port Said',
    'Suez',
    'Ismailia'
  ];
  
  const insuranceProviders = [
    'Health Insurance Company',
    'National Insurance',
    'MetLife',
    'Allianz',
    'AXA',
    'Bupa'
  ];
  
  // Update URL with current filters
  const updateUrlWithFilters = () => {
    const params = new URLSearchParams();
    
    if (searchQuery) params.set('query', searchQuery);
    if (specialty) params.set('specialty', specialty);
    if (location) params.set('location', location);
    if (rating) params.set('rating', rating);
    if (gender) params.set('gender', gender);
    if (availability) params.set('availability', availability);
    if (insurance) params.set('insurance', insurance);
    
    const newUrl = `/doctors?${params.toString()}`;
    router.push(newUrl, { scroll: false });
  };
  
  // Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    updateUrlWithFilters();
    
    // Pass filter data to parent component if callback exists
    if (onFilterChange) {
      onFilterChange({
        searchQuery,
        specialty,
        location,
        rating,
        gender,
        availability,
        insurance
      });
    }
  };
  
  // Reset all filters
  const handleResetFilters = () => {
    setSearchQuery('');
    setSpecialty('');
    setLocation('');
    setRating('');
    setGender('');
    setAvailability('');
    setInsurance('');
    
    // Update URL and notify parent
    const newUrl = `/doctors`;
    router.push(newUrl);
    
    if (onFilterChange) {
      onFilterChange({});
    }
  };
  
  // Toggle advanced filter visibility
  const toggleAdvancedFilter = () => {
    setIsAdvancedFilterOpen(!isAdvancedFilterOpen);
  };
  
  // Generate star rating UI
  const renderStarOptions = () => {
    const stars = [];
    for (let i = 5; i >= 1; i--) {
      stars.push(
        <div key={i} className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="rating"
            id={`rating${i}`}
            value={i}
            checked={rating === String(i)}
            onChange={(e) => setRating(e.target.value)}
          />
          <label className="form-check-label" htmlFor={`rating${i}`}>
            {[...Array(i)].map((_, index) => (
              <i key={index} className="fas fa-star text-warning"></i>
            ))}
            {[...Array(5 - i)].map((_, index) => (
              <i key={index} className="far fa-star text-warning"></i>
            ))}
            <span className="ml-2">{i}+ stars</span>
          </label>
        </div>
      );
    }
    return stars;
  };
  
  return (
    <div className="doctor-search">
      <div className="search-container">
        {/* Basic Search Form */}
        <form onSubmit={handleSearch} className="search-form">
          <div className="row">
            <div className="col-lg-4 col-md-5">
              <div className="form-group">
                <label htmlFor="searchQuery">
                  <i className="fas fa-search"></i> Doctor Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="searchQuery"
                  placeholder="Search by name"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            <div className="col-lg-3 col-md-4">
              <div className="form-group">
                <label htmlFor="specialty">
                  <i className="fas fa-stethoscope"></i> Specialty
                </label>
                <select
                  className="form-control"
                  id="specialty"
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                >
                  <option value="">All Specialties</option>
                  {specialties.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-3">
              <div className="form-group">
                <label htmlFor="location">
                  <i className="fas fa-map-marker-alt"></i> Location
                </label>
                <select
                  className="form-control"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option value="">All Locations</option>
                  {locations.map((l) => (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="col-lg-2 col-md-12 d-flex align-items-end">
              <button type="submit" className="btn btn-primary btn-search">
                <i className="fas fa-search"></i> Search
              </button>
            </div>
          </div>
          
          {/* Advanced Filters Section */}
          <div className="advanced-filters-toggle">
            <button
              type="button"
              className="btn btn-link"
              onClick={toggleAdvancedFilter}
            >
              {isAdvancedFilterOpen ? (
                <>
                  <i className="fas fa-chevron-up"></i> Hide Advanced Filters
                </>
              ) : (
                <>
                  <i className="fas fa-chevron-down"></i> Show Advanced Filters
                </>
              )}
            </button>
            
            {(specialty || location || rating || gender || availability || insurance) && (
              <button
                type="button"
                className="btn btn-link text-danger"
                onClick={handleResetFilters}
              >
                <i className="fas fa-times"></i> Reset All Filters
              </button>
            )}
          </div>
          
          {isAdvancedFilterOpen && (
            <div className="advanced-filters">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <h5>Rating</h5>
                  <div className="filter-group">
                    {renderStarOptions()}
                  </div>
                </div>
                
                <div className="col-lg-3 col-md-6">
                  <h5>Gender</h5>
                  <div className="filter-group">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="genderAll"
                        value=""
                        checked={gender === ''}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <label className="form-check-label" htmlFor="genderAll">
                        All
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="genderMale"
                        value="male"
                        checked={gender === 'male'}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <label className="form-check-label" htmlFor="genderMale">
                        Male
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="genderFemale"
                        value="female"
                        checked={gender === 'female'}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <label className="form-check-label" htmlFor="genderFemale">
                        Female
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-3 col-md-6">
                  <h5>Availability</h5>
                  <div className="filter-group">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="availability"
                        id="availabilityAll"
                        value=""
                        checked={availability === ''}
                        onChange={(e) => setAvailability(e.target.value)}
                      />
                      <label className="form-check-label" htmlFor="availabilityAll">
                        Any Time
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="availability"
                        id="availabilityToday"
                        value="today"
                        checked={availability === 'today'}
                        onChange={(e) => setAvailability(e.target.value)}
                      />
                      <label className="form-check-label" htmlFor="availabilityToday">
                        Available Today
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="availability"
                        id="availabilityTomorrow"
                        value="tomorrow"
                        checked={availability === 'tomorrow'}
                        onChange={(e) => setAvailability(e.target.value)}
                      />
                      <label className="form-check-label" htmlFor="availabilityTomorrow">
                        Available Tomorrow
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="availability"
                        id="availabilityThisWeek"
                        value="this-week"
                        checked={availability === 'this-week'}
                        onChange={(e) => setAvailability(e.target.value)}
                      />
                      <label className="form-check-label" htmlFor="availabilityThisWeek">
                        This Week
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-3 col-md-6">
                  <h5>Insurance</h5>
                  <div className="filter-group">
                    <div className="form-group">
                      <select
                        className="form-control"
                        value={insurance}
                        onChange={(e) => setInsurance(e.target.value)}
                      >
                        <option value="">Any Insurance</option>
                        {insuranceProviders.map((provider) => (
                          <option key={provider} value={provider}>
                            {provider}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default DoctorSearch;
