'use client';

import React, { useState } from 'react';
import { InfoSidebar } from '../../../components/navigation/sidebar';
import './FaqContent.css';

const FaqContent = () => {
  // State to track which category of questions to display
  const [activeCategory, setActiveCategory] = useState('general');
  
  // FAQ categories and questions
  const faqCategories = [
    { id: 'general', label: 'General Information' },
    { id: 'appointments', label: 'Appointments' },
    { id: 'doctors', label: 'Our Doctors' },
    { id: 'billing', label: 'Payment & Insurance' },
    { id: 'account', label: 'Your Account' },
    { id: 'privacy', label: 'Privacy & Security' }
  ];
  
  const faqItems = {
    general: [
      {
        id: 'general-1',
        question: 'What is Doctors Portal?',
        answer: 'Doctors Portal is a comprehensive healthcare platform that connects patients with qualified healthcare professionals. Our service allows you to find doctors, book appointments, receive telemedicine consultations, and manage your health records, all in one place.'
      },
      {
        id: 'general-2',
        question: 'How does Doctors Portal work?',
        answer: 'Doctors Portal works by connecting patients with healthcare providers through our online platform. Create an account, search for doctors based on specialty, location, or availability, book appointments, and receive care either in-person or through our secure telemedicine service.'
      },
      {
        id: 'general-3',
        question: 'Is Doctors Portal available in my area?',
        answer: 'Doctors Portal is currently available in major cities across Egypt. We\'re continuously expanding our network of healthcare providers. Check our coverage map on the homepage or enter your location in the search bar to see available doctors near you.'
      },
      {
        id: 'general-4',
        question: 'Do I need to register to use Doctors Portal?',
        answer: 'While you can browse doctors and information without registering, you\'ll need to create an account to book appointments, access telemedicine services, and manage your personal health information.'
      }
    ],
    appointments: [
      {
        id: 'appointments-1',
        question: 'How do I book an appointment?',
        answer: 'Booking an appointment is easy! Simply search for a doctor based on specialty, location, or availability, select a convenient time slot from their calendar, and confirm your booking. You\'ll receive a confirmation email with all the details.'
      },
      {
        id: 'appointments-2',
        question: 'Can I cancel or reschedule my appointment?',
        answer: 'Yes, you can cancel or reschedule appointments through your account dashboard. Please note that some providers have specific cancellation policies, which will be clearly displayed during booking. We recommend making any changes at least 24 hours before your scheduled appointment to avoid any fees.'
      },
      {
        id: 'appointments-3',
        question: 'What happens after I book an appointment?',
        answer: 'After booking, you\'ll receive a confirmation email with appointment details, including date, time, location, and doctor information. For in-person visits, arrive 15 minutes early to complete any paperwork. For telemedicine, you\'ll receive a link to join the virtual waiting room 10 minutes before your appointment.'
      },
      {
        id: 'appointments-4',
        question: 'How do telemedicine appointments work?',
        answer: 'Our telemedicine service allows you to consult with doctors via secure video calls. After booking a telemedicine appointment, you\'ll receive a link to join the virtual consultation at the scheduled time. Ensure you have a stable internet connection, webcam, and microphone for the best experience.'
      }
    ],
    doctors: [
      {
        id: 'doctors-1',
        question: 'How are doctors verified on your platform?',
        answer: 'All healthcare providers on Doctors Portal undergo a comprehensive verification process. We confirm their medical licenses, credentials, education, and professional experience. We also continuously monitor reviews and feedback to maintain high quality standards.'
      },
      {
        id: 'doctors-2',
        question: 'Can I choose which doctor I want to see?',
        answer: 'Absolutely! Doctors Portal gives you full control over choosing your healthcare provider. You can browse doctor profiles, view their qualifications, specialties, years of experience, patient reviews, and available time slots to make an informed decision.'
      },
      {
        id: 'doctors-3',
        question: 'Can I see the same doctor for future appointments?',
        answer: 'Yes, you can establish a relationship with any doctor on our platform and book follow-up appointments with them. Your medical history and previous consultations will be available to your doctor, ensuring continuity of care.'
      },
      {
        id: 'doctors-4',
        question: 'How do I provide feedback about a doctor?',
        answer: 'After your appointment, you\'ll receive a request to rate your experience and provide feedback. This helps us maintain quality and helps other patients make informed decisions. You can also update your review at any time through your account dashboard.'
      }
    ],
    billing: [
      {
        id: 'billing-1',
        question: 'How much does it cost to use Doctors Portal?',
        answer: 'Creating an account and browsing doctors on Doctors Portal is completely free. Consultation fees vary depending on the healthcare provider, specialty, and type of appointment (in-person or telemedicine). All fees are clearly displayed before you book an appointment.'
      },
      {
        id: 'billing-2',
        question: 'What payment methods do you accept?',
        answer: 'We accept various payment methods including credit/debit cards, mobile wallets, and bank transfers. Payment is processed securely through our platform at the time of booking or according to the provider\'s payment policy.'
      },
      {
        id: 'billing-3',
        question: 'Do you accept insurance?',
        answer: 'Many healthcare providers on our platform accept various insurance plans. During the search process, you can filter doctors by insurance providers they accept. Always verify insurance coverage with your provider before booking.'
      },
      {
        id: 'billing-4',
        question: 'Will I receive a receipt for my payment?',
        answer: 'Yes, after every successful payment, you\'ll receive an electronic receipt via email. You can also access all your payment history, receipts, and invoices through your account dashboard.'
      }
    ],
    account: [
      {
        id: 'account-1',
        question: 'How do I create an account?',
        answer: 'Creating an account is simple. Click the "Register" button in the top right corner, fill in your personal details, verify your email address, and you\'re ready to use our services.'
      },
      {
        id: 'account-2',
        question: 'How can I update my personal information?',
        answer: 'You can update your personal information anytime by logging into your account, navigating to "Profile Settings," and making the necessary changes. Don\'t forget to save your updates.'
      },
      {
        id: 'account-3',
        question: 'Can I add family members to my account?',
        answer: 'Yes, you can add family members to your account through the "Family Profiles" section in your dashboard. This allows you to manage appointments and health records for your loved ones conveniently.'
      },
      {
        id: 'account-4',
        question: 'How do I reset my password?',
        answer: 'If you\'ve forgotten your password, click the "Forgot Password" link on the login page. Enter your registered email address, and we\'ll send you instructions on how to reset your password securely.'
      }
    ],
    privacy: [
      {
        id: 'privacy-1',
        question: 'How is my medical information protected?',
        answer: 'We take your privacy seriously. All medical information is encrypted and stored securely in compliance with healthcare privacy regulations. Only authorized healthcare providers directly involved in your care can access your medical records.'
      },
      {
        id: 'privacy-2',
        question: 'Who can see my health information?',
        answer: 'Only you and the healthcare providers you choose to share it with can access your health information. Our platform follows strict privacy protocols to ensure your medical data remains confidential.'
      },
      {
        id: 'privacy-3',
        question: 'Are telemedicine consultations secure?',
        answer: 'Yes, all telemedicine consultations are conducted through secure, encrypted video connections that comply with healthcare privacy standards. Your virtual visits remain private and confidential.'
      },
      {
        id: 'privacy-4',
        question: 'Can I delete my account and personal data?',
        answer: 'Yes, you can request to delete your account and personal data by contacting our support team. Please note that certain medical records may need to be retained for legal and regulatory requirements.'
      }
    ]
  };
  
  // Handler for category click
  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
  };
  
  return (
    <div className="faq-content">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="section-title text-center mb-5">
              <h1>Frequently Asked Questions</h1>
              <div className="divider mx-auto"></div>
              <p className="lead">
                Find answers to common questions about our services, appointments, and more.
              </p>
            </div>
          </div>
        </div>
        
        <div className="row">
          {/* FAQ Categories Navigation */}
          <div className="col-lg-3 mb-4">
            <div className="faq-categories">
              <h3>Categories</h3>
              <ul className="category-list">
                {faqCategories.map((category) => (
                  <li 
                    key={category.id}
                    className={activeCategory === category.id ? 'active' : ''}
                    onClick={() => handleCategoryClick(category.id)}
                  >
                    {category.label}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Help Sidebar */}
            <div className="mt-4">
              <InfoSidebar 
                title="Need More Help?"
                description="Can't find what you're looking for? We're here to help."
                theme="primary"
                showAction={true}
                actionText="Contact Support"
                actionLink="/contact"
                showContactInfo={true}
              
                additionalContent={
                  <div className="text-white mt-3">
                    <h5>Support Hours</h5>
                    <p>Monday - Friday: 8:00 AM - 8:00 PM<br />
                    Saturday: 9:00 AM - 5:00 PM<br />
                    Sunday: Closed</p>
                  </div>
                }
              />
            </div>
          </div>
          
          {/* FAQ Questions and Answers */}
          <div className="col-lg-9">
            <div className="faq-questions">
              <h2>{faqCategories.find(cat => cat.id === activeCategory).label}</h2>
              
              <div className="accordion" id="faqAccordion">
                {faqItems[activeCategory].map((item, index) => (
                  <div className="card" key={item.id}>
                    <div className="card-header" id={`heading${item.id}`}>
                      <h3 className="mb-0">
                        <button 
                          className="btn btn-link btn-block text-left" 
                          type="button" 
                          data-toggle="collapse" 
                          data-target={`#collapse${item.id}`} 
                          aria-expanded={index === 0 ? "true" : "false"}
                          aria-controls={`collapse${item.id}`}
                        >
                          {item.question}
                        </button>
                      </h3>
                    </div>
                    
                    <div 
                      id={`collapse${item.id}`} 
                      className={`collapse ${index === 0 ? 'show' : ''}`}
                      aria-labelledby={`heading${item.id}`} 
                      data-parent="#faqAccordion"
                    >
                      <div className="card-body">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="search-more mt-5">
              <h3 className="text-center">Still Have Questions?</h3>
              <div className="search-box">
                <div className="input-group">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Search our knowledge base..." 
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <i className="fas fa-search"></i> Search
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <p>Or get in touch with our support team</p>
                <a href="/contact" className="btn btn-outline-primary">
                  <i className="fas fa-envelope"></i> Contact Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqContent;
