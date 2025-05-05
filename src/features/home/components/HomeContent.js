'use client';

import React from 'react';
import Hero from './Hero';
import FeatureCards from './FeatureCards';
import Testimonials from './Testimonials';

const HomeContent = () => {
  return (
    <div className="home-content">
      <Hero />
      <FeatureCards />
      <Testimonials />
    </div>
  );
};

export default HomeContent;
