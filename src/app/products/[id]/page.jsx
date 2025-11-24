
"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const params = useParams(); 
  const { id } = params;     
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!id) return; 
    fetch(`http://localhost:5000/nav/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const addToCart = async (product) => {
    await fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    alert("Product added to My Products");
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
   
      <img
        src={product.image} alt=""
        className="w-full max-w-md mx-auto rounded-lg shadow-md"
      />

   
      <h1 className="text-3xl font-bold text-center mt-6">{product.title}</h1>

    
      <p className="text-xl text-green-600 font-semibold text-center mt-2">
        Price: ${product.price}
      </p>

    
      <p className="mt-4 text-gray-700 text-lg leading-relaxed text-center">
        {product.fullDescription || product.shortDescription}
      </p>

     
      <div className="flex justify-center mt-6">
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg shadow hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;

