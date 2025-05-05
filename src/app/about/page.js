'use client';

import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { AboutContent } from '../../features/about';
import { Hero } from '@/components/ui';

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="about-page-container">
        {/* Hero section */}
        <Hero 
          title="About"
          titleHighlight="Doctors Portal"
          description="We're here to help and answer any questions you might have. Feel free to reach out to us."
          showButtons={false}
          backgroundColor="bg-light"
          primaryButtonText="Call Us"
          primaryButtonLink="tel:+201234567890"
        />
        
        {/* Main content */}
        <AboutContent />
      </div>
    </MainLayout>
  );
}
