'use client';

import React, { useState } from 'react';
import { InfoSidebar } from '../../../components/navigation/sidebar';
import './ContactContent.css';

const ContactContent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormError(true);
      setTimeout(() => setFormError(false), 3000);
      return;
    }
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Show success message and reset form
    setFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    setTimeout(() => setFormSubmitted(false), 5000);
  };
  
  return (
    <section className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="section-title text-center mb-5">
              <h2>Contact Us</h2>
              <div className="divider mx-auto"></div>
              <p className="lead">
                We're here to help and answer any questions you may have. We look forward to hearing from you.
              </p>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-7 mb-5 mb-lg-0">
            <div className="contact-form-card">
              <h3>Send us a Message</h3>
              
              {formSubmitted && (
                <div className="alert alert-success" role="alert">
                  Thank you for your message! We will get back to you soon.
                </div>
              )}
              
              {formError && (
                <div className="alert alert-danger" role="alert">
                  Please fill in all required fields.
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name <span className="required">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address <span className="required">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message <span className="required">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary btn-block">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          <div className="col-lg-5">
            <InfoSidebar 
              title="Contact Information"
              description="Feel free to reach out to us using any of the contact methods below. We're available Monday through Friday, 9:00 AM to 5:00 PM."
              showContactInfo={true}
              contactInfo={{
                address: "123 Medical Center Blvd, Cairo, Egypt",
                phone: "+20 12 3456 7890",
                email: "info@doctorsportal.com",
                workingHours: [
                  { day: "Monday - Friday", hours: "9:00 AM - 5:00 PM" },
                  { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
                  { day: "Sunday", hours: "Closed" }
                ]
              }}
              showSocialLinks={true}
              showAction={true}
              actionText="Book an Appointment"
              actionLink="/appointments"
            />
          </div>
        </div>
        
        <div className="row mt-5">
          <div className="col-12">
            <div className="map-container">
              <h3 className="text-center mb-4">Find Us on the Map</h3>
              <div className="map-responsive">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.5585405761668!2d31.229883!3d30.057897699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAzJzI4LjQiTiAzMcKwMTMnNDcuNiJF!5e0!3m2!1sen!2seg!4v1620148181024!5m2!1sen!2seg" 
                  width="600" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="faq-section">
              <h3 className="text-center mb-4">Frequently Asked Questions</h3>
              <div className="accordion" id="contactFAQ">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                      <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        How can I book an appointment with a doctor?
                      </button>
                    </h2>
                  </div>
                  <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#contactFAQ">
                    <div className="card-body">
                      You can book an appointment by visiting the doctor's profile page and clicking on the "Book Appointment" button. 
                      Follow the instructions to select a suitable date and time for your visit.
                    </div>
                  </div>
                </div>
                
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h2 className="mb-0">
                      <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        How do I cancel or reschedule an appointment?
                      </button>
                    </h2>
                  </div>
                  <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#contactFAQ">
                    <div className="card-body">
                      To cancel or reschedule an appointment, log in to your account, go to "My Appointments" section, 
                      select the appointment you wish to modify, and follow the instructions to cancel or reschedule.
                    </div>
                  </div>
                </div>
                
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h2 className="mb-0">
                      <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        How can I become a listed doctor on your platform?
                      </button>
                    </h2>
                  </div>
                  <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#contactFAQ">
                    <div className="card-body">
                      To join our platform as a healthcare provider, please contact our business development team at 
                      partners@doctorsportal.com or call +20 12 3456 7899. We'll guide you through the verification 
                      and onboarding process.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactContent;
