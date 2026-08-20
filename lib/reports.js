import { fetchPublicJson } from "./api";
import { resolveMediaUrl } from "./media";

export function mapApiReport(report, apiBaseUrl) {
  const fileUrl = report.file_url
    ? resolveMediaUrl(report.file_url, apiBaseUrl)
    : "#";

  return {
    id: report.id,
    title: report.title,
    description: report.description || "",
    file: fileUrl || "#",
    isActive: report.is_active,
    order: report.order ?? 0,
  };
}

export async function fetchActiveReports() {
  try {
    const { payload, apiBaseUrl } = await fetchPublicJson(
      "/api/v1/public/reports"
    );
    const raw = payload?.data;
    const reports = Array.isArray(raw)
      ? raw
      : Array.isArray(raw?.data)
        ? raw.data
        : [];
    return reports.map((report) => mapApiReport(report, apiBaseUrl));
  } catch {
    return [];
  }
}
