'use client';

import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { FaqContent } from '../../features/faq';
import { Hero } from '@/components/ui';

export default function FaqPage() {
  return (
    <MainLayout>
      <div className="faq-page-container">
        {/* Hero section */}
        <Hero 
          title="Frequently Asked"
          titleHighlight="Questions"
          description="Find answers to common questions about our services, appointments, doctors, and more."
          showButtons={false}
          backgroundColor="bg-light"
        />
        
        {/* Main content */}
        <FaqContent />
      </div>
    </MainLayout>
  );
}
