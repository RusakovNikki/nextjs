"use client";

import useJobFilter from "@/hooks/useJobFilter";
import { useState } from "react";
import NotFoundBlock from "@/components/NotFoundBlock";
import SortForm from "../SortForm";
import SortPosition from "../SortPosition";
import btnClose from "/public/close-btn.svg";
import Image from "next/image";

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
  const [positionForm, setPositionForm] = useState(false);
  const [sortByType, setSortByType] = useState({
    nameSort: "",
    sortBy: "",
    searchByPosition: "",
  });

  return (
    <>
      <div className="header__sortby sortby">
        <SortForm
          sortByType={sortByType}
          setSortByType={setSortByType}
          setPositionForm={setPositionForm}
          positionForm={positionForm}
        />
        <SortPosition sortByType={sortByType} setSortByType={setSortByType} />
        <div
          className="header__clear"
          onClick={() =>
            setSortByType({ nameSort: "", sortBy: "", searchByPosition: "" })
          }
        >
          <label htmlFor="#close" className="header__title-clear formular">
            Clear sorting
          </label>
          <span className="header__close-btn">
            <Image src={btnClose} alt="" id="#close" />
          </span>
        </div>
      </div>
      <section className="jobs-container">
        {chowJobsFiltred}
        {page < maxCountPage && countPajeFilt && (
          <button className="button" onClick={() => setPage((prev) => ++prev)}>
            Смотреть еще...
          </button>
        )}
      </section>
    </>
  );
};

export default JobList;
