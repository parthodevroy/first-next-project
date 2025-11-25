
'use client';

import React, { useState, useContext } from 'react';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../../firebase.init';
import { useRouter } from 'next/navigation';
import { BiSolidHide, BiSolidShow } from 'react-icons/bi';
import { AuthContext } from '@/app/context/AuthProvider';
import Link from 'next/link';

const LoginPage = () => {
  const router = useRouter();
  const provider = new GoogleAuthProvider();
  const { user } = useContext(AuthContext);

  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  if (user) router.push('/dashboard');

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      router.push('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="hero bg-white min-h-screen flex items-center justify-center">
      <div className="card bg-black w-full max-w-md shadow-2xl rounded-2xl p-6">
        <h2 className="text-2xl font-extrabold text-white text-center mb-6">Login Now</h2>

        <form onSubmit={handleEmailLogin} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="label font-semibold text-white">Email</label>
            <input type="email" name="email" className="input input-bordered bg-white h-10 rounded-xls w-full" placeholder="Email" required />
          </div>

          <div className="flex flex-col relative">
            <label className="label font-semibold text-white">Password</label>
            <input type={showPassword ? 'text' : 'password'} name="password" className="input input-bordered  bg-white h-10 rounded-xls w-full" placeholder="Password" required />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-[35px] text-gray-600">
              {showPassword ? <BiSolidShow /> : <BiSolidHide />}
            </button>
          </div>

          <button type="submit" className="btn bg-amber-200 h-10 rounded-xls text-black mt-4 hover:bg-blue-700">Login</button>
        </form>

        <p className="mt-4 text-center text-white">
          Don't have an account? <Link href="/register" className="text-blue-600 font-semibold">Register</Link>
        </p>

        <div className="mt-4 text-center">
          <p className="text-gray-500 mb-2">OR</p>
          <button type="button" onClick={handleGoogleLogin} className="btn h-10 rounded-2xl bg-white text-black border border-gray-300 flex items-center justify-center gap-2 w-full">
            Login with Google
          </button>
        </div>

        {error && <p className="text-red-500 mt-3">{error}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
