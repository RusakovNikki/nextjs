import { IVacancy, IVacancyWrapper } from "@/interfaces/vacancy";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const headHunterApi = createApi({
  reducerPath: "headHunterApi",
  tagTypes: ["headHunter"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.hh.ru" }),
  endpoints: (builder) => ({
    getVacations: builder.query<IVacancy[], void>({
      query: () => ({
        url: "/vacancies",
      }),
      transformResponse: (value: IVacancyWrapper) => value.items,
    }),
    getVacancy: builder.query<IVacancy, number>({
      query: (vacancyId) => ({
        url: `/vacancies/${vacancyId}`,
      }),
    }),
  }),
});

export const { useGetVacationsQuery, useGetVacancyQuery } = headHunterApi;
