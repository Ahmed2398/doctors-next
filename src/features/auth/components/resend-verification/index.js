'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { LOGIN } from '../../../../constants/routes';
import { validateForm, validationRules } from '../../../../utils/validation';
import './styles.css';

const ResendVerification = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Reset states
    setErrors({});
    
    // Use the shared validation utility
    const validationErrors = validateForm({ email }, {
      email: validationRules.email
    });
    
    setErrors(validationErrors);
    
    // If no errors, submit the form
    if (Object.keys(validationErrors).length === 0) {
      // Submit the form
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        console.log('Resend verification email to:', email);
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // In a real app, you would make an API call to resend the verification email
      }, 1500);
    }
  };
  
  return (
    <div className="resend-verification-container py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-5">
            <div className="card shadow-sm">
              <div className="card-body p-4 p-md-5">
                <div className="text-center mb-4">
                  <h2 className="resend-title">Resend Verification Email</h2>
                  {!isSubmitted && (
                    <p className="text-muted">
                      Enter your email address below and we&apos;ll send you a new verification link.
                    </p>
                  )}
                </div>
                
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        disabled={isSubmitting}
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </div>
                    
                    <button
                      type="submit"
                      className="btn btn-primary btn-block py-2 mt-4"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>
                          Sending...
                        </>
                      ) : (
                        'Resend Verification Email'
                      )}
                    </button>
                    
                    <div className="text-center mt-4">
                      <p className="text-muted mb-0">
                        Remember your password? <Link href={LOGIN} className="login-link">Sign In</Link>
                      </p>
                    </div>
                  </form>
                ) : (
                  <div className="text-center">
                    <div className="success-icon mb-3">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <h4>Verification Email Sent!</h4>
                    <p className="mb-4">
                      We&apos;ve sent a verification link to <strong>{email}</strong>.<br />
                      Please check your email and click on the link to verify your account.
                    </p>
                    <p className="text-muted mb-0">
                      Didn&apos;t receive the email? Check your spam folder or <button 
                        className="btn btn-link p-0 resend-button" 
                        onClick={() => setIsSubmitted(false)}
                      >
                        try again
                      </button>.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResendVerification;
