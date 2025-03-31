import useProducts from "./useProducts";
import JobBlock from "@/components/JobBlock";
import { JSX } from "react";
import { IVacancy } from "@/interfaces/vacancy";

interface UseJobFilter {
  URL: string;
  sortByType: {
    sortBy: string;
    searchByPosition: string;
  };
}

const useJobFilter = (
  props: UseJobFilter
): [IVacancy[], boolean, JSX.Element[]] => {
  const { URL, sortByType } = props;

  const [items, isLoading] = useProducts(URL);

  const jobItems = items
    .map((item) => {
      return <JobBlock key={item.id} {...item} />;
    })
    .filter((item) =>
      sortByType.sortBy ? item.props.schedule.id === sortByType.sortBy : item
    )
    .filter((item) => {
      const searchPosition = item.props.name?.toLowerCase();

      return searchPosition
        ? searchPosition.includes(sortByType.searchByPosition.toLowerCase())
        : item;
    });

  return [items, isLoading, jobItems];
};

export default useJobFilter;
