"use client";

import React from 'react';



const Hero = () => {
  return (
    <section className="bg-gradient-to-r max-w-6xl mx-auto from-amber-300 to-yellow-100 rounded-lg p-8 mb-8">
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Sell & manage products easily with ProductHub</h1>
        <p className="text-gray-700 mb-4">A simple demo built with Next.js (App Router) + NextAuth. Add products, manage them and explore.</p>
        <div className="flex gap-3">
          <a href="/products" className="px-5 py-3 bg-blue-600 text-white rounded-md">Browse Products</a>
          <a href="/add-product" className="px-5 py-3 bg-white border rounded-md">Add Product</a>
        </div>
      </div>
     
    </section>
  );
};

export default Hero;
