'use client';

import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import ForgotPassword from '../../features/auth/components/forgot-password';

export default function ForgotPasswordPage() {
  return (
    <MainLayout>
      <ForgotPassword />
    </MainLayout>
  );
}
