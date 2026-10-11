import Layout from "@/components/layout/Layout";
import Banner from "@/components/sections/home/Banner";
import Features from "@/components/sections/home/Features";
import About from "@/components/sections/home/About";
import Services from "@/components/sections/home/Services";
import Overview from "@/components/sections/home/Overview";
import Choose from "@/components/sections/home/Choose";
import Project from "@/components/sections/home/Project";
import Cta from "@/components/sections/home/Cta";
import FocusAreas from "@/components/sections/home/FocusAreas";
import Blog from "@/components/sections/home/Blog";
import Courses from "@/components/sections/home/Courses";
import LearnerPortalBanner from "@/components/courses/LearnerPortalBanner";
import { fetchActiveServices } from "@/lib/services";
import { fetchPublishedPosts } from "@/lib/posts";
import { fetchPublishedCourses } from "@/lib/courses";
import { useClientFetch } from "@/hooks/useClientFetch";

export default function Home() {
  const { data: services = [], loading: servicesLoading } = useClientFetch(
    fetchActiveServices,
    []
  );
  const { data: courses = [], loading: coursesLoading } = useClientFetch(
    fetchPublishedCourses,
    []
  );
  const { data: posts = [], loading: postsLoading } = useClientFetch(
    fetchPublishedPosts,
    []
  );

  return (
    <Layout>
      {/* Consultancy / digital side */}
      <Banner />
      <Features />
      <About />
      <Services services={services} loading={servicesLoading} />
      <Overview />
      <Choose />
      <Project />
      <FocusAreas />
      <Cta />

      {/* Learn / e-learning side */}
      <section className="ogaalsan-learn-band">
        <div className="container">
          <div className="ogaalsan-learn-band__intro">
            <span className="sub-title">Learn</span>
            <h2 className="title">Build skills in the learning portal</h2>
            <p>
              Separate from our consultancy services — enroll in courses, join
              open programs, and track your progress as a learner.
            </p>
          </div>
          <LearnerPortalBanner />
        </div>
      </section>
      <Courses courses={courses} loading={coursesLoading} />

      <Blog posts={posts} loading={postsLoading} />
    </Layout>
  );
}
