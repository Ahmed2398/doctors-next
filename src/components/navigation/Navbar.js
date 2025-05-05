'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Navbar.css';
import { LOGIN } from '../../constants/routes';


const Navbar = () => {
  const pathname = usePathname();
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link href="/" className="navbar-brand">
          <span>R.vezeeta</span><span>.com</span>
        </Link>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className={`nav-item ${pathname === '/' ? 'active' : ''}`}>
              <Link href="/" className="nav-link">Home</Link>
            </li>
            <li className={`nav-item ${pathname === '/about' ? 'active' : ''}`}>
              <Link href="/about" className="nav-link">About</Link>
            </li>
            <li className={`nav-item ${pathname === '/doctors' ? 'active' : ''}`}>
              <Link href="/doctors" className="nav-link">Doctors</Link>
            </li>
            <li className={`nav-item ${pathname === '/contact' ? 'active' : ''}`}>
              <Link href="/contact" className="nav-link">Contact us</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Register
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link href="/register" className="dropdown-item">Patient Register</Link>
                <Link href="/register-doctor" className="dropdown-item">Doctor Register</Link>
              </div>
            </li>
            <li className={`nav-item ${pathname === '/booking' ? 'active' : ''}`}>
              <Link href="/booking" className="nav-link">Booking</Link>
            </li>
            <li className={`nav-item ${pathname === '/faq' ? 'active' : ''}`}>
              <Link href="/faq" className="nav-link">F&A&Q</Link>
            </li>
            <li className={`nav-item ${pathname === '/login' ? 'active' : ''}`}>
              <Link href={LOGIN} className="nav-link">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;