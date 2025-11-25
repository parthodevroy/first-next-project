
"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const params = useParams(); 
  const { id } = params;     
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!id) return; 
    fetch(`https://my-first-next-server-seven.vercel.app/nav/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const addToCart = async (product) => {
    await fetch("https://my-first-next-server-seven.vercel.app/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
   Swal.fire({
  title: `${product.title}`,
  text: "Bye This Product.",
  imageUrl: "https://unsplash.it/400/200",
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: "Custom image"
});
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
          Buy Product
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;

