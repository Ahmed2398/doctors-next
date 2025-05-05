'use client';

import React from 'react';
import Link from 'next/link';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer pt-5 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
            <h3 className="footer-heading">R.vezeeta<span>.com</span></h3>
            <hr className="hr-md" />
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates aliquid impedit illo ad cumque, id iste itaque 
            </p>
            <ul className="list-inline social-icons">
              <li className="list-inline-item list-icon">
                <a href="#"><i className="fab fa-facebook"></i></a>
              </li>
              <li className="list-inline-item list-icon">
                <a href="#"><i className="fab fa-twitter"></i></a>
              </li>
              <li className="list-inline-item list-icon">
                <a href="#"><i className="fab fa-instagram"></i></a>
              </li>
              <li className="list-inline-item list-icon">
                <a href="#"><i className="fab fa-google-plus-g"></i></a>
              </li>
            </ul>
          </div>
          
          <div className="col-sm-4 col-md-6 col-lg-3 mb-4">
            <h3 className="footer-heading">Quick links</h3>
            <hr className="hr-md" />
            <ul className="links list-unstyled">
              <li className="list-item">
                <Link href="/">Home</Link>
                <i className="fas fa-angle-double-right"></i>
              </li>
              <li className="list-item">
                <Link href="/about">About</Link>
                <i className="fas fa-angle-double-right"></i>
              </li>
              <li className="list-item">
                <Link href="/booking">Booking</Link>
                <i className="fas fa-angle-double-right"></i>
              </li>
              <li className="list-item">
                <Link href="/submit-review">Submit-Review</Link>
                <i className="fas fa-angle-double-right"></i>
              </li>
            </ul>
          </div>
          
          <div className="col-sm-4 col-md-6 col-lg-3 mb-4">
            <h3 className="footer-heading">Quick links</h3>
            <hr className="hr-md" />
            <ul className="links list-unstyled">
              <li className="list-item">
                <Link href="/my-account">My Account</Link>
                <i className="fas fa-angle-double-right"></i>
              </li>
              <li className="list-item">
                <Link href="/register-doctor">Doctor Register</Link>
                <i className="fas fa-angle-double-right"></i>
              </li>
              <li className="list-item">
                <Link href="/register">Register</Link>
                <i className="fas fa-angle-double-right"></i>
              </li>
              <li className="list-item">
                <Link href="/faq">FAQ</Link>
                <i className="fas fa-angle-double-right"></i>
              </li>
            </ul>
          </div>
          
          <div className="col-sm-4 col-md-6 col-lg-3 mb-4">
            <h3 className="footer-heading">Contact us</h3>
            <hr className="hr-md" />
            <ul className="links list-unstyled">
              <li className="list-item contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Cairo, Egypt</span>
              </li>
              <li className="list-item contact-item">
                <i className="fas fa-phone"></i>
                <span>+966 123 456 789</span>
              </li>
              <li className="list-item contact-item">
                <i className="fas fa-envelope"></i>
                <span>nameemail@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="hr-footer" />
        
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 text-center">
            <h5 className="copyright">All rights reserved <span>&copy; R.vezeeta {new Date().getFullYear()}</span></h5>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
