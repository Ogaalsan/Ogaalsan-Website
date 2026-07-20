import Layout from "@/components/layout/Layout";
import ContentLoader from "@/components/common/ContentLoader";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { fetchPublishedPost, fetchPublishedPosts } from "@/lib/posts";
import { useClientFetch } from "@/hooks/useClientFetch";

export default function BlogDetails() {
  const router = useRouter();
  const identifier = router.query.id;
  const ready = router.isReady && Boolean(identifier);
  const postHref = (post) => `/blog/${post.slug || post.id}`;

  const { data: blogPost, loading: postLoading } = useClientFetch(
    () => fetchPublishedPost(identifier),
    [identifier],
    { enabled: ready, initialData: null }
  );
  const { data: allPosts = [] } = useClientFetch(fetchPublishedPosts, []);

  const recentPosts = useMemo(() => {
    if (!blogPost) {
      return allPosts.slice(0, 4);
    }

    return allPosts.filter((post) => post.id !== blogPost.id).slice(0, 4);
  }, [allPosts, blogPost]);

  if (!ready || postLoading) {
    return (
      <Layout breadcrumbTitle="Blog Details">
        <ContentLoader message="Loading blog post..." />
      </Layout>
    );
  }

  if (!blogPost) {
    return (
      <Layout breadcrumbTitle="Blog Details">
        <section className="pt-120 pb-120 text-center">
          <div className="container">
            <h2>Post not found.</h2>
            <Link href="/blog" className="btn mt-30">
              Back to Blog
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <>
      <Layout breadcrumbTitle="Blog Details">
        <section className="blog-details-area pt-120 pb-120">
              <div className="container">
                <div className="blog-details-wrap">
                  <div className="row justify-content-center">
                    <div className="col-71">
                      <div className="blog-details-thumb">
                        <Image
                          src={blogPost.image}
                          className="w-100"
                          alt={blogPost.title}
                          width={800}
                          height={500}
                          loading="lazy"
                        />
                      </div>
                      <div className="blog-details-content">
                        <h2 className="title">{blogPost.title}</h2>
                        <div className="blog-meta-three">
                          <ul className="list-wrap">
                            <li>
                              <i className="far fa-calendar" />
                              {blogPost.date}
                            </li>
                            <li>
                              <Image
                                className="blog-meta-author-img"
                                src={blogPost.authorImg}
                                alt={blogPost.author}
                                width={40}
                                height={40}
                                loading="lazy"
                              />{" "}
                              by{" "}
                              <Link href={postHref(blogPost)}>
                                {blogPost.author}
                              </Link>
                            </li>
                            <li>
                              <i className="fas fa-tags" />{" "}
                              <Link href="/blog">{blogPost.category}</Link>
                            </li>
                          </ul>
                        </div>
                        {Array.isArray(blogPost.content) &&
                          blogPost.content.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                          ))}
                        <div className="bd-content-bottom">
                          <div className="row align-items-center">
                            <div className="col-md-7">
                              <div className="post-tags">
                                <h5 className="title">Tags:</h5>
                                <ul className="list-wrap">
                                  {(blogPost.tags?.length
                                    ? blogPost.tags
                                    : [blogPost.category]
                                  ).map((tag) => (
                                    <li key={tag}>
                                      <Link href="/blog">{tag}</Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-5">
                              <div className="blog-post-share">
                                <h5 className="title">Share:</h5>
                                <ul className="list-wrap">
                                  <li>
                                    <Link href="#">
                                      <i className="fab fa-facebook-f" />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="#">
                                      <i className="fab fa-twitter" />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="#">
                                      <i className="fab fa-instagram" />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="#">
                                      <i className="fab fa-pinterest-p" />
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="blog-avatar-wrap mb-65">
                        <div className="blog-avatar-img">
                          <Link href="#">
                            <img
                              src={blogPost.authorImg}
                              alt={blogPost.author}
                            />
                          </Link>
                        </div>
                        <div className="blog-avatar-info">
                          <span className="designation">Author</span>
                          <h4 className="name">
                            <Link href={postHref(blogPost)}>
                              {blogPost.author}
                            </Link>
                          </h4>
                          <p>
                            {blogPost.author} is part of the OgaalSan
                            Consultancy team, focused on delivering practical{" "}
                            {blogPost.category.toLowerCase()} insights and
                            solutions.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-29">
                      <aside className="blog-sidebar">
                        <div className="sidebar-search">
                          <form action="#">
                            <input
                              type="text"
                              placeholder="Search Here . . ."
                            />
                            <button type="submit">
                              <i className="flaticon-search" />
                            </button>
                          </form>
                        </div>
                        <div className="blog-widget">
                          <h4 className="bw-title">Recent Posts</h4>
                          <div className="rc-post-wrap">
                            {recentPosts.map((post) => (
                              <div key={post.id} className="rc-post-item">
                                <div className="thumb">
                                  <Link href={postHref(post)}>
                                    <Image
                                      width="0"
                                      height="0"
                                      sizes="100vw"
                                      style={{ width: "auto", height: "auto" }}
                                      src={post.image}
                                      alt={post.title}
                                    />
                                  </Link>
                                </div>
                                <div className="content">
                                  <span className="date">
                                    <i className="far fa-calendar" />
                                    {post.date}
                                  </span>
                                  <h2 className="title">
                                    <Link href={postHref(post)}>
                                      {post.title}
                                    </Link>
                                  </h2>
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
      </Layout>
    </>
  );
}
