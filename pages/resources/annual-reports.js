import Layout from "@/components/layout/Layout";
import Link from "next/link";

const REPORTS = [
  {
    year: "2025",
    title: "Annual Report 2025",
    description:
      "A full overview of Ogaalsan's programs, training impact, and community initiatives throughout 2025.",
    file: "#",
  },
  {
    year: "2024",
    title: "Annual Report 2024",
    description:
      "Highlights of our ICT trainings, partnerships, and organizational growth during 2024.",
    file: "#",
  },
  {
    year: "2023",
    title: "Annual Report 2023",
    description:
      "Summary of activities, milestones, and financial highlights for the 2023 period.",
    file: "#",
  },
];

export default function AnnualReports() {
  return (
    <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Annual Reports">
      <section className="blog-area pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-50">
                <span className="sub-title">Transparency & Impact</span>
                <h2 className="title">Annual Reports</h2>
                <p>
                  Explore our yearly reports to see how Ogaalsan is empowering
                  communities through education, technology, and opportunity.
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            {REPORTS.map((report) => (
              <div className="col-lg-4 col-md-6" key={report.year}>
                <div className="resource-card">
                  <div className="resource-card__year">{report.year}</div>
                  <div className="resource-card__body">
                    <h4 className="resource-card__title">{report.title}</h4>
                    <p className="resource-card__desc">{report.description}</p>
                    <Link
                      href={report.file}
                      className="btn btn-three"
                      target={report.file === "#" ? undefined : "_blank"}
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
