import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { fetchTrainings } from "@/util/trainingsApi";

export default function TrainingList({ trainings }) {
  return (
    <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Training">
      <section className="blog-area pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-50">
                <span className="sub-title">Grow Your Skills</span>
                <h2 className="title">Our Trainings</h2>
                <p>
                  Choose a training below and register to join. Each program is
                  available online or in-person (offline).
                </p>
              </div>
            </div>
          </div>

          {trainings.length === 0 ? (
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <p>No trainings are available right now. Please check back soon.</p>
              </div>
            </div>
          ) : (
            <div className="row">
              {trainings.map((training) => (
                <div className="col-lg-4 col-md-6" key={training.slug}>
                  <div className="training-card">
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
                    <div className="training-card__body">
                      <div className="training-card__meta">
                        <span>
                          <i className="far fa-clock" /> {training.duration}
                        </span>
                        <span>
                          <i className="fas fa-laptop" /> Online / Offline
                        </span>
                      </div>
                      <h4 className="training-card__title">{training.title}</h4>
                      <p className="training-card__summary">
                        {training.summary}
                      </p>
                      <Link
                        href={`/training/${training.slug}`}
                        className="btn btn-three"
                      >
                        Register Now
                      </Link>
                    </div>
                  </div>
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
