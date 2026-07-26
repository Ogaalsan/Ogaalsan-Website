import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { fetchActiveReports } from "@/lib/reports";
import { useClientFetch } from "@/hooks/useClientFetch";

export default function Reports() {
  const { data: reports = [], loading } = useClientFetch(fetchActiveReports, []);

  return (
    <Layout breadcrumbTitle="Reports">
      <section className="blog-area pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-50">
                <span className="sub-title">Transparency & Impact</span>
                <h2 className="title">Reports</h2>
                <p>
                  Explore our published reports to see how Ogaalsan is empowering
                  communities through education, technology, and opportunity.
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            {loading && (
              <div className="col-12 text-center">
                <p>Loading reports...</p>
              </div>
            )}

            {!loading && reports.length === 0 && (
              <div className="col-12 text-center">
                <p>No reports published yet. Check back soon.</p>
              </div>
            )}

            {!loading &&
              reports.map((report) => (
                <div className="col-lg-4 col-md-6" key={report.id}>
                  <div className="resource-card">
                    <div className="resource-card__body">
                      <h4 className="resource-card__title">{report.title}</h4>
                      <p className="resource-card__desc">{report.description}</p>
                      <Link
                        href={report.file || "#"}
                        className="btn btn-three"
                        target={
                          report.file && report.file !== "#"
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          report.file && report.file !== "#"
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        <i className="fas fa-file-pdf" /> View Report
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
