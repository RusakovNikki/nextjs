import { IVacancy } from "@/interfaces/vacancy";
import { useLayoutEffect, useState } from "react";

const useProducts = (URL: string): [IVacancy[], boolean] => {
  const [isLoading, setLoading] = useState(true);
  const [items, setItems] = useState<IVacancy[]>([]);

  useLayoutEffect(() => {
    async function fetchData() {
      setLoading(true);

      await fetch(URL)
        .then((res) => res.json())
        .then((json) => {
          setItems(() => (json.items ? json.items : json));
        })
        .then(() => setLoading(false));
    }
    fetchData();
  }, [URL]);

  return [items, isLoading];
};

export default useProducts;
