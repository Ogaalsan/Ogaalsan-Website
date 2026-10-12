export default function BlogDetailSkeleton() {
  return (
    <section className="blog-details-area pt-120 pb-120 blog-skeleton" aria-busy="true" aria-live="polite">
      <div className="container">
        <span className="visually-hidden">Loading blog post...</span>
        <div className="blog-details-wrap">
          <div className="row justify-content-center">
            <div className="col-71">
              <div className="blog-details-thumb mb-35">
                <span className="skeleton-bone skeleton-bone--blog-hero" />
              </div>
              <div className="blog-details-content">
                <div className="blog-skeleton-meta mb-20">
                  <span className="skeleton-bone skeleton-bone--meta" />
                  <span className="skeleton-bone skeleton-bone--meta" />
                  <span className="skeleton-bone skeleton-bone--meta" />
                </div>
                <span className="skeleton-bone skeleton-bone--blog-title mb-10" />
                <span className="skeleton-bone skeleton-bone--blog-title-sm mb-30" />

                <div className="blog-skeleton-body mb-35">
                  <span className="skeleton-bone skeleton-bone--line" />
                  <span className="skeleton-bone skeleton-bone--line" />
                  <span className="skeleton-bone skeleton-bone--line" />
                  <span className="skeleton-bone skeleton-bone--line skeleton-bone--line-short" />
                  <div className="py-2" />
                  <span className="skeleton-bone skeleton-bone--line" />
                  <span className="skeleton-bone skeleton-bone--line" />
                  <span className="skeleton-bone skeleton-bone--line skeleton-bone--line-short" />
                  <div className="py-2" />
                  <span className="skeleton-bone skeleton-bone--line" />
                  <span className="skeleton-bone skeleton-bone--line" />
                  <span className="skeleton-bone skeleton-bone--line skeleton-bone--line-short" />
                </div>

                <div className="bd-content-bottom mb-40">
                  <div className="row align-items-center">
                    <div className="col-md-7">
                      <div className="d-flex align-items-center gap-2">
                        <span className="skeleton-bone skeleton-bone--label" />
                        <span className="skeleton-bone skeleton-bone--chip" />
                        <span className="skeleton-bone skeleton-bone--chip" />
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="d-flex justify-content-md-end gap-2 mt-3 mt-md-0">
                        <span className="skeleton-bone skeleton-bone--label" />
                        <span className="skeleton-bone skeleton-bone--meta" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="blog-avatar-wrap mb-65 blog-skeleton-author-card">
                <div className="blog-avatar-img">
                  <span className="skeleton-bone skeleton-bone--avatar-lg" />
                </div>
                <div className="blog-avatar-info w-100">
                  <span className="skeleton-bone skeleton-bone--label mb-2" />
                  <span className="skeleton-bone skeleton-bone--name mb-2" />
                  <span className="skeleton-bone skeleton-bone--line w-100 mb-1" />
                  <span className="skeleton-bone skeleton-bone--line skeleton-bone--line-short" />
                </div>
              </div>
            </div>

            <div className="col-29">
              <aside className="blog-sidebar">
                <div className="sidebar-search mb-30">
                  <span className="skeleton-bone skeleton-bone--search" />
                </div>
                <div className="blog-widget">
                  <h4 className="bw-title">
                    <span className="skeleton-bone skeleton-bone--widget-title" />
                  </h4>
                  <div className="rc-post-wrap">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <div key={index} className="rc-post-item blog-skeleton-rc">
                        <div className="thumb">
                          <span className="skeleton-bone skeleton-bone--rc-thumb" />
                        </div>
                        <div className="content w-100">
                          <span className="skeleton-bone skeleton-bone--label mb-2" />
                          <span className="skeleton-bone skeleton-bone--line mb-1" style={{ height: "14px", width: "95%" }} />
                          <span className="skeleton-bone skeleton-bone--line" style={{ height: "14px", width: "65%" }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
