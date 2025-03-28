"use client";
import { usePathname, useRouter } from "next/navigation";

const Product = () => {
  const { push } = useRouter();
  const pathName = usePathname();

  return (
    <div>
      <div>Product</div>
      <div>Текущая страница ${pathName}</div>
      <button onClick={() => push("/")}>Redirect to Home page</button>
    </div>
  );
};

export default Product;
