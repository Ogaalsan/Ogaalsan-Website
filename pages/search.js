import Layout from "@/components/layout/Layout";
import ContentLoader from "@/components/common/ContentLoader";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { searchSite } from "@/lib/search";

export default function SearchPage() {
  const router = useRouter();
  const query =
    typeof router.query.q === "string" ? router.query.q.trim() : "";
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!router.isReady) return;

    if (!query) {
      setResults([]);
      setLoading(false);
      return;
    }

    let active = true;
    setLoading(true);

    searchSite(query)
      .then((items) => {
        if (active) setResults(items);
      })
      .catch(() => {
        if (active) setResults([]);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [router.isReady, query]);

  return (
    <Layout breadcrumbTitle="Search">
      <section className="blog-area pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-50">
                <span className="sub-title">Search Results</span>
                <h2 className="title">
                  {query ? `Results for "${query}"` : "Search the website"}
                </h2>
                {!query && (
                  <p>
                    Use the search icon in the header to find courses,
                    training, services, blog posts, and reports.
                  </p>
                )}
              </div>
            </div>
          </div>

          {loading && (
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <ContentLoader message="Searching..." />
              </div>
            </div>
          )}

          {!loading && query && results.length === 0 && (
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <p>No results found for &quot;{query}&quot;.</p>
                <Link href="/contact" className="btn btn-three mt-20">
                  Contact Us
                </Link>
              </div>
            </div>
          )}

          {!loading && results.length > 0 && (
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <ul className="list-wrap ogaalsan-search-results">
                  {results.map((item) => (
                    <li key={`${item.type}-${item.href}-${item.title}`}>
                      <span className="ogaalsan-search-results__type">
                        {item.type}
                      </span>
                      <h3 className="ogaalsan-search-results__title">
                        {item.external ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.title}
                          </a>
                        ) : (
                          <Link href={item.href}>{item.title}</Link>
                        )}
                      </h3>
                      {item.description ? (
                        <p>{item.description}</p>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
