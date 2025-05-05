'use client';

import React from 'react';
import { InfoSidebar } from '../../../components/navigation/sidebar';
import './AboutContent.css';

const AboutContent = () => {
  return (
    <div className="about-content">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="section-title text-center mb-5">
              <h2>About Doctors Portal</h2>
              <div className="divider mx-auto"></div>
            </div>
            
            <div className="about-mission mb-5">
              <h3>Our Mission</h3>
              <p>
                At Doctors Portal, our mission is to make healthcare accessible, convenient, and personalized for everyone. 
                We believe in connecting patients with the right healthcare professionals quickly and efficiently, 
                reducing wait times and improving the overall healthcare experience.
              </p>
            </div>

            <div className="about-vision mb-5">
              <h3>Our Vision</h3>
              <p>
                We envision a world where quality healthcare is just a click away, regardless of location or circumstance. 
                Through innovative technology and a network of dedicated professionals, we aim to revolutionize how 
                people access and experience healthcare services.
              </p>
            </div>

            <div className="about-story mb-5">
              <h3>Our Story</h3>
              <p>
                Founded in 2022, Doctors Portal began with a simple idea: to bridge the gap between patients and healthcare providers. 
                Our founders, experienced healthcare professionals themselves, recognized the challenges patients face when trying to find 
                the right doctor and book appointments. What started as a small directory of local physicians has grown into a comprehensive 
                platform connecting thousands of patients with qualified healthcare professionals across the country.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <div className="section-title text-center mb-5">
              <h2>Why Choose Us</h2>
              <div className="divider mx-auto"></div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="feature-box text-center">
              <div className="feature-icon">
                <i className="fas fa-user-md fa-3x text-primary"></i>
              </div>
              <h4 className="mt-4">Qualified Doctors</h4>
              <p>
                All doctors on our platform are verified professionals with valid credentials and excellent track records.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="feature-box text-center">
              <div className="feature-icon">
                <i className="fas fa-calendar-check fa-3x text-primary"></i>
              </div>
              <h4 className="mt-4">Easy Appointments</h4>
              <p>
                Book appointments with just a few clicks, anytime and anywhere. Receive instant confirmations.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="feature-box text-center">
              <div className="feature-icon">
                <i className="fas fa-comments fa-3x text-primary"></i>
              </div>
              <h4 className="mt-4">Patient Reviews</h4>
              <p>
                Read authentic reviews from real patients to make informed decisions about your healthcare providers.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="section-title text-center mb-5">
              <h2>Our Team</h2>
              <div className="divider mx-auto"></div>
            </div>

            <p className="text-center mb-5">
              Behind Doctors Portal is a dedicated team of healthcare professionals, technologists, and customer service specialists 
              working tirelessly to ensure you receive the best possible healthcare experience.
            </p>
          </div>
        </div>

        <div className="row team-members">
          <div className="col-md-4 mb-4">
            <div className="team-member text-center">
              <div className="member-image">
                <img src="/images/team/team-member-1.jpg" alt="Team Member" className="img-fluid rounded-circle" />
              </div>
              <h5 className="mt-4">Dr. Ahmed Hassan</h5>
              <p className="text-muted">Founder &amp; CEO</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="team-member text-center">
              <div className="member-image">
                <img src="/images/team/team-member-2.jpg" alt="Team Member" className="img-fluid rounded-circle" />
              </div>
              <h5 className="mt-4">Dr. Sarah Johnson</h5>
              <p className="text-muted">Medical Director</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="team-member text-center">
              <div className="member-image">
                <img src="/images/team/team-member-3.jpg" alt="Team Member" className="img-fluid rounded-circle" />
              </div>
              <h5 className="mt-4">Mohammad Ali</h5>
              <p className="text-muted">CTO</p>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12 mb-4">
            <h3 className="text-center">Clinic Highlights</h3>
            <p className="text-center">Discover what makes our network of healthcare providers stand out</p>
          </div>
          <div className="col-md-6 mb-4">
            <InfoSidebar 
              title="Our Achievements"
              description="Doctors Portal has been recognized for excellence in healthcare innovation"
              theme="primary"
              showStats={true}
              stats={[
                { value: "5000+", label: "Patients Served" },
                { value: "500+", label: "Doctors" },
                { value: "50+", label: "Specialties" },
                { value: "25+", label: "Locations" }
              ]}
              showHighlights={true}
              highlights={[
                { 
                  icon: "fas fa-award", 
                  title: "Excellence in Healthcare Innovation", 
                  description: "Awarded the Healthcare Innovation Prize 2023" 
                },
                { 
                  icon: "fas fa-star", 
                  title: "Patient Satisfaction", 
                  description: "95% patient satisfaction rating in 2024" 
                }
              ]}
              showAction={true}
              actionText="Join Our Network"
              actionLink="/contact"
            />
          </div>
          <div className="col-md-6">
            <InfoSidebar 
              title="Partnering with Doctors Portal"
              description="Are you a healthcare professional interested in joining our network?"
              theme="light"
              showHighlights={true}
              highlights={[
                { 
                  icon: "fas fa-users", 
                  title: "Expanded Patient Reach", 
                  description: "Access a wider network of patients seeking your expertise" 
                },
                { 
                  icon: "fas fa-calendar-alt", 
                  title: "Simplified Scheduling", 
                  description: "Our automated system handles appointments and reminders" 
                },
                { 
                  icon: "fas fa-chart-line", 
                  title: "Practice Growth", 
                  description: "Analytics and insights to help grow your practice" 
                },
                { 
                  icon: "fas fa-laptop-medical", 
                  title: "Telemedicine Support", 
                  description: "Built-in virtual consultation tools" 
                }
              ]}
              showAction={true}
              actionText="Apply Now"
              actionLink="/doctors/apply"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
