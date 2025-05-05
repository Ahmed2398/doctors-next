'use client';

import React from 'react';
import Link from 'next/link';
import './styles.css';

/**
 * A reusable dynamic Hero component that can be customized for different pages
 */
const Hero = ({
  title = "Expert Healthcare",
  titleHighlight = "At Your Fingertips",
  description = "Connect with professional doctors for consultations, appointments, and medical advice. Our platform makes healthcare accessible and convenient.",
  primaryButtonText = "Book Appointment",
  primaryButtonLink = "/appointments",
  secondaryButtonText = "Find a Doctor",
  secondaryButtonLink = "/doctors",
  showButtons = true,
  rightContent = null,
  backgroundColor = "bg-light",
  titleClassName = ""
}) => {
  return (
    <section className={`hero-section py-5 ${backgroundColor}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className={`${rightContent ? 'col-lg-6' : 'col-lg-8 mx-auto text-center'} mb-5 mb-lg-0`}>
            <h1 className={`hero-title font-weight-bold mb-3 ${titleClassName}`}>
              <span>{title}</span>{' '}
              {titleHighlight && <span className="text-primary">{titleHighlight}</span>}
            </h1>
            <p className="hero-description lead text-muted mb-4">
              {description}
            </p>
            {showButtons && (
              <div className={`hero-buttons d-flex ${!rightContent ? 'justify-content-center' : ''} flex-column flex-sm-row`}>
                <Link href={primaryButtonLink} className="btn btn-primary btn-lg mb-3 mb-sm-0 mr-sm-3">
                  {primaryButtonText}
                </Link>
                <Link href={secondaryButtonLink} className="btn btn-outline-primary btn-lg">
                  {secondaryButtonText}
                </Link>
              </div>
            )}
          </div>
          
          {rightContent ? (
            <div className="col-lg-6">
              {rightContent}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Hero;
