'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { DoctorSearch, DoctorsList } from './search';
import './DoctorsContent.css';

// Sample doctor data for demonstration
const sampleDoctors = [
  {
    id: 1,
    name: 'Ahmed Hassan',
    specialty: 'Cardiology',
    location: 'Cairo',
    rating: 4.9,
    reviews: 124,
    nextAvailable: 'Today',
    image: '/images/doctors/doctor1.jpg',
    description: 'Dr. Ahmed is a board-certified cardiologist with over 15 years of experience specializing in interventional cardiology and heart disease prevention.',
    distance: 2.3,
    insurances: ['MetLife', 'Allianz', 'National Insurance'],
    gender: 'male'
  },
  {
    id: 2,
    name: 'Sarah Mohamed',
    specialty: 'Dermatology',
    location: 'Alexandria',
    rating: 4.8,
    reviews: 97,
    nextAvailable: 'Tomorrow',
    image: '/images/doctors/doctor2.jpg',
    description: 'Dr. Sarah is a dermatologist focused on both medical and cosmetic dermatology with expertise in treating skin conditions like acne, eczema, and psoriasis.',
    distance: 3.5,
    insurances: ['AXA', 'Health Insurance Company'],
    gender: 'female'
  },
  {
    id: 3,
    name: 'Mohamed Kamal',
    specialty: 'Orthopedics',
    location: 'Cairo',
    rating: 4.7,
    reviews: 86,
    nextAvailable: 'Thursday',
    image: '/images/doctors/doctor3.jpg',
    description: 'Dr. Mohamed specializes in sports medicine and joint replacement surgery, with advanced training in minimally invasive surgical techniques.',
    distance: 1.8,
    insurances: ['Bupa', 'MetLife', 'National Insurance'],
    gender: 'male'
  },
  {
    id: 4,
    name: 'Nour Adel',
    specialty: 'Psychiatry',
    location: 'Giza',
    rating: 4.9,
    reviews: 112,
    nextAvailable: 'Today',
    image: '/images/doctors/doctor4.jpg',
    description: 'Dr. Nour is a psychiatrist specializing in anxiety, depression, and PTSD treatment using evidence-based therapeutic approaches.',
    distance: 4.2,
    insurances: ['AXA', 'Health Insurance Company'],
    gender: 'female'
  },
  {
    id: 5,
    name: 'Khaled Omar',
    specialty: 'Pediatrics',
    location: 'Alexandria',
    rating: 4.8,
    reviews: 145,
    nextAvailable: 'Tomorrow',
    image: '/images/doctors/doctor5.jpg',
    description: 'Dr. Khaled is a pediatrician with a focus on childhood development, preventative care, and managing chronic conditions in children.',
    distance: 3.0,
    insurances: ['Bupa', 'Allianz'],
    gender: 'male'
  },
  {
    id: 6,
    name: 'Laila Ibrahim',
    specialty: 'Gynecology',
    location: 'Cairo',
    rating: 4.9,
    reviews: 178,
    nextAvailable: 'Friday',
    image: '/images/doctors/doctor6.jpg',
    description: 'Dr. Laila is a gynecologist specializing in women\'s health, fertility treatments, and minimally invasive gynecological surgery.',
    distance: 2.5,
    insurances: ['MetLife', 'AXA', 'Health Insurance Company'],
    gender: 'female'
  }
];

const DoctorsContent = () => {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [filters, setFilters] = useState({
    searchQuery: searchParams?.get('query') || '',
    specialty: searchParams?.get('specialty') || '',
    location: searchParams?.get('location') || '',
    rating: searchParams?.get('rating') || '',
    gender: searchParams?.get('gender') || '',
    availability: searchParams?.get('availability') || '',
    insurance: searchParams?.get('insurance') || ''
  });

  // Filter doctors based on search params
  useEffect(() => {
    setLoading(true);
    
    // Simulate API call with timeout
    const timeoutId = setTimeout(() => {
      try {
        let results = [...sampleDoctors];
        
        // Apply filters
        if (filters.searchQuery) {
          const query = filters.searchQuery.toLowerCase();
          results = results.filter(
            doctor => doctor.name.toLowerCase().includes(query)
          );
        }
        
        if (filters.specialty) {
          results = results.filter(
            doctor => doctor.specialty === filters.specialty
          );
        }
        
        if (filters.location) {
          results = results.filter(
            doctor => doctor.location === filters.location
          );
        }
        
        if (filters.rating) {
          const minRating = parseFloat(filters.rating);
          results = results.filter(
            doctor => doctor.rating >= minRating
          );
        }
        
        if (filters.gender) {
          results = results.filter(
            doctor => doctor.gender === filters.gender
          );
        }
        
        if (filters.insurance) {
          results = results.filter(
            doctor => doctor.insurances && doctor.insurances.includes(filters.insurance)
          );
        }
        
        if (filters.availability) {
          switch (filters.availability) {
            case 'today':
              results = results.filter(
                doctor => doctor.nextAvailable === 'Today'
              );
              break;
            case 'tomorrow':
              results = results.filter(
                doctor => doctor.nextAvailable === 'Tomorrow'
              );
              break;
            case 'this-week':
              results = results.filter(
                doctor => ['Today', 'Tomorrow', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].includes(doctor.nextAvailable)
              );
              break;
            default:
              break;
          }
        }
        
        setFilteredDoctors(results);
        setError(null);
      } catch (err) {
        setError('An error occurred while filtering doctors');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }, 600); // Simulate API delay
    
    return () => clearTimeout(timeoutId);
  }, [filters]);

  // Handle filter changes from the search component
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="doctors-content">
      <div className="container py-4">
        <div className="row">
          <div className="col-12">
            <h1 className="page-title">Find a Doctor</h1>
            <div className="subtitle mb-4">
              Search for the best doctors that match your needs
            </div>
            
            {/* Doctor Search Component */}
            <DoctorSearch 
              onFilterChange={handleFilterChange} 
            />
            
            {/* Doctor Results */}
            <DoctorsList 
              doctors={filteredDoctors} 
              loading={loading} 
              error={error} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsContent;
