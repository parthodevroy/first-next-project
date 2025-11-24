'use client';

import React, { useContext, useEffect } from 'react';
import { AuthContext } from '@/app/context/AuthProvider';
import { useRouter } from 'next/navigation';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading]);

  if (loading) return <p>Loading...</p>;

  return user ? children : null;
};

export default ProtectedRoute;
