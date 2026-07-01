import dynamic from "next/dynamic";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/sections/home1/Banner";
import Features from "@/components/sections/home1/Features";
import About from "@/components/sections/home1/About";
import Services from "@/components/sections/home1/Services";
import { fetchActiveServices } from "@/util/servicesApi";
import { fetchPublishedPosts } from "@/util/postsApi";
import { useClientFetch } from "@/util/useClientFetch";

const Overview = dynamic(() => import("@/components/sections/home1/Overview"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const Choose = dynamic(() => import("@/components/sections/home1/Choose"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const Project = dynamic(() => import("@/components/sections/home1/Project"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const Cta = dynamic(() => import("@/components/sections/home1/Cta"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const Testimonial = dynamic(() => import("@/components/sections/home1/Testimonial"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const Blog = dynamic(() => import("@/components/sections/home1/Blog"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});

export default function Home1() {
  const { data: services = [], loading: servicesLoading } = useClientFetch(
    fetchActiveServices,
    []
  );
  const { data: posts = [], loading: postsLoading } = useClientFetch(
    fetchPublishedPosts,
    []
  );

  return (
    <Layout headerStyle={1} footerStyle={2}>
      <Banner />
      <Features />
      <About />
      <Services services={services} loading={servicesLoading} />
      <Overview />
      <Choose />
      <Project />
      <Cta />
      <Testimonial />
      <Blog posts={posts} loading={postsLoading} />
    </Layout>
  );
}
