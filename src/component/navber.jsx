"use client";

import React, { useState, useContext } from "react";
import Link from "next/link";
import { AuthContext } from "@/app/context/AuthProvider";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const { user, logout, loading } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  if (loading) return <div className="p-4">Loading...</div>;

  const activeClass = "text-red-500 underline font-bold";
  const normalClass = "px-4";

  return (
    <div className="bg-white shadow-md">
      <div className="flex font-semibold w-full max-w-6xl mx-auto py-4 px-4 justify-between items-center">

      
        <div className="text-black font-bold text-2xl">
          Developer <span className="text-red-500">Website</span>
        </div>

      
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-3xl"
        >
          {mobileOpen ? <HiX /> : <HiMenu />}
        </button>

    
        <div className="hidden md:flex items-center gap-4">
          <Link href="/" className={`${pathname === "/" ? activeClass : normalClass}`}>
            Home
          </Link>

          <Link
            href="/products"
            className={`${pathname === "/products" ? activeClass : normalClass}`}
          >
            Products
          </Link>

          {!user && (
            <>
              <Link
                href="/register"
                className={`${pathname === "/register" ? activeClass : normalClass}`}
              >
                Register
              </Link>

              <Link
                href="/login"
                className={`${pathname === "/login" ? activeClass : normalClass}`}
              >
                Login
              </Link>
            </>
          )}

          {user && (
            <Link
              href="/add-product"
              className={`${pathname === "/add-product" ? activeClass : normalClass}`}
            >
              Add Product
            </Link>
          )}

          {user && (
            <div className="relative inline-block">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="rounded-md bg-gray-200 px-3 py-1"
              >
                Profile
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md z-50">
                  <Link
                    href="/product"
                    className={`block px-4 py-2 hover:bg-gray-100 ${
                      pathname === "/dashboard" ? activeClass : ""
                    }`}
                  >
                    Dashboard
                  </Link>

                  <Link
                    href="/chartlist"
                    className={`block px-4 py-2 hover:bg-gray-100 ${
                      pathname === "/chartlist" ? activeClass : ""
                    }`}
                  >
                    My Product
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

     
      {mobileOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2">

          <Link
            href="/"
            className={`block ${pathname === "/" ? activeClass : ""}`}
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/products"
            className={`block ${pathname === "/products" ? activeClass : ""}`}
            onClick={() => setMobileOpen(false)}
          >
            Products
          </Link>

          {!user && (
            <>
              <Link
                href="/register"
                className={`block ${pathname === "/register" ? activeClass : ""}`}
                onClick={() => setMobileOpen(false)}
              >
                Register
              </Link>

              <Link
                href="/login"
                className={`block ${pathname === "/login" ? activeClass : ""}`}
                onClick={() => setMobileOpen(false)}
              >
                Login
              </Link>
            </>
          )}

          {user && (
            <>
              <Link
                href="/add-product"
                className={`block ${pathname === "/add-product" ? activeClass : ""}`}
                onClick={() => setMobileOpen(false)}
              >
                Add Product
              </Link>

              <Link
                href="/chartlist"
                className={`block ${pathname === "/chartlist" ? activeClass : ""}`}
                onClick={() => setMobileOpen(false)}
              >
                My Product
              </Link>

              <button
                onClick={() => {
                  logout();
                  setMobileOpen(false);
                }}
                className="block w-full text-left py-2"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
