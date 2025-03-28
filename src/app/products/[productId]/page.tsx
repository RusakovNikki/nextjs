const fetchData = async (
  productId: string
): Promise<{
  completed: boolean;
  id: number;
  title: string;
  userId: number;
} | null> => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${productId}`
    );
    if (!response.ok) throw new Error("Network response was not ok");
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

interface IProductDetailsProps {
  params: Promise<{ productId: string }>;
}

const ProductDetails = async (props: IProductDetailsProps) => {
  const { params } = props;
  const productId = (await params).productId;

  const result = await fetchData(productId);

  return (
    <div>
      <div>completed: {result?.completed.toString()}</div>
      <div>id: {result?.id}</div>
      <div>title: {result?.title}</div>
      <div>userId: {result?.userId}</div>
    </div>
  );
};

export default ProductDetails;
