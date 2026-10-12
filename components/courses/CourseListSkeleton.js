export default function CourseListSkeleton({ count = 6 }) {
  return (
    <div
      className="row justify-content-center g-4 course-list-skeleton"
      aria-busy="true"
      aria-live="polite"
    >
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="col-lg-4 col-md-6 col-sm-10">
          <article className="course-card course-card--skeleton">
            <div className="course-card__media course-list-skeleton__media">
              <span className="skeleton-bone skeleton-bone--course-media" />
            </div>
            <div className="course-card__body">
              <div className="course-list-skeleton__meta">
                <span className="skeleton-bone skeleton-bone--course-meta" />
                <span className="skeleton-bone skeleton-bone--course-meta" />
              </div>
              <span className="skeleton-bone skeleton-bone--course-title" />
              <span className="skeleton-bone skeleton-bone--course-title-sm" />
              <span className="skeleton-bone skeleton-bone--line" />
              <span className="skeleton-bone skeleton-bone--line skeleton-bone--line-short" />
              <div className="course-list-skeleton__footer">
                <span className="skeleton-bone skeleton-bone--course-instructor" />
                <span className="skeleton-bone skeleton-bone--course-btn" />
              </div>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}
