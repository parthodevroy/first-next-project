"use client";

import MyProduct from "@/component/MyProduct";
import ProtectedRoute from "@/component/ProtectedRoute";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await fetch("http://localhost:5000/cart");
      const data = await res.json();
      setProducts(data);
    }
    load();
  }, []);

  return (
    <ProtectedRoute>
      <div>
        <h1 className="text-2xl text-center font-bold mb-2">All Products</h1>

        <div className="grid w-6xl mx-auto grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <MyProduct key={p._id} product={p} />
          ))}
        </div>
      </div>
    </ProtectedRoute>
  );
}

