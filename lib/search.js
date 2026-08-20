import { fetchPublishedCourses } from "./courses";
import { fetchPublishedPosts } from "./posts";
import { fetchActiveReports } from "./reports";
import { SERVICE_DIVISIONS } from "./serviceDivisions";
import { fetchTrainings } from "./trainings";

function normalize(value) {
  return String(value || "").toLowerCase();
}

function matchesQuery(query, ...fields) {
  const q = normalize(query).trim();
  if (!q) return false;

  return fields.some((field) => {
    if (Array.isArray(field)) {
      return field.some((item) => normalize(item).includes(q));
    }
    return normalize(field).includes(q);
  });
}

function pushResult(results, item) {
  results.push(item);
}

export async function searchSite(query) {
  const trimmed = query.trim();
  if (!trimmed) return [];

  const [courses, trainings, posts, reports] = await Promise.all([
    fetchPublishedCourses().catch(() => []),
    fetchTrainings().catch(() => []),
    fetchPublishedPosts().catch(() => []),
    fetchActiveReports().catch(() => []),
  ]);

  const results = [];

  SERVICE_DIVISIONS.forEach((service) => {
    if (
      matchesQuery(
        trimmed,
        service.title,
        service.summary,
        service.description,
        service.highlights
      )
    ) {
      pushResult(results, {
        type: "Service",
        title: service.title,
        description: service.summary,
        href: `/services/${service.slug}`,
      });
    }
  });

  courses.forEach((course) => {
    if (
      matchesQuery(
        trimmed,
        course.title,
        course.description,
        course.category,
        course.level
      )
    ) {
      pushResult(results, {
        type: "Course",
        title: course.title,
        description: course.description,
        href: `/course/${course.slug || course.id}`,
      });
    }
  });

  trainings.forEach((training) => {
    if (
      matchesQuery(
        trimmed,
        training.title,
        training.summary,
        training.description,
        training.topics
      )
    ) {
      pushResult(results, {
        type: "Training",
        title: training.title,
        description: training.summary || training.description,
        href: `/training/${training.slug}`,
      });
    }
  });

  posts.forEach((post) => {
    if (
      matchesQuery(
        trimmed,
        post.title,
        post.excerpt,
        post.category,
        post.tags
      )
    ) {
      pushResult(results, {
        type: "Blog",
        title: post.title,
        description: post.excerpt,
        href: `/blog/${post.slug || post.id}`,
      });
    }
  });

  reports.forEach((report) => {
    if (matchesQuery(trimmed, report.title, report.description)) {
      pushResult(results, {
        type: "Report",
        title: report.title,
        description: report.description,
        href:
          report.file && report.file !== "#"
            ? report.file
            : "/resources/reports",
        external: Boolean(report.file && report.file !== "#"),
      });
    }
  });

  if (
    matchesQuery(
      trimmed,
      "contact",
      "contact us",
      "get in touch",
      "ogaalsan consultancy"
    )
  ) {
    pushResult(results, {
      type: "Page",
      title: "Contact Us",
      description: "Get in touch with OgaalSan for ICT, training, and business support.",
      href: "/contact",
    });
  }

  return results;
}
