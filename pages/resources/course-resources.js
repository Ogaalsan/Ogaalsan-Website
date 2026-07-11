import Layout from "@/components/layout/Layout";
import Link from "next/link";

const RESOURCES = [
  {
    icon: "fas fa-book",
    title: "Course Handbooks",
    description:
      "Downloadable guides and handbooks covering the fundamentals of each Ogaalsan course.",
    file: "#",
  },
  {
    icon: "fas fa-file-code",
    title: "Practice Materials",
    description:
      "Exercises, sample projects, and datasets to help you apply what you learn.",
    file: "#",
  },
  {
    icon: "fas fa-video",
    title: "Recorded Sessions",
    description:
      "Access recorded lectures and walkthroughs from our live training sessions.",
    file: "#",
  },
  {
    icon: "fas fa-clipboard-list",
    title: "Templates & Checklists",
    description:
      "Ready-to-use templates and checklists to speed up your learning and projects.",
    file: "#",
  },
];

export default function CourseResources() {
  return (
    <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Course Resources">
      <section className="blog-area pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-50">
                <span className="sub-title">Learn & Grow</span>
                <h2 className="title">Course Resources</h2>
                <p>
                  Everything you need to get the most out of your Ogaalsan
                  courses — handbooks, practice materials, recordings, and more.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {RESOURCES.map((resource) => (
              <div className="col-lg-3 col-md-6" key={resource.title}>
                <div className="resource-card resource-card--icon">
                  <div className="resource-card__icon">
                    <i className={resource.icon} />
                  </div>
                  <div className="resource-card__body">
                    <h4 className="resource-card__title">{resource.title}</h4>
                    <p className="resource-card__desc">
                      {resource.description}
                    </p>
                    <Link
                      href={resource.file}
                      className="resource-card__link"
                      target={resource.file === "#" ? undefined : "_blank"}
                    >
                      Access <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row justify-content-center mt-30">
            <div className="col-lg-8 text-center">
              <p>
                Looking for a specific course?{" "}
                <Link href="/courses" style={{ color: "#3FA9F5", fontWeight: 600 }}>
                  Browse all courses
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
