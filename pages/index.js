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
      <Courses courses={courses} loading={coursesLoading} />

      <Blog posts={posts} loading={postsLoading} />
    </Layout>
  );
}
