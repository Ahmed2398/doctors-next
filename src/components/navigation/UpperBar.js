'use client';

import React from 'react';
import Link from 'next/link';
import './UpperBar.css';

const UpperBar = () => {
  return (
    <div className="upper-bar">
      <div className="container">
        <div className="row">
          <div className="info col-sm text-center text-sm-left">
            <i className="fas fa-phone-alt mr-1"></i>
            <span className="mr-3">1234597</span>
            <span className="border-separator mx-2"></span>
            <i className="fas fa-envelope mr-1"></i>
            <span>ahmed12@gmail</span>
          </div>
          <div className="info col-sm text-center text-sm-right">
            <i className="fas fa-globe mr-1"></i>
            <span className="mr-2">English</span>
            <span className="border-separator mx-2"></span>
            <i className="fas fa-user mr-1"></i>
            <span>My Account</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperBar;
