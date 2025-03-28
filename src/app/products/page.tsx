import { notFound } from "next/navigation";
import Product from "./Product";
import Link from "next/link";

const fetchData = async (): Promise<
  | {
      completed: boolean;
      id: number;
      title: string;
      userId: number;
    }[]
  | null
> => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!response.ok) throw new Error("Network response was not ok");
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

const Products = async () => {
  const products = await fetchData();

  if (!products) notFound();

  return (
    <div>
      <Product />
      {products.map((product) => (
        <div key={product.id}>
          <Link href={`/products/${product.id}`}>{product.id}</Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
