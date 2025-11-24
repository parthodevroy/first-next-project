// "use client";
// import React, { useEffect, useState } from "react";

// const Page = () => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/cart")
//       .then((res) => res.json())
//       .then((data) => setCartItems(data));
//   }, []);

//   if (cartItems.length === 0) return <p>No products added yet.</p>;

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">My Products</h1>
//       {cartItems.map((item) => (
//         <div key={item._id} className="flex items-center mb-4 border p-4 rounded">
//           <img src={item.image} alt={item.title} className="w-20 h-20 object-cover mr-4" />
//           <div>
//             <h2 className="font-semibold">{item.title}</h2>
//             <p>${item.price}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Page;
// app/my-products/page.jsx
// "use client";
// import { useEffect, useState } from "react";

// const Page = () => {
//   const [cartItems, setCartItems] = useState([]);
  
//   useEffect(() => {
//     fetch("http://localhost:5000/cart")
//       .then((res) => res.json())
//       .then((data) => setCartItems(data));
//   }, []);

//   if (cartItems.length === 0) return <p>No products added yet.</p>;

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">My Products</h1>
//       {cartItems.map((item) => (
//         <div key={item._id} className="flex items-center mb-4 border p-4 rounded">
//           <img src={item.image} alt={item.title} className="w-20 h-20 object-cover mr-4" />
//           <div>
//             <h2 className="font-semibold">{item.title}</h2>
//             <p>${item.price}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Page;

// import MyProduct from "@/component/MyProduct";


// async function getProducts() {
//   const res = await fetch(`http://localhost:5000/cart`, { cache: "no-store" });
//   if (!res.ok) return [];
//   return res.json();
// }

// export default async function ProductsPage() {
//   const products = await getProducts();

//   return (
//     <>
//       <h1 className="text-2xl font-bold mb-2">All Products</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {products.map((p) => (
//           <MyProduct key={p._id} product={p} />
//         ))}
//       </div>
//     </>
//   );
// }
import React from 'react';

const Page = () => {
    return (
        <div>
          <h1>chart</h1>
        </div>
    );
};

export default Page;