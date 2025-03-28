"use client";
import { useRouter } from "next/navigation";

const Products = () => {
  const { push } = useRouter();
  return (
    <div>
      <div>Products</div>
      <button onClick={() => push("/")}>Redirect to Home page</button>
    </div>
  );
};

export default Products;
