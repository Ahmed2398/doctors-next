'use client';

import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import RegisterForm from '../../features/auth/components/register';

export default function RegisterPage() {
  return (
    <MainLayout>
      <RegisterForm />
    </MainLayout>
  );
}
