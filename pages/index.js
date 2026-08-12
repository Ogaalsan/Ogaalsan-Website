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
import { fetchActiveServices } from "@/lib/services";
import { fetchPublishedPosts } from "@/lib/posts";
import { useClientFetch } from "@/hooks/useClientFetch";

export default function Home() {
  const { data: services = [], loading: servicesLoading } = useClientFetch(
    fetchActiveServices,
    []
  );
  const { data: posts = [], loading: postsLoading } = useClientFetch(
    fetchPublishedPosts,
    []
  );

  return (
    <Layout>
      <Banner />
      <Features />
      <About />
      <Services services={services} loading={servicesLoading} />
      <Overview />
      <Choose />
      <Project />
      <Cta />
      <FocusAreas />
      <Blog posts={posts} loading={postsLoading} />
    </Layout>
  );
}
