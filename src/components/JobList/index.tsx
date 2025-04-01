"use client";

import { useState } from "react";
import NotFoundBlock from "@/components/NotFoundBlock";
import SortForm from "../SortForm";
import SortPosition from "../SortPosition";
import btnClose from "/public/close-btn.svg";
import Image from "next/image";
import { useGetVacationsQuery } from "@/store/api/headHunter";
import JobBlock from "../JobBlock";

const JobList = () => {
  const {
    data: vacancies = [],
    isLoading,
    isFetching,
    error,
  } = useGetVacationsQuery();

  const [page, setPage] = useState(1);

  const [positionForm, setPositionForm] = useState(false);
  const [sortByType, setSortByType] = useState({
    nameSort: "",
    sortBy: "",
    searchByPosition: "",
  });

  console.log(vacancies);

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
        {vacancies.length ? (
          vacancies.map((vacancy) => {
            return <JobBlock key={vacancy.id} id={vacancy.id} />;
          })
        ) : (
          <NotFoundBlock />
        )}
      </section>
    </>
  );
};

export default JobList;
