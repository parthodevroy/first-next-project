
'use client';

import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../../firebase.init';
import Link from 'next/link';

const RegisterPage = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      await signOut(auth);

      setSuccess(true);
      setError('');
      e.target.reset();
    } catch (err) {
      setError(err.message);
      setSuccess(false);
    }
  };

  return (
    <div className="hero bg-white min-h-screen flex items-center justify-center">
      <div className="card bg-black w-full max-w-md shadow-2xl rounded-2xl p-6">
        <h2 className="text-2xl font-extrabold text-[#1e3a8a] text-center mb-6">Register Now</h2>

        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="label font-semibold text-white">Email</label>
            <input type="email" name="email" className="input input-bordered bg-white h-10 rounded-xls w-full" required />
          </div>

          <div className="flex flex-col relative">
            <label className="label font-semibold text-white">Password</label>
            <input type={showPassword ? 'text' : 'password'} name="password" className="input input-bordered bg-white h-10 rounded-xls w-full" required />
            <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-10 cursor-pointer">
              {showPassword ? 'Hide' : 'Show'}
            </span>
          </div>

          <button type="submit" className="btn bg-amber-300 h-10 rounded-xls text-white mt-4">Register Now</button>
        </form>

        <p className="mt-4 text-white text-center">
          Already have an account? <Link href="/login" className="text-red-500 font-semibold">Login</Link>
        </p>

        {error && <p className="text-red-500 mt-2">{error}</p>}
        {success && <p className="text-green-600 mt-2">Registration Successful! Please Login.</p>}
      </div>
    </div>
  );
};

export default RegisterPage;
