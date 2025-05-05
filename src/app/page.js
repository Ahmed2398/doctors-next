import React from "react";

import MainLayout from "../layouts/MainLayout";
import { HomeContent } from "../features/home";
import DoctorsExample from "../components/cards/doctors-example";
import { Hero } from "../components/ui";

export default function Home() {
  return (
    <MainLayout>
      <Hero 
        title="Expert Healthcare"
        titleHighlight="At Your Fingertips"
        description="Connect with professional doctors for consultations, appointments, and medical advice. Our platform makes healthcare accessible and convenient."
        primaryButtonText="Book Appointment"
        primaryButtonLink="/appointments"
        secondaryButtonText="Find a Doctor"
        secondaryButtonLink="/doctors"
        rightContent={
          <div className="bg-primary text-white rounded p-5 d-flex justify-content-center align-items-center" style={{ minHeight: '350px' }}>
            <h2 className="display-4 font-weight-bold">Doctor Portal</h2>
          </div>
        }
      />
      <HomeContent />
      <DoctorsExample />
    </MainLayout>
  );
}
