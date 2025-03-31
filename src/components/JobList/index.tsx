"use client";

import useJobFilter from "@/hooks/useJobFilter";
import { useState } from "react";
import NotFoundBlock from "@/components/NotFoundBlock";

const JobList = () => {
  const URL = `https://api.hh.ru/vacancies`;
  const countElementsOnPage = 5;

  const [page, setPage] = useState(1);
  const [items, isLoading, jobItems] = useJobFilter({
    URL,
    sortByType: { searchByPosition: "", sortBy: "" },
  });

  // useEffect(() => {
  //   setPage(1);
  // }, [sortByType]);

  const jobsFiltered = jobItems?.filter(
    (_, index) => index < countElementsOnPage * page
  );

  const chowJobsFiltred = jobsFiltered.length ? (
    jobsFiltered
  ) : (
    <NotFoundBlock />
  );
  const countPajeFilt = Boolean(
    Math.floor(jobsFiltered.length / countElementsOnPage)
  );
  const maxCountPage = items.length / countElementsOnPage;

  return (
    <section className="jobs-container">
      {chowJobsFiltred}
      {page < maxCountPage && countPajeFilt && (
        <button className="button" onClick={() => setPage((prev) => ++prev)}>
          Смотреть еще...
        </button>
      )}
    </section>
  );
};

export default JobList;
