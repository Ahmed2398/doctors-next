'use client';

import React from 'react';

const testimonials = [
  {
    content:
      "The online consultation feature saved me so much time. I got professional medical advice without having to leave home.",
    author: "Sarah Johnson",
    role: "Patient"
  },
  {
    content:
      "As a doctor, this platform helps me manage my appointments efficiently and stay connected with my patients.",
    author: "Dr. Robert Chen",
    role: "Cardiologist"
  },
  {
    content:
      "I love how easy it is to access my medical records and prescription history whenever I need them.",
    author: "Michael Thompson",
    role: "Patient"
  },
];

const Testimonials = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 mb-3">What People Are Saying</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
            Hear from our patients and doctors about their experiences with our platform.
          </p>
        </div>
        
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body d-flex flex-column">
                  <div className="mb-4">
                    <span className="text-primary display-4">&ldquo;</span>
                    <p className="text-muted mb-0">{testimonial.content}</p>
                    <span className="text-primary display-4 float-right">&rdquo;</span>
                  </div>
                  <div className="mt-auto d-flex align-items-center">
                    <div className="bg-light rounded-circle d-flex justify-content-center align-items-center" style={{ width: '50px', height: '50px' }}>
                      <span className="font-weight-bold text-secondary">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div className="ml-3">
                      <h6 className="mb-0 font-weight-bold">{testimonial.author}</h6>
                      <small className="text-muted">{testimonial.role}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
