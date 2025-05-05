'use client';

import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import LoginForm from '../../features/auth/components/login';

export default function LoginPage() {
  return (
    <MainLayout>
      <LoginForm />
    </MainLayout>
  );
}
