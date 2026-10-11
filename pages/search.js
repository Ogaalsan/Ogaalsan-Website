import Layout from "@/components/layout/Layout";
import PageIntro from "@/components/layout/PageIntro";
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
    <Layout headTitle="Search">
      <section className="ogaalsan-page">
        <div className="container">
          <PageIntro
            crumbs={[
              { href: "/", label: "Home" },
              { label: "Search" },
            ]}
            eyebrow="Search"
            title={query ? `Results for “${query}”` : "Search the website"}
            description={
              query
                ? undefined
                : "Use the search icon in the header to find courses, programs, services, blog posts, and reports."
            }
          />

          {loading ? <ContentLoader message="Searching..." /> : null}

          {!loading && query && results.length === 0 ? (
            <p className="ogaalsan-reports__status">No results found.</p>
          ) : null}

          {!loading && results.length > 0 ? (
            <div className="ogaalsan-reports__grid">
              {results.map((item) => (
                <article className="resource-card" key={`${item.type}-${item.title}`}>
                  <div className="resource-card__body">
                    <span className="ogaalsan-page-intro__eyebrow">{item.type}</span>
                    <h2 className="resource-card__title">{item.title}</h2>
                    {item.description ? (
                      <p className="resource-card__desc">{item.description}</p>
                    ) : null}
                    <Link
                      href={item.href}
                      className="resource-card__link"
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                    >
                      Open
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : null}
        </div>
      </section>
    </Layout>
  );
}
