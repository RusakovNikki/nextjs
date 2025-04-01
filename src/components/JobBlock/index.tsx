"use client";

import Parser from "html-react-parser";
import { IVacancy } from "@/interfaces/vacancy";
import preview from "/public/preview_company.svg";
import { useState } from "react";
import { useGetVacancyQuery } from "@/store/api/headHunter";
import { useRouter } from "next/navigation";

interface IJobBlockWithVacancyProps {
  vacancy: IVacancy;
  vacancyId?: never;
}

interface IJobBlockWithVacancyIdProps {
  vacancyId: number;
  vacancy?: never;
}

type TJobBlockProps = IJobBlockWithVacancyProps | IJobBlockWithVacancyIdProps;

const JobBlock = (props: TJobBlockProps) => {
  const { vacancy, vacancyId } = props;

  const { data: vacancyRequestData } = useGetVacancyQuery(vacancyId!, {
    skip: !vacancyId && Boolean(vacancy),
  });

  const vacancyData = vacancy || vacancyRequestData;

  const [showMoreDesc, setShowMoreDesc] = useState(true);

  const { employer, schedule, area, name, description, alternate_url } =
    vacancyData || {};

  const router = useRouter();

  return (
    <>
      {vacancyData && (
        <div className="jobs-container__item">
          <div className="jobs-container__flex-item">
            <div className="jobs-container__logo-container">
              <img
                src={employer?.logo_urls?.original || preview}
                alt="логотип компании"
                className="jobs-container__logo"
              />
            </div>

            <div className="jobs-container__about about rubik-regular">
              <p className="about__type">
                Form:
                <span className="about__desc"> {schedule?.name}</span>
              </p>

              <p className="about__type">
                Company:
                <span className="about__desc"> {employer?.name}</span>
              </p>

              <p className="about__type">
                Web:
                <span className="about__desc">
                  <a href={alternate_url}>{alternate_url}</a>
                </span>
              </p>

              <p className="about__type">
                Address:
                <span className="about__desc"> {area?.name}</span>
              </p>
            </div>
          </div>
          <div className="jobs-container__flex-item">
            <div className="jobs-container__desc">
              <div className="jobs-container__title roboto">{name}</div>
              <div
                className={`jobs-container__specifics ${
                  showMoreDesc ? "jobs-container__specifics--height" : ""
                } roboto`}
              >
                {Parser(String(description || ""))}
              </div>
            </div>
            <div
              className="jobs-container__more-btn roboto"
              onClick={() => {
                if (vacancyRequestData && !vacancy) {
                  setShowMoreDesc((prev) => !prev);
                } else if (vacancy?.id) {
                  router.push(vacancy?.id);
                }
              }}
            >
              {showMoreDesc ? `more details` : "close"}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JobBlock;
