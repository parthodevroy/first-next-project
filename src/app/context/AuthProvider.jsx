// "use client";

// import { createContext, useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// export const AuthContext = createContext(null);

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null); 
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   // Load token from cookie
//   useEffect(() => {
//     const token = document.cookie
//       .split("; ")
//       .find((row) => row.startsWith("token="));

//     if (token) {
//       setUser({ logged: true }); // dummy minimal user
//     } else {
//       setUser(null);
//     }

//     setLoading(false);
//   }, []);

//   // Login ⇒ cookie set + context update
//   const login = (tokenValue) => {
//     document.cookie = `token=${tokenValue}; path=/`;
//     setUser({ logged: true });
//     router.push("/dashboard");
//   };

//   // Logout ⇒ cookie delete + redirect
//   const logout = () => {
//     document.cookie = "token=; max-age=0; path=/";
//     setUser(null);
//     router.push("/login");
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;
'use client';

import React, { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../firebase.init';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    await auth.signOut();
    setUser(null);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
