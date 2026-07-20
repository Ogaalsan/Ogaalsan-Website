import Link from "next/link";

export default function Blog({ posts = [], loading = false }) {
  const latestPosts = posts.slice(0, 3);

  if (loading) {
    return (
      <section className="blog-area-two blog-bg-two py-80">
        <div className="container text-center">
          <p>Loading blog posts...</p>
        </div>
      </section>
    );
  }

  if (latestPosts.length === 0) {
    return null;
  }

  return (
    <>
      <section
        className="blog-area-two blog-bg-two"
        data-background="/assets/img/bg/h2_blog_bg.jpg"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title-two text-center mb-50 tg-heading-subheading animation-style3">
                <span className="sub-title">News & Insights</span>
                <h2 className="title tg-element-title">
                  Latest ICT & Digital Innovation Updates
                </h2>
                <p>
                  Stay informed with the latest trends, insights, and best
                  practices in ICT solutions, digital transformation, and
                  technology innovation.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center align-items-stretch">
            {latestPosts.map((post) => (
              <div key={post.id} className="col-lg-4 col-md-6 col-sm-10 d-flex">
                <div className="blog-post-item-two">
                  <div className="blog-post-thumb-two">
                    <Link href={`/blog/${post.slug || post.id}`}>
                      <img src={post.image} alt={post.title} />
                    </Link>
                    <Link href="/blog" className="tag">
                      {post.category}
                    </Link>
                  </div>
                  <div className="blog-post-content-two">
                    <h2 className="title">
                      <Link href={`/blog/${post.slug || post.id}`}>
                        {post.title}
                      </Link>
                    </h2>
                    <p>{post.excerpt}</p>
                    <div className="blog-meta">
                      <ul className="list-wrap">
                        <li>
                          <Link href={`/blog/${post.slug || post.id}`}>
                            <img
                              src={
                                post.authorImg ||
                                "/assets/img/ogalsan/image (8).png"
                              }
                              alt={post.author}
                            />
                            {post.author}
                          </Link>
                        </li>
                        <li>
                          <i className="far fa-calendar" />
                          {post.date}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
