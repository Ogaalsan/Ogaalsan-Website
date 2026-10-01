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

export function mapSections(course) {
  return (course?.syllabuses || []).map((syllabus) => ({
    id: syllabus.id,
    title: syllabus.title,
    description: syllabus.description || null,
    order: syllabus.order ?? 0,
    lessons: (syllabus.lessons || []).map((lesson) => ({
      id: lesson.id,
      title: lesson.title,
      order: lesson.order ?? 0,
      isFreePreview: Boolean(lesson.is_free_preview),
      isLocked: lesson.is_locked !== false && !lesson.is_free_preview,
      hasVideo: Boolean(lesson.has_video ?? lesson.video_url),
      hasDocument: Boolean(lesson.has_document ?? lesson.document_url),
      hasContent: Boolean(lesson.has_content ?? lesson.content),
      videoUrl: lesson.video_url || null,
      documentUrl: lesson.document_url || null,
      content: lesson.content || null,
    })),
  }));
}

export function countLessons(course) {
  const sections = course?.sections || mapSections(course);

  if (!sections.length) {
    return Array.isArray(course?.syllabus) ? course.syllabus.length : 0;
  }

  const lessonTotal = sections.reduce(
    (total, section) => total + (section.lessons?.length || 0),
    0
  );

  // Offline courses store topics as section titles with no lessons.
  return lessonTotal > 0 ? lessonTotal : sections.length;
}

export function flattenLessons(course) {
  const sections = course?.sections || mapSections(course);

  if (!sections.length) {
    return (course?.syllabus || []).map((title, index) => ({
      id: index + 1,
      title,
      video_url: course?.videoId || null,
    }));
  }

  const lessons = [];

  sections.forEach((section) => {
    if (section.lessons?.length) {
      section.lessons.forEach((lesson) => {
        lessons.push({
          ...lesson,
          video_url: lesson.videoUrl || lesson.video_url || null,
          chapterTitle: section.title,
        });
      });
    } else {
      lessons.push({
        id: section.id,
        title: section.title,
        video_url: null,
        chapterTitle: null,
      });
    }
  });

  return lessons;
}

/**
 * Online = at least one lesson (videos/docs/content managed in admin).
 * Offline = sections/topics only (what will be covered), no lesson media.
 */
export function resolveCourseFormat(sections) {
  const hasLessons = sections.some((section) => section.lessons?.length > 0);
  return hasLessons ? "online" : "offline";
}

export function mapApiCourse(course, apiBaseUrl) {
  const sections = mapSections(course);
  const format = resolveCourseFormat(sections);
  const lessons = flattenLessons({ ...course, sections });
  const firstVideo = lessons.find((lesson) => lesson.video_url)?.video_url;
  const lessonCount = countLessons({ sections });

  return {
    id: course.id,
    slug: course.slug || null,
    category:
      course.category?.name ||
      (typeof course.category === "string" ? course.category : null) ||
      course.level ||
      "Course",
    title: course.title,
    description: course.description || "",
    image: resolveCourseImage(
      course.featured_image,
      apiBaseUrl,
      course.featured_image_url
    ),
    duration: course.duration || "Self-paced",
    location:
      format === "online"
        ? "Online via the Ogaalsan learning portal"
        : "In-person / instructor-led at Ogaalsan Center",
    whereToWatch:
      format === "online"
        ? "Lessons and recordings are available through the Ogaalsan learning portal after registration."
        : "Attend scheduled sessions in person or as arranged with Ogaalsan.",
    instructor: course.instructor?.name || "Ogaalsan Instructor",
    level: course.level || "All Levels",
    price: Number(course.price || 0),
    discountPrice: (() => {
      const value = Number(course.discount_price);
      return Number.isFinite(value) && value > 0 ? value : null;
    })(),
    format,
    sectionCount: sections.length,
    lessonCount,
    videoId: extractYouTubeId(firstVideo) || extractYouTubeId(course.videoId) || null,
    sections,
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
