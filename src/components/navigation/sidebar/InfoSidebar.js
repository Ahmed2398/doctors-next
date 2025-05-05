'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './InfoSidebar.css';

/**
 * A highly dynamic sidebar that can be used for different purposes:
 * - Contact information display
 * - Clinic highlights
 * - Doctor information
 * - Event announcements
 * - And more
 */
const InfoSidebar = ({
  // General settings
  title = "Information",
  description = "",
  theme = "light", // light, dark, primary, success
  
  // Contact information
  showContactInfo = false,
  contactInfo = {
    address: "",
    phone: "",
    email: "",
    workingHours: [] // Array of {day, hours} objects
  },
  
  // Social media
  showSocialLinks = false,
  socialLinks = [
    { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
    { platform: "twitter", icon: "fab fa-twitter", url: "#" },
    { platform: "instagram", icon: "fab fa-instagram", url: "#" },
    { platform: "linkedin", icon: "fab fa-linkedin-in", url: "#" }
  ],
  
  // Highlights (for clinics, services, etc.)
  showHighlights = false,
  highlights = [
    // { icon: "fas fa-stethoscope", title: "Professional Doctors", description: "Experienced healthcare professionals" }
  ],
  
  // Statistics
  showStats = false,
  stats = [
    // { value: "5000+", label: "Patients" }
  ],
  
  // Images
  showImages = false,
  images = [
    // { src: "/images/clinic1.jpg", alt: "Clinic", width: 100, height: 100 }
  ],
  
  // Action button
  showAction = false,
  actionText = "Learn More",
  actionLink = "#",
  actionTarget = "_self",
  
  // Custom content
  additionalContent = null,
  
  // Additional CSS classes
  className = ""
}) => {
  // Helper function for rendering contact info
  const renderContactInfo = () => {
    if (!showContactInfo) return null;
    
    return (
      <div className="info-sidebar-section contact-section">
        {contactInfo.address && (
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <strong>Address</strong>
              <p>{contactInfo.address}</p>
            </div>
          </div>
        )}
        
        {contactInfo.phone && (
          <div className="contact-item">
            <i className="fas fa-phone-alt"></i>
            <div>
              <strong>Phone</strong>
              <p>
                <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}>
                  {contactInfo.phone}
                </a>
              </p>
            </div>
          </div>
        )}
        
        {contactInfo.email && (
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <div>
              <strong>Email</strong>
              <p>
                <a href={`mailto:${contactInfo.email}`}>
                  {contactInfo.email}
                </a>
              </p>
            </div>
          </div>
        )}
        
        {contactInfo.workingHours && contactInfo.workingHours.length > 0 && (
          <div className="contact-item">
            <i className="fas fa-clock"></i>
            <div>
              <strong>Working Hours</strong>
              {contactInfo.workingHours.map((schedule, index) => (
                <p key={index}>
                  {schedule.day}: {schedule.hours}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };
  
  // Helper function for rendering social links
  const renderSocialLinks = () => {
    if (!showSocialLinks || !socialLinks || socialLinks.length === 0) return null;
    
    return (
      <div className="info-sidebar-section social-links">
        <h4>Follow Us</h4>
        <div className="social-icons">
          {socialLinks.map((social, index) => (
            <a 
              href={social.url} 
              className={`social-icon ${social.platform}`} 
              key={index} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
      </div>
    );
  };
  
  // Helper function for rendering highlights
  const renderHighlights = () => {
    if (!showHighlights || !highlights || highlights.length === 0) return null;
    
    return (
      <div className="info-sidebar-section highlights">
        {highlights.map((highlight, index) => (
          <div className="highlight-item" key={index}>
            {highlight.icon && <i className={highlight.icon}></i>}
            <div>
              {highlight.title && <h5>{highlight.title}</h5>}
              {highlight.description && <p>{highlight.description}</p>}
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  // Helper function for rendering statistics
  const renderStats = () => {
    if (!showStats || !stats || stats.length === 0) return null;
    
    return (
      <div className="info-sidebar-section stats">
        {stats.map((stat, index) => (
          <div className="stat-item" key={index}>
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    );
  };
  
  // Helper function for rendering images
  const renderImages = () => {
    if (!showImages || !images || images.length === 0) return null;
    
    return (
      <div className="info-sidebar-section images">
        <div className="image-grid">
          {images.map((image, index) => (
            <div className="image-item" key={index}>
              <Image 
                src={image.src} 
                alt={image.alt || ""} 
                width={image.width || 100} 
                height={image.height || 100} 
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  // Helper function for rendering action button
  const renderAction = () => {
    if (!showAction) return null;
    
    return (
      <div className="info-sidebar-section action">
        {actionTarget === "_self" ? (
          <Link href={actionLink} className="action-button">
            {actionText}
          </Link>
        ) : (
          <a 
            href={actionLink} 
            className="action-button" 
            target={actionTarget} 
            rel="noopener noreferrer"
          >
            {actionText}
          </a>
        )}
      </div>
    );
  };
  
  return (
    <div className={`info-sidebar theme-${theme} ${className}`}>
      <div className="info-sidebar-card">
        <h3 className="sidebar-title">{title}</h3>
        
        {description && <p className="sidebar-description">{description}</p>}
        
        {renderContactInfo()}
        {renderHighlights()}
        {renderStats()}
        {renderImages()}
        {renderSocialLinks()}
        {renderAction()}
        
        {additionalContent && (
          <div className="info-sidebar-section custom-content">
            {additionalContent}
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoSidebar;
