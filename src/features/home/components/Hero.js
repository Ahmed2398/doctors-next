'use client';

import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h1 className="display-4 font-weight-bold mb-3">
              <span>Expert Healthcare</span>{' '}
              <span className="text-primary">At Your Fingertips</span>
            </h1>
            <p className="lead text-muted mb-4">
              Connect with professional doctors for consultations, appointments, and medical advice. Our platform makes healthcare accessible and convenient.
            </p>
            <div className="d-flex flex-column flex-sm-row">
              <Link href="/appointments" className="btn btn-primary btn-lg mb-3 mb-sm-0 mr-sm-3">
                Book Appointment
              </Link>
              <Link href="/doctors" className="btn btn-outline-primary btn-lg">
                Find a Doctor
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bg-primary text-white rounded p-5 d-flex justify-content-center align-items-center" style={{ minHeight: '350px' }}>
              <h2 className="display-4 font-weight-bold">Doctor Portal</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
