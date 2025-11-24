'use client';

import React, { useState, useContext } from "react";
import { AuthContext } from "@/app/context/AuthProvider";
import { useRouter } from "next/navigation";

const AddProductPage = () => {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    price: ""
  });

  const [message, setMessage] = useState("");

  if (loading) return <p>Loading...</p>;
  if (!user) router.push("/login"); // protect page

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Product added successfully!");
        setFormData({ title: "", description: "", image: "", price: "" });
      } else {
        setMessage(data.message || "Failed to add product");
      }
    } catch (err) {
      console.error(err);
      setMessage("Server error");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Add Product</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="title"
            placeholder="Product Title"
            value={formData.title}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
          <textarea
            name="description"
            placeholder="Product Description"
            value={formData.description}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />

          <button type="submit" className="btn bg-blue-600 text-white hover:bg-blue-700">
            Add Product
          </button>
        </form>

        {message && <p className="mt-4 text-center">{message}</p>}
      </div>
    </div>
  );
};

export default AddProductPage;
