"use client";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 border border-gray-100 group">
      
     
      <div className="w-full h-44 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      
      <h3 className="font-semibold text-gray-900 mt-3 text-lg group-hover:text-red-500 transition">
        {product.title}
      </h3>

     
      <p className="text-sm text-gray-600 mt-1 line-clamp-2">
        {product.shortDescription}
      </p>

      
      <div className="flex justify-between items-center mt-4">
        <div className="text-xl font-bold text-red-600">৳ {product.price}</div>

        <Link
          href={`/products/${product._id}`}
          className="text-sm bg-red-500 text-white px-3 py-1.5 rounded-lg hover:bg-red-600 transition"
        >
          Details
        </Link>
      </div>
    </div>
  );
}
