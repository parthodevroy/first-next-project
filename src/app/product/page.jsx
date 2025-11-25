"use client";

import ProtectedRoute from "@/component/ProtectedRoute";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState(null);

  const fetchProducts = async () => {
    try {
      const res = await fetch(
        "https://my-first-next-server-seven.vercel.app/products"
      );
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
const handleDelete = async (id) => {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  });

  if (!result.isConfirmed) return;

  try {
    const res = await fetch(
      `https://my-first-next-server-seven.vercel.app/products/${id}`,
      { method: "DELETE" }
    );

    if (!res.ok) throw new Error("Failed to delete product");

    Swal.fire({
      title: "Deleted!",
      text: "Product has been deleted.",
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
    });

    fetchProducts();
  } catch (err) {
    console.error(err);
    Swal.fire("Error!", "Something went wrong.", "error");
  }
};

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { _id, title, shortDescription, fullDescription, image, price, date, priority } =
        editingProduct;

      const res = await fetch(
        `https://my-first-next-server-seven.vercel.app/products/${_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title,
            shortDescription,
            fullDescription,
            image,
            price,
            date,
            priority,
          }),
        }
      );

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
      <div className="max-w-6xl mx-auto mt-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-6">All Products</h1>

       
        <div className="hidden md:block overflow-x-auto">
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
                <tr
                  key={p._id}
                  className="text-center hover:bg-gray-50 transition"
                >
                  <td className="py-2 px-4 border-b">{p.title}</td>
                  <td className="py-2 px-4 border-b">{p.shortDescription}</td>
                  <td className="py-2 px-4 border-b">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-20 h-20 object-cover mx-auto"
                    />
                  </td>
                  <td className="py-2 px-4 border-b">${p.price}</td>
                  <td className="py-2 px-4 border-b h-25 flex justify-center gap-2">
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

        
        <div className="grid grid-cols-1 md:hidden gap-4">
          {products.map((p) => (
            <div
              key={p._id}
              className="border rounded-lg p-4 shadow-sm bg-white"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-40 object-cover rounded"
              />

              <h2 className="text-xl font-semibold mt-2">{p.title}</h2>
              <p className="mt-1 text-gray-600">{p.shortDescription}</p>

              <p className="font-bold mt-2 text-lg">
                Price: <span className="text-green-600">${p.price}</span>
              </p>

              <div className="flex gap-3 mt-3">
                <button
                  onClick={() => handleEdit(p)}
                  className="flex-1 bg-yellow-400 py-2 rounded hover:bg-yellow-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(p._id)}
                  className="flex-1 bg-red-500 py-2 rounded text-white hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        
        {editingProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-3">
            <form
              onSubmit={handleUpdate}
              className="bg-white p-6 w-full max-w-md rounded-lg shadow-lg flex flex-col gap-4"
            >
              <h2 className="text-xl font-bold text-center">Edit Product</h2>

              <input
                type="text"
                placeholder="Title"
                value={editingProduct.title || ""}
                onChange={(e) =>
                  setEditingProduct({
                    ...editingProduct,
                    title: e.target.value,
                  })
                }
                className="input input-bordered w-full"
              />

              <input
                type="text"
                placeholder="Short Description"
                value={editingProduct.shortDescription || ""}
                onChange={(e) =>
                  setEditingProduct({
                    ...editingProduct,
                    shortDescription: e.target.value,
                  })
                }
                className="input input-bordered w-full"
              />

              <input
                type="text"
                placeholder="Full Description"
                value={editingProduct.fullDescription || ""}
                onChange={(e) =>
                  setEditingProduct({
                    ...editingProduct,
                    fullDescription: e.target.value,
                  })
                }
                className="input input-bordered w-full"
              />

              <input
                type="text"
                placeholder="Image URL"
                value={editingProduct.image || ""}
                onChange={(e) =>
                  setEditingProduct({
                    ...editingProduct,
                    image: e.target.value,
                  })
                }
                className="input input-bordered w-full"
              />

              <input
                type="number"
                placeholder="Price"
                value={editingProduct.price || ""}
                onChange={(e) =>
                  setEditingProduct({
                    ...editingProduct,
                    price: Number(e.target.value),
                  })
                }
                className="input input-bordered w-full"
              />

              <div className="flex justify-between mt-2">
                <button
                  type="submit"
                  className="btn bg-green-500 text-white hover:bg-green-600 w-1/2"
                >
                  Update
                </button>
                <button
                  type="button"
                  onClick={() => setEditingProduct(null)}
                  className="btn bg-gray-300 hover:bg-gray-400 w-1/2"
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
