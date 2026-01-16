"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const Banner = () => {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1545591841-4a97f1da8d1f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "From personal packages",
    },
    {
      image:
        "https://images.unsplash.com/photo-1493135637657-c2411b3497ad?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Cash On Delivery",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1683984171269-04c84ee23234?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Live Parcel Tracking",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1683147796355-ee1ea0b13706?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Active Volunteers",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative h-[400px] max-w-6xl mx-auto rounded-xl overflow-hidden">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="h-full w-full bg-black/40 flex flex-col justify-center items-center px-4 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
              {slide.text}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white mt-4 drop-shadow-md">
              We Are With Us
            </p>
            <button className="mt-6 px-6 py-3 bg-btn hover:bg-green-700 text-white font-semibold rounded-lg transition">
             {/* <Link to={"/issues"}> Get Involved</Link> */}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
