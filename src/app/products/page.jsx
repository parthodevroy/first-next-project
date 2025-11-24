
import ProductCard from "@/component/ProductCard";

async function getProducts() {
  const res = await fetch(`http://localhost:5000/nav`, { cache: "no-store" });
  if (!res.ok) return [];
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <h1 className="text-2xl text-center font-bold mb-2">All Products</h1>
      <div className="grid grid-cols-1 w-6xl mx-auto md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </>
  );
}
