import { notFound } from "next/navigation";
import Product from "./Product";

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    if (!response.ok) throw new Error("Network response was not ok");
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

const Page = async () => {
  const data = await fetchData();
  console.log(data);

  if (!data) notFound();

  return <Product />;
};

export default Page;
