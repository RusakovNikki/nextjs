export interface IVacancy {
  id: string;
  employer?: {
    id: number;
    name: string;
    url: string;
    alternate_url: string;
    logo_urls: Record<string, string>;
    vacancies_url: string;
    accredited_it_employer: boolean;
    trusted: boolean;
  };
  schedule?: {
    id: string;
    name: string;
  };
  area?: {
    id: string;
    name: string;
    url: string;
  };
  name: string;
  description?: string;
  alternate_url?: string;
}

export interface IVacancyWrapper {
  items: IVacancy[];
  found: number;
  pages: number;
  page: number;
  per_page: number;
  alternate_url: string;
}
