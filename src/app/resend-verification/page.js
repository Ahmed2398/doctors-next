'use client';

import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import ResendVerification from '../../features/auth/components/resend-verification';

export default function ResendVerificationPage() {
  return (
    <MainLayout>
      <ResendVerification />
    </MainLayout>
  );
}
