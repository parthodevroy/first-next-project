"use client";

import ProtectedRoute from "@/component/ProtectedRoute";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState(null); // store product being edited

  // Fetch products
  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:5000/products");
      if (!res.ok) throw new Error("Failed to fetch products");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Delete product
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    try {
      const res = await fetch(`http://localhost:5000/products/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete product");
      fetchProducts();
    } catch (err) {
      console.error(err);
    }
  };

  // Edit product
  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  // Update product
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { _id, title, description, image, price } = editingProduct;
      const res = await fetch(`http://localhost:5000/products/${_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, image, price }),
      });
      if (!res.ok) throw new Error("Failed to update product");
      setEditingProduct(null);
      fetchProducts();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p className="text-center mt-4">Loading products...</p>;
  if (!products.length) return <p className="text-center mt-4">No products found.</p>;

  return (
    <ProtectedRoute>
      <div className="w-6xl mx-auto mt-8">
        <h1 className="text-3xl font-bold text-center mb-6">All Products</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b">Title</th>
                <th className="py-2 px-4 border-b">Description</th>
                <th className="py-2 px-4 border-b">Image</th>
                <th className="py-2 px-4 border-b">Price</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p._id} className="text-center hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{p.title}</td>
                  <td className="py-2 px-4 border-b">{p.description}</td>
                  <td className="py-2 px-4 border-b">
                    <img src={p.image} alt={p.title} className="w-20 h-20 object-cover mx-auto" />
                  </td>
                  <td className="py-2 px-4 border-b">${p.price.toFixed(2)}</td>
                  <td className="py-2 px-4 border-b flex justify-center gap-2">
                    <button
                      onClick={() => handleEdit(p)}
                      className="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(p._id)}
                      className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Edit Form Modal */}
       {editingProduct && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <form
      onSubmit={handleUpdate}
      className="bg-white p-6 rounded-lg w-96 flex flex-col gap-4"
    >
      <h2 className="text-xl font-bold text-center">Edit Product</h2>

      <input
        type="text"
        placeholder="Title"
        value={editingProduct.title || ""}
        onChange={(e) => setEditingProduct({ ...editingProduct, title: e.target.value })}
        className="input input-bordered w-full"
      />

      <input
        type="text"
        placeholder="Short Description"
        value={editingProduct.shortDescription || ""}
        onChange={(e) =>
          setEditingProduct({ ...editingProduct, shortDescription: e.target.value })
        }
        className="input input-bordered w-full"
      />

      <input
        type="text"
        placeholder="Full Description"
        value={editingProduct.fullDescription || ""}
        onChange={(e) =>
          setEditingProduct({ ...editingProduct, fullDescription: e.target.value })
        }
        className="input input-bordered w-full"
      />

      <input
        type="text"
        placeholder="Image URL"
        value={editingProduct.image || ""}
        onChange={(e) => setEditingProduct({ ...editingProduct, image: e.target.value })}
        className="input input-bordered w-full"
      />

      <input
        type="number"
        placeholder="Price"
        value={editingProduct.price || 0}
        onChange={(e) =>
          setEditingProduct({ ...editingProduct, price: parseFloat(e.target.value) })
        }
        className="input input-bordered w-full"
      />

      <input
        type="text"
        placeholder="Date"
        value={editingProduct.date || ""}
        onChange={(e) => setEditingProduct({ ...editingProduct, date: e.target.value })}
        className="input input-bordered w-full"
      />

      <input
        type="text"
        placeholder="Priority"
        value={editingProduct.priority || ""}
        onChange={(e) =>
          setEditingProduct({ ...editingProduct, priority: e.target.value })
        }
        className="input input-bordered w-full"
      />

      <div className="flex justify-between mt-2">
        <button type="submit" className="btn bg-green-500 text-white hover:bg-green-600">
          Update
        </button>
        <button
          type="button"
          onClick={() => setEditingProduct(null)}
          className="btn bg-gray-300 hover:bg-gray-400"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
)}

    
      </div>
    </ProtectedRoute>
  );
}
