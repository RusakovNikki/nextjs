import JobBlock from "@/components/JobBlock";
import { notFound } from "next/navigation";

interface VacancyPage {
  params: Promise<{ vacancyId: string }>;
}

const VacancyPage = async (props: VacancyPage) => {
  const { vacancyId } = await props.params;

  if (!vacancyId) {
    return notFound();
  }

  return <JobBlock vacancyId={parseInt(vacancyId)} />;
};

export default VacancyPage;
