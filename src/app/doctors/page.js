'use client';

import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { DoctorsContent } from '../../features/doctors';
import { Hero } from '@/components/ui';

export default function DoctorsPage() {
  return (
    <MainLayout>
      <div className="doctors-page-container">
        {/* Hero section */}
        <Hero 
          title="Find the Right"
          titleHighlight="Doctor"
          description="Search our extensive network of qualified medical professionals to find the perfect match for your healthcare needs."
          showButtons={false}
          backgroundColor="bg-light"
        />
        
        {/* Main content with search and doctor listings */}
        <DoctorsContent />
      </div>
    </MainLayout>
  );
}
