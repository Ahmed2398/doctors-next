'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { REGISTER, FORGOT_PASSWORD } from '../../../../constants/routes';
import { validateForm, validationRules } from '../../../../utils/validation';
import './styles.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Use the shared validation utility
    const validationErrors = validateForm(formData, {
      email: validationRules.email,
      password: validationRules.password
    });
    
    setErrors(validationErrors);
    
    // If no errors, submit the form
    if (Object.keys(validationErrors).length === 0) {
      // Submit the form
      console.log('Login form submitted:', formData);
      
      // Here you would typically make an API call to authenticate the user
      // For now, we'll just show an alert
      alert('Login successful!');
    }
  };
  
  return (
    <div className="login-form-container py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-5">
            <div className="card shadow-sm">
              <div className="card-body p-4 p-md-5">
                <div className="text-center mb-4">
                  <h2 className="form-title">Welcome Back</h2>
                  <p className="text-muted">Sign in to your R.vezeeta account</p>
                </div>
                
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email address"
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter password"
                    />
                    {errors.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
                  </div>
                  
                  <div className="form-group d-flex justify-content-between align-items-center">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="rememberMe"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                      />
                      <label className="custom-control-label remember-label" htmlFor="rememberMe">
                        Remember me
                      </label>
                    </div>
                    <Link href={FORGOT_PASSWORD} className="forgot-link">
                      Forgot password?
                    </Link>
                  </div>
                  
                  <button type="submit" className="btn btn-primary btn-block py-2 mt-4">
                    Sign In
                  </button>
                  
                  <div className="text-center mt-4">
                    <p className="text-muted mb-0">
                      Don't have an account? <Link href={REGISTER} className="register-link">Create Account</Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
