'use client';

import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { ContactContent } from '../../features/contact';
import { Hero } from '@/components/ui';

export default function ContactPage() {
  return (
    <MainLayout>
      <div className="contact-page-container">
        {/* Hero section */}
        <Hero 
          title="Contact"
          titleHighlight="Doctors Portal"
          description="We're here to help and answer any questions you might have. Feel free to reach out to us."
          showButtons={false}
          backgroundColor="bg-light"
          primaryButtonText="Call Us"
          primaryButtonLink="tel:+201234567890"
        />
        
        {/* Main content */}
        <ContactContent />
      </div>
    </MainLayout>
  );
}
