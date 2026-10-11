export default function BlogListSkeleton({ count = 4 }) {
  return (
    <div className="row blog-skeleton" aria-busy="true" aria-live="polite">
      <span className="visually-hidden">Loading blog posts...</span>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="col-md-6 mb-30">
          <div className="blog-post-item-two blog-skeleton-card">
            <div className="blog-post-thumb-two blog-skeleton-thumb-two">
              <span className="skeleton-bone skeleton-bone--card-media" />
              <span className="skeleton-bone skeleton-bone--card-tag" />
            </div>
            <div className="blog-post-content-two blog-skeleton-card-body">
              <span className="skeleton-bone skeleton-bone--card-title mb-2" />
              <span className="skeleton-bone skeleton-bone--card-title-sub mb-3" />
              <span className="skeleton-bone skeleton-bone--line w-100 mb-1" />
              <span className="skeleton-bone skeleton-bone--line skeleton-bone--line-short mb-3" />
              <div className="blog-meta mt-auto">
                <div className="d-flex align-items-center justify-content-between w-100">
                  <div className="d-flex align-items-center gap-2">
                    <span className="skeleton-bone skeleton-bone--avatar-sm" />
                    <span className="skeleton-bone skeleton-bone--name-sm" />
                  </div>
                  <span className="skeleton-bone skeleton-bone--date-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
