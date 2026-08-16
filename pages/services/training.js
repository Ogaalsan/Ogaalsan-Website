import ServiceDivisionPage from "@/components/services/ServiceDivisionPage";
import { getServiceDivision } from "@/lib/serviceDivisions";

export default function TrainingCapacityPage() {
  return <ServiceDivisionPage division={getServiceDivision("training")} />;
}
