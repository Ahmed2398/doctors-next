'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { LOGIN } from '../../../../constants/routes';
import './styles.css';

const VerifyEmail = () => {
  const [status, setStatus] = useState('verifying');
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  
  useEffect(() => {
    // In a real app, this would verify the token with your API
    // For this example, we'll simulate the verification process
    if (token) {
      setTimeout(() => {
        if (token === 'invalid') {
          setStatus('error');
        } else {
          setStatus('success');
        }
      }, 1500);
    } else {
      setStatus('error');
    }
  }, [token]);
  
  return (
    <div className="verify-email-container py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-sm">
              <div className="card-body p-4 p-md-5 text-center">
                <h2 className="verify-title mb-4">Email Verification</h2>
                
                {status === 'verifying' && (
                  <>
                    <div className="spinner-border text-primary mb-4" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                    <h4>Verifying your email...</h4>
                    <p className="text-muted">
                      Please wait while we verify your email address.
                    </p>
                  </>
                )}
                
                {status === 'success' && (
                  <>
                    <div className="verification-icon success-icon mb-4">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <h4>Email Verified Successfully!</h4>
                    <p className="text-muted mb-4">
                      Your email has been successfully verified. You can now access all features of R.vezeeta.
                    </p>
                    <Link href={LOGIN} className="btn btn-primary px-4 py-2">
                      Continue to Login
                    </Link>
                  </>
                )}
                
                {status === 'error' && (
                  <>
                    <div className="verification-icon error-icon mb-4">
                      <i className="fas fa-times-circle"></i>
                    </div>
                    <h4>Verification Failed</h4>
                    <p className="text-muted mb-4">
                      We couldn&apos;t verify your email with the provided token. The token may be invalid or expired.
                    </p>
                    <Link href="/resend-verification" className="btn btn-primary px-4 py-2">
                      Resend Verification Email
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
