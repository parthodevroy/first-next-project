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
// 'use client';

// import { useSession } from 'next-auth/react';
// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';

// const ProtectedRoute = ({ children }) => {
//   const { data: session, status } = useSession();
//   const router = useRouter();

//   useEffect(() => {
//     if (status === 'unauthenticated') {
//       router.push('/login');
//     }
//   }, [status, router]);

//   if (status === 'loading') return <p className="text-center p-10">Loading...</p>;

//   return session ? children : null;
// };

// export default ProtectedRoute;