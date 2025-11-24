"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AddProductPage() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) router.push("/login");
  }, [session]);

  if (!session) return <p>Redirecting to login...</p>;

  return (
    <div>
      <h1>Add Product (Only for logged in users)</h1>
    </div>
  );
}
