import { fetchPublicJson } from "./api";
import { getApiBaseUrl, resolveMediaUrl } from "./media";

const DEFAULT_COURSE_IMAGE = "/assets/img/ogalsan/contact.png";

export { getApiBaseUrl, resolveMediaUrl };

export function resolveCourseImage(image, apiBaseUrl = getApiBaseUrl(), imageUrl = null) {
  const source = imageUrl || image;
  return resolveMediaUrl(source, apiBaseUrl) || DEFAULT_COURSE_IMAGE;
}

export function extractYouTubeId(url) {
  if (!url) {
    return null;
  }

  if (/^[a-zA-Z0-9_-]{11}$/.test(url)) {
    return url;
  }

  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.replace("/", "");
    }

    if (parsed.hostname.includes("youtube.com")) {
      return parsed.searchParams.get("v");
    }
  } catch {
    return null;
  }

  return null;
}

export function countLessons(course) {
  if (!course?.syllabuses?.length) {
    return course?.syllabus?.length || 0;
  }

  return course.syllabuses.reduce(
    (total, syllabus) => total + (syllabus.lessons?.length || 0),
    course.syllabuses.length
  );
}

export function flattenLessons(course) {
  if (!course?.syllabuses?.length) {
    return (course?.syllabus || []).map((title, index) => ({
      id: index + 1,
      title,
      video_url: course?.videoId || null,
    }));
  }

  const lessons = [];

  course.syllabuses.forEach((syllabus) => {
    if (syllabus.lessons?.length) {
      syllabus.lessons.forEach((lesson) => {
        lessons.push(lesson);
      });
    } else {
      lessons.push({
        id: syllabus.id,
        title: syllabus.title,
        video_url: null,
      });
    }
  });

  return lessons;
}

export function mapApiCourse(course, apiBaseUrl) {
  const lessons = flattenLessons(course);
  const firstVideo = lessons.find((lesson) => lesson.video_url)?.video_url;

  return {
    id: course.id,
    slug: course.slug || null,
    category: course.category?.name || (typeof course.category === "string" ? course.category : null) || course.level || "Course",
    title: course.title,
    description: course.description || "",
    image: resolveCourseImage(
      course.featured_image,
      apiBaseUrl,
      course.featured_image_url
    ),
    duration: course.duration || "Self-paced",
    location: "Online via Zoom / In-person at Ogaalsan Center",
    whereToWatch:
      "Live sessions and recordings are available through the Ogaalsan learning portal.",
    instructor: course.instructor?.name || "Ogaalsan Instructor",
    level: course.level || "All Levels",
    price: Number(course.price || 0),
    discountPrice: (() => {
      const value = Number(course.discount_price);
      return Number.isFinite(value) && value > 0 ? value : null;
    })(),
    lessonCount: countLessons(course),
    videoId: extractYouTubeId(firstVideo) || extractYouTubeId(course.videoId) || null,
    syllabus: lessons.map((lesson) => lesson.title),
    lessons,
    status: course.status || null,
    raw: JSON.parse(JSON.stringify(course)),
  };
}

export async function fetchPublishedCourses() {
  const { payload, apiBaseUrl } = await fetchPublicJson("/api/v1/public/courses");
  const courses = payload.data || [];

  return courses.map((course) => mapApiCourse(course, apiBaseUrl));
}

export async function fetchPublishedCourse(identifier) {
  try {
    const { payload, apiBaseUrl } = await fetchPublicJson(
      `/api/v1/public/courses/${identifier}`
    );
    return mapApiCourse(payload.data, apiBaseUrl);
  } catch {
    return null;
  }
}
