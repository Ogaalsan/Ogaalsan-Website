export default function CourseDetailSkeleton() {
  return (
    <section className="course-detail" aria-busy="true" aria-live="polite">
      <div className="container">
        <span className="visually-hidden">Loading course details</span>
        <div className="course-detail__grid">
          <div className="course-detail__main">
            <div className="course-detail__intro">
              <span className="skeleton-bone skeleton-bone--chip" />
              <span className="skeleton-bone skeleton-bone--title" />
              <span className="skeleton-bone skeleton-bone--title-sm" />
              <span className="skeleton-bone skeleton-bone--line" />
              <span className="skeleton-bone skeleton-bone--line skeleton-bone--line-short" />
              <div className="course-detail-skeleton__meta">
                <span className="skeleton-bone skeleton-bone--meta" />
                <span className="skeleton-bone skeleton-bone--meta" />
                <span className="skeleton-bone skeleton-bone--meta" />
              </div>
              <div className="course-detail-skeleton__instructor">
                <span className="skeleton-bone skeleton-bone--avatar" />
                <div className="course-detail-skeleton__instructor-copy">
                  <span className="skeleton-bone skeleton-bone--label" />
                  <span className="skeleton-bone skeleton-bone--name" />
                </div>
              </div>
            </div>

            <div className="course-detail-skeleton__tabs">
              <span className="skeleton-bone skeleton-bone--tab" />
              <span className="skeleton-bone skeleton-bone--tab" />
            </div>

            <div className="course-detail__panel course-detail-skeleton__panel">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="course-detail-skeleton__row">
                  <span className="skeleton-bone skeleton-bone--index" />
                  <span className="skeleton-bone skeleton-bone--row" />
                </div>
              ))}
            </div>
          </div>

          <aside className="course-detail__aside">
            <div className="course-detail__card course-detail-skeleton__card">
              <span className="skeleton-bone skeleton-bone--media" />
              <div className="course-detail__card-body">
                <span className="skeleton-bone skeleton-bone--price" />
                <span className="skeleton-bone skeleton-bone--btn" />
                <span className="skeleton-bone skeleton-bone--btn skeleton-bone--btn-ghost" />
                <div className="course-detail-skeleton__includes">
                  <span className="skeleton-bone skeleton-bone--label" />
                  <span className="skeleton-bone skeleton-bone--include" />
                  <span className="skeleton-bone skeleton-bone--include" />
                  <span className="skeleton-bone skeleton-bone--include" />
                  <span className="skeleton-bone skeleton-bone--include" />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
