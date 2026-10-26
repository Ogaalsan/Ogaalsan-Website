import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { fetchTrainings } from "@/lib/trainings";

export default function TrainingList({ trainings }) {
  return (
    <Layout headTitle="Training & Workshops">
      <section className="ogaalsan-page">
        <div className="container">
          <div className="ogaalsan-page-intro">
            <nav className="ogaalsan-page-intro__crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/courses">Learn</Link>
              <span aria-hidden="true">/</span>
              <span>Training & Workshops</span>
            </nav>
            <span className="ogaalsan-page-intro__eyebrow">Learn</span>
            <h1 className="ogaalsan-page-intro__title">Training & Workshops</h1>
            <p className="ogaalsan-page-intro__desc">
              Browse upcoming trainings and workshops, then register for the one
              you want — online or in-person. For self-paced courses with
              lessons and progress tracking, see{" "}
              <Link href="/courses">Online Courses</Link>.
            </p>
          </div>

          {trainings.length === 0 ? (
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <p>
                  No trainings or workshops are available right now. Please
                  check back soon.
                </p>
              </div>
            </div>
          ) : (
            <div className="row">
              {trainings.map((training) => (
                <div className="col-lg-4 col-md-6" key={training.slug}>
                  <article className="training-card">
                    <Link
                      href={`/training/${training.slug}`}
                      className="training-card__media"
                    >
                      <div className="training-card__thumb">
                        <img
                          src={training.image}
                          alt={training.title}
                          style={{
                            width: "100%",
                            height: "220px",
                            objectFit: "cover",
                          }}
                        />
                        <span className="training-card__level">
                          {training.level}
                        </span>
                      </div>
                    </Link>
                    <div className="training-card__body">
                      <div className="training-card__meta">
                        <span>
                          <i className="far fa-clock" /> {training.duration}
                        </span>
                        <span>
                          <i className="fas fa-laptop" /> Online / Offline
                        </span>
                      </div>
                      <h4 className="training-card__title">
                        <Link href={`/training/${training.slug}`}>
                          {training.title}
                        </Link>
                      </h4>
                      <p className="training-card__summary">
                        {training.summary}
                      </p>
                      <Link
                        href={`/training/${training.slug}`}
                        className="btn btn-three"
                      >
                        View details
                      </Link>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const trainings = await fetchTrainings();
  return { props: { trainings } };
}
