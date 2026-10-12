export default function ServiceListSkeleton({ count = 3 }) {
  return (
    <div
      className="ogaalsan-services__catalog-grid service-list-skeleton"
      aria-busy="true"
      aria-live="polite"
    >
      {Array.from({ length: count }).map((_, index) => (
        <article
          key={index}
          className="ogaalsan-service-card ogaalsan-service-card--skeleton"
        >
          <div className="ogaalsan-service-card__media service-list-skeleton__media">
            <span className="skeleton-bone skeleton-bone--service-media" />
          </div>
          <div className="ogaalsan-service-card__body">
            <span className="skeleton-bone skeleton-bone--service-title" />
            <span className="skeleton-bone skeleton-bone--service-title-sm" />
            <span className="skeleton-bone skeleton-bone--line" />
            <span className="skeleton-bone skeleton-bone--line skeleton-bone--line-short" />
            <span className="skeleton-bone skeleton-bone--service-link" />
          </div>
        </article>
      ))}
    </div>
  );
}
