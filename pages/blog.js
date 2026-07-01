import BlogPost from "@/components/blog/BlogPost";
import Layout from "@/components/layout/Layout";
import ContentLoader from "@/components/common/ContentLoader";
import Image from "next/image";
import Link from "next/link";
import { fetchPublishedPosts } from "@/util/postsApi";
import { useClientFetch } from "@/util/useClientFetch";

export default function Blog() {
  const { data: posts = [], loading } = useClientFetch(fetchPublishedPosts, []);
  const recentPosts = posts.slice(0, 4);

  return (
    <>
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Latest Blog">
        <section className="blog-area pt-120 pb-120">
          <div className="container">
            <div className="inner-blog-wrap">
              <div className="row justify-content-center">
                <div className="col-71">
                  <div className="blog-post-wrap">
                    <div className="row">
                      {loading ? (
                        <div className="col-12">
                          <ContentLoader message="Loading blog posts..." />
                        </div>
                      ) : posts.length > 0 ? (
                        <BlogPost
                          posts={posts}
                          showItem={4}
                          style={1}
                          showPagination
                        />
                      ) : (
                        <div className="col-12 text-center">
                          <h3>No blog posts published yet</h3>
                          <p>
                            Create posts in the Ogaalsan admin panel and set
                            their status to Published to display them here.
                          </p>
                        </div>
                      )}
                    </div>
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
                          <p className="text-sm text-gray-500">Loading...</p>
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
