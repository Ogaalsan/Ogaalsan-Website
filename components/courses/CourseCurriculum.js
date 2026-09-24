import { useState } from "react";
import Link from "next/link";

function LessonMeta({ lesson }) {
  const bits = [];
  if (lesson.hasVideo) bits.push("Video");
  if (lesson.hasDocument) bits.push("PDF");
  if (lesson.hasContent) bits.push("Notes");
  if (lesson.isFreePreview) bits.push("Free preview");
  return bits.length ? bits.join(" · ") : "Lesson";
}

export default function CourseCurriculum({ course }) {
  const sections = course?.sections || [];
  const isOnline = course?.format === "online";
  const [openIds, setOpenIds] = useState(() =>
    sections.length ? [sections[0].id] : []
  );

  if (!sections.length) {
    return null;
  }

  const toggle = (id) => {
    setOpenIds((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  if (!isOnline) {
    return (
      <div className="course-curriculum course-curriculum--offline">
        <h3 className="course-curriculum__heading">What Will Be Covered</h3>
        <p className="course-curriculum__intro">
          Topics and sessions for this instructor-led course, managed from the
          admin curriculum.
        </p>
        <ol className="course-curriculum__topics">
          {sections.map((section, index) => (
            <li key={section.id || index} className="course-curriculum__topic">
              <span className="course-curriculum__topic-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <strong>{section.title}</strong>
                {section.description ? <p>{section.description}</p> : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  return (
    <div className="course-curriculum course-curriculum--online">
      <div className="course-curriculum__header">
        <div>
          <h3 className="course-curriculum__heading">Course Curriculum</h3>
          <p className="course-curriculum__intro">
            {course.sectionCount}{" "}
            {course.sectionCount === 1 ? "section" : "sections"} ·{" "}
            {course.lessonCount}{" "}
            {course.lessonCount === 1 ? "lesson" : "lessons"}
          </p>
        </div>
        <span className="course-curriculum__format-badge">Online</span>
      </div>

      <div className="course-curriculum__sections">
        {sections.map((section, sectionIndex) => {
          const isOpen = openIds.includes(section.id);
          const lessonCount = section.lessons?.length || 0;

          return (
            <div
              key={section.id || sectionIndex}
              className={`course-curriculum__section${isOpen ? " is-open" : ""}`}
            >
              <button
                type="button"
                className="course-curriculum__section-toggle"
                onClick={() => toggle(section.id)}
                aria-expanded={isOpen}
              >
                <span className="course-curriculum__section-label">
                  <span className="course-curriculum__section-index">
                    Section {sectionIndex + 1}
                  </span>
                  <strong>{section.title}</strong>
                  {section.description ? (
                    <span className="course-curriculum__section-desc">
                      {section.description}
                    </span>
                  ) : null}
                </span>
                <span className="course-curriculum__section-meta">
                  {lessonCount} {lessonCount === 1 ? "lesson" : "lessons"}
                  <i
                    className={`fas fa-chevron-${isOpen ? "up" : "down"}`}
                    aria-hidden="true"
                  />
                </span>
              </button>

              {isOpen && (
                <ul className="course-curriculum__lessons">
                  {lessonCount === 0 ? (
                    <li className="course-curriculum__lesson is-empty">
                      Lessons for this section will appear once added in admin.
                    </li>
                  ) : (
                    section.lessons.map((lesson, lessonIndex) => (
                      <li
                        key={lesson.id || lessonIndex}
                        className={`course-curriculum__lesson${
                          lesson.isFreePreview ? " is-preview" : ""
                        }${lesson.isLocked ? " is-locked" : ""}`}
                      >
                        <span className="course-curriculum__lesson-icon">
                          <i
                            className={
                              lesson.isLocked && !lesson.isFreePreview
                                ? "fas fa-lock"
                                : lesson.hasVideo
                                  ? "fas fa-play-circle"
                                  : lesson.hasDocument
                                    ? "fas fa-file-alt"
                                    : "fas fa-book-open"
                            }
                            aria-hidden="true"
                          />
                        </span>
                        <div className="course-curriculum__lesson-body">
                          <div className="course-curriculum__lesson-title">
                            {lesson.title}
                          </div>
                          <div className="course-curriculum__lesson-meta">
                            <LessonMeta lesson={lesson} />
                          </div>
                        </div>
                        {lesson.isFreePreview ? (
                          <Link
                            href={`/course/watch/${course.slug || course.id}`}
                            className="course-curriculum__preview-link"
                          >
                            Preview
                          </Link>
                        ) : (
                          <span className="course-curriculum__locked-hint">
                            Locked
                          </span>
                        )}
                      </li>
                    ))
                  )}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
