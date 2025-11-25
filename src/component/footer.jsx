"use client";

import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-black max-w-6xl mx-auto rounded-2xl text-white border-t mt-12">
      <div className="max-w-6xl h-[200px] mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
       
        <div className="text-sm text-white text-center md:text-left">
           {new Date().getFullYear()} ProductHub. All rights reserved.
        </div>

        <div className="flex gap-6 text-sm text-white flex-wrap justify-center">
          <a href="#" className="hover:text-blue-600 transition">Privacy</a>
          <a href="#" className="hover:text-blue-600 transition">Terms</a>
          <a href="#" className="hover:text-blue-600 transition">Contact</a>
        </div>

        <div className="flex gap-4">
          <a href="#" className="text-white hover:text-blue-600 transition">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="text-white hover:text-blue-600 transition">
            <CiLinkedin size={22} />
          </a>
          <a href="#" className="text-white hover:text-blue-600 transition">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="text-white hover:text-blue-600 transition">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
