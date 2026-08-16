import ServiceDivisionPage from "@/components/services/ServiceDivisionPage";
import { getServiceDivision } from "@/lib/serviceDivisions";

export default function IctSolutionsPage() {
  return <ServiceDivisionPage division={getServiceDivision("ict")} />;
}
