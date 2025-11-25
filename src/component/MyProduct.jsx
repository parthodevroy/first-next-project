import { Link } from 'lucide-react';
import React from 'react';
import ProtectedRoute from './ProtectedRoute';

const MyProduct = ({product}) => {
    return (
    <ProtectedRoute>
         
    <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition">
      <img src={product.image} alt={product.title} className="h-40 w-full p-4 object-contain mb-3" />
      <h3 className="font-semibold">{product.title}</h3>
      <p className="text-sm text-gray-600 line-clamp-2">{product.shortDescription}</p>
      <div className="flex justify-between items-center mt-3">
        <div className="font-bold">৳ {product.price}</div>
        <Link href={`/products/${product._id}`} className="text-sm text-blue-600">Details</Link>
      </div>
    </div>
    </ProtectedRoute>
    );
};

export default MyProduct;