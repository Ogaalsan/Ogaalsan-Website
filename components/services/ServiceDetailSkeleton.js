export default function ServiceDetailSkeleton() {
  return (
    <section
      className="ogaalsan-page ogaalsan-service-detail service-detail-skeleton"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="container">
        <div className="ogaalsan-page-intro">
          <div className="service-detail-skeleton__crumbs">
            <span className="skeleton-bone skeleton-bone--meta" />
            <span className="skeleton-bone skeleton-bone--meta" />
          </div>
          <span className="skeleton-bone skeleton-bone--chip" />
          <span className="skeleton-bone skeleton-bone--title" />
          <span className="skeleton-bone skeleton-bone--line" />
          <span className="skeleton-bone skeleton-bone--line skeleton-bone--line-short" />
        </div>

        <div className="ogaalsan-service-detail__grid">
          <div className="ogaalsan-service-detail__main">
            <div className="ogaalsan-service-detail__media service-detail-skeleton__media">
              <span className="skeleton-bone skeleton-bone--service-hero" />
            </div>
            <div className="ogaalsan-service-detail__content">
              <span className="skeleton-bone skeleton-bone--line" />
              <span className="skeleton-bone skeleton-bone--line" />
              <span className="skeleton-bone skeleton-bone--line skeleton-bone--line-short" />
              <span className="skeleton-bone skeleton-bone--title-sm" />
              <span className="skeleton-bone skeleton-bone--line" />
              <span className="skeleton-bone skeleton-bone--line" />
              <span className="skeleton-bone skeleton-bone--line skeleton-bone--line-short" />
              <div className="service-detail-skeleton__actions">
                <span className="skeleton-bone skeleton-bone--service-btn" />
                <span className="skeleton-bone skeleton-bone--service-link" />
              </div>
            </div>
          </div>

          <aside className="ogaalsan-service-detail__aside">
            <span className="skeleton-bone skeleton-bone--title-sm" />
            <span className="skeleton-bone skeleton-bone--line" />
            <span className="skeleton-bone skeleton-bone--line" />
            <span className="skeleton-bone skeleton-bone--line" />
            <span className="skeleton-bone skeleton-bone--line skeleton-bone--line-short" />
          </aside>
        </div>
      </div>
    </section>
  );
}
