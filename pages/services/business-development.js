import ServiceDivisionPage from "@/components/services/ServiceDivisionPage";
import { getServiceDivision } from "@/lib/serviceDivisions";

export default function BusinessDevelopmentPage() {
  return (
    <ServiceDivisionPage division={getServiceDivision("business-development")} />
  );
}
