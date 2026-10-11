import Layout from "@/components/layout/Layout";
import PageIntro from "@/components/layout/PageIntro";
import Link from "next/link";

const RESOURCES = [
  {
    title: "Course Handbooks",
    description:
      "Downloadable guides and handbooks covering the fundamentals of each Ogaalsan course.",
    file: "#",
  },
  {
    title: "Practice Materials",
    description:
      "Exercises, sample projects, and datasets to help you apply what you learn.",
    file: "#",
  },
  {
    title: "Recorded Sessions",
    description:
      "Access recorded lectures and walkthroughs from our live sessions.",
    file: "#",
  },
  {
    title: "Templates & Checklists",
    description:
      "Ready-to-use templates and checklists to speed up your learning and projects.",
    file: "#",
  },
];

export default function CourseResources() {
  return (
    <Layout headTitle="Course Resources">
      <section className="ogaalsan-page">
        <div className="container">
          <PageIntro
            crumbs={[
              { href: "/", label: "Home" },
              { href: "/courses", label: "Learn" },
              { label: "Course Resources" },
            ]}
            eyebrow="Learn"
            title="Course Resources"
            description="Handbooks, practice materials, recordings, and templates to support your OgaalSan courses."
          />

          <div className="ogaalsan-reports__grid">
            {RESOURCES.map((resource) => (
              <article className="resource-card" key={resource.title}>
                <div className="resource-card__body">
                  <h2 className="resource-card__title">{resource.title}</h2>
                  <p className="resource-card__desc">{resource.description}</p>
                  <Link
                    href={resource.file === "#" ? "/courses" : resource.file}
                    className="resource-card__link"
                    target={resource.file === "#" ? undefined : "_blank"}
                  >
                    {resource.file === "#" ? "Browse courses" : "Access"}
                    <i className="fas fa-arrow-right" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
