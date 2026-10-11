import BlogPost from "@/components/blog/BlogPost";
import BlogListSkeleton from "@/components/blog/BlogListSkeleton";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import { fetchPublishedPosts } from "@/lib/posts";
import { useClientFetch } from "@/hooks/useClientFetch";

export default function Blog() {
  const { data: posts = [], loading } = useClientFetch(fetchPublishedPosts, []);
  const recentPosts = posts.slice(0, 4);

  return (
    <>
      <Layout headTitle="Latest Blog">
        <section className="blog-area ogaalsan-page">
          <div className="container">
            <div className="ogaalsan-page-intro">
              <nav className="ogaalsan-page-intro__crumbs" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span aria-hidden="true">/</span>
                <span>Blog</span>
              </nav>
              <span className="ogaalsan-page-intro__eyebrow">Insights</span>
              <h1 className="ogaalsan-page-intro__title">Latest from the blog</h1>
              <p className="ogaalsan-page-intro__desc">
                Updates, ideas, and stories from OgaalSan Consultancy.
              </p>
            </div>
            <div className="inner-blog-wrap">
              <div className="row justify-content-center">
                <div className="col-71">
                  <div className="blog-post-wrap">
                    {loading ? (
                      <BlogListSkeleton count={4} />
                    ) : posts.length > 0 ? (
                      <div className="row">
                        <BlogPost
                          posts={posts}
                          showItem={4}
                          style={1}
                          showPagination
                        />
                      </div>
                    ) : (
                      <div className="row">
                        <div className="col-12 text-center">
                          <h3>No blog posts published yet</h3>
                          <p>
                            Create posts in the Ogaalsan admin panel and set
                            their status to Published to display them here.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-29">
                  <aside className="blog-sidebar">
                    <div className="sidebar-search">
                      <form action="#">
                        <input type="text" placeholder="Search Here . . ." />
                        <button type="submit">
                          <i className="flaticon-search" />
                        </button>
                      </form>
                    </div>
                    <div className="blog-widget">
                      <h4 className="bw-title">Recent Posts</h4>
                      <div className="rc-post-wrap">
                        {loading ? (
                          <div className="blog-skeleton">
                            {Array.from({ length: 4 }).map((_, index) => (
                              <div key={index} className="rc-post-item blog-skeleton-rc">
                                <div className="thumb">
                                  <span className="skeleton-bone skeleton-bone--rc-thumb" />
                                </div>
                                <div className="content w-100">
                                  <span className="skeleton-bone skeleton-bone--label mb-2" />
                                  <span
                                    className="skeleton-bone skeleton-bone--line mb-1"
                                    style={{ height: "14px", width: "95%" }}
                                  />
                                  <span
                                    className="skeleton-bone skeleton-bone--line"
                                    style={{ height: "14px", width: "65%" }}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          recentPosts.map((post) => (
                            <div key={post.id} className="rc-post-item">
                              <div className="thumb">
                                <Link href={`/blog/${post.slug || post.id}`}>
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
                                  <Link href={`/blog/${post.slug || post.id}`}>
                                    {post.title}
                                  </Link>
                                </h2>
                              </div>
                            </div>
                          ))
                        )}
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
