'use client';

import React, { useState, useContext } from "react";
import Link from "next/link";
import { AuthContext } from "@/app/context/AuthProvider";

const Navbar = () => {
  const { user, logout, loading } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  if (loading) return <div className="p-4">Loading...</div>;

  return (
    <div className="flex font-semibold w-full max-w-6xl mx-auto py-4 px-4 bg-white justify-between items-center">
      <div className="text-black font-bold text-2xl">
        Developer <span className="text-red-500">Website</span>
      </div>

      <div>
        <Link href="/" className="px-4">Home</Link>
        <Link href="/products" className="px-4">Products</Link>

        {!user && (
          <>
            <Link href="/register" className="px-4">Register</Link>
            <Link href="/login" className="px-4">Login</Link>
          </>
        )}

        {user && (
  <div className="relative inline-block px-4">
    <button
      type="button"
      onClick={() => setDropdownOpen(!dropdownOpen)}
      className="rounded-md bg-gray-200 px-3 py-1"
    >
      Profile
    </button>

    {dropdownOpen && (
      <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md z-50">
        <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100">
          Dashboard
        </Link>
        <Link href="/chartlist" className="block px-4 py-2 hover:bg-gray-100">
          My Product
        </Link>
        <Link href="/add-product" className="block px-4 py-2 hover:bg-gray-100">
          Add Product
        </Link>
         <Link href="/my-add-product" className="block px-4 py-2 hover:bg-gray-100">
          my addeted product
        </Link>
        <button
          onClick={logout}
          className="w-full text-left px-4 py-2 hover:bg-gray-100"
        >
          Logout
        </button>
      </div>
    )}
  </div>
)}

    
      </div>
    </div>
  );
};

export default Navbar;

// "use client";
// import Link from "next/link";
// import { useSession, signOut } from "next-auth/react";
// import { useState } from "react";

// export default function Navber() {
//   const { data: session } = useSession();
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="flex py-4 px-4 bg-amber-200 justify-between items-center">
//       <div>Portfolio Website</div>
//       <div className="flex gap-4 items-center">
//         <Link href="/">Home</Link>
//         <Link href="/products">Products</Link>
//         {!session && <Link href="/register">Register</Link>}
//         {!session && <Link href="/login">Login</Link>}

//         {session && (
//           <div className="relative">
//             <button onClick={() => setOpen(!open)}>{session.user.name || session.user.email}</button>
//             {open && (
//               <div className="absolute bg-white border rounded mt-2 right-0 p-2">
//                 <Link href="/add-product" className="block mb-1">Add Product</Link>
//                 <Link href="/dashboard" className="block mb-1">My Products</Link>
//                 <button onClick={() => signOut()}>Logout</button>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
