
import ProductCard from "@/component/ProductCard";

async function getProducts() {
  const res = await fetch(`https://my-first-next-server-seven.vercel.app/nav`, { cache: "no-store" });
  if (!res.ok) return [];
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <h1 className="text-2xl text-center font-bold mb-2">All Products</h1>
      <div className=" w-auto lg:w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </>
  );
}
