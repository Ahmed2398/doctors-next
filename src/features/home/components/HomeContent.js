'use client';

import React from 'react';
import FeatureCards from './FeatureCards';
import Testimonials from './Testimonials';

const HomeContent = () => {
  return (
    <div className="home-content">
      <FeatureCards />
      <Testimonials />
    </div>
  );
};

export default HomeContent;
