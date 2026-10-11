import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { fetchActiveReports } from "@/lib/reports";
import { useClientFetch } from "@/hooks/useClientFetch";

export default function Reports() {
  const { data: reports = [], loading } = useClientFetch(fetchActiveReports, []);

  return (
    <Layout>
      <section className="ogaalsan-reports">
        <div className="container">
          <nav className="ogaalsan-reports__crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Reports</span>
          </nav>

          <div className="ogaalsan-reports__intro">
            <span className="ogaalsan-reports__eyebrow">Transparency &amp; impact</span>
            <h1 className="ogaalsan-reports__title">Reports</h1>
            <p>
              Published reports on education, technology, and opportunity from
              OgaalSan Consultancy.
            </p>
          </div>

          {loading ? (
            <p className="ogaalsan-reports__status">Loading reports...</p>
          ) : null}

          {!loading && reports.length === 0 ? (
            <p className="ogaalsan-reports__status">
              No reports published yet. Check back soon.
            </p>
          ) : null}

          {!loading && reports.length > 0 ? (
            <div className="ogaalsan-reports__grid">
              {reports.map((report) => (
                <article className="resource-card" key={report.id}>
                  <div className="resource-card__body">
                    <h2 className="resource-card__title">{report.title}</h2>
                    {report.description ? (
                      <p className="resource-card__desc">{report.description}</p>
                    ) : null}
                    {report.file && report.file !== "#" ? (
                      <a
                        href={report.file}
                        className="resource-card__link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View report
                        <i className="fas fa-arrow-right" aria-hidden="true" />
                      </a>
                    ) : null}
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
