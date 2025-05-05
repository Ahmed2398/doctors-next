'use client';

import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import VerifyEmail from '../../features/auth/components/verify-email';

export default function VerifyEmailPage() {
  return (
    <MainLayout>
      <VerifyEmail />
    </MainLayout>
  );
}
