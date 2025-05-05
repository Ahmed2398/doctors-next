'use client';

import React from 'react';
import Navbar from '../components/navigation/Navbar';
import UpperBar from '../components/navigation/UpperBar';
import Footer from '../components/navigation/Footer';

/**
 * Main layout component using Bootstrap 4
 */
const MainLayout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Upper Bar */}
      <UpperBar />
      
      {/* Header/Navbar */}
      <Navbar />
      
      {/* Main content */}
      <main className="flex-grow-1 py-4">
        <div className="container py-2">
          {children}
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
