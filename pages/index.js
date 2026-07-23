import dynamic from "next/dynamic";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/sections/home/Banner";
import Features from "@/components/sections/home/Features";
import About from "@/components/sections/home/About";
import Services from "@/components/sections/home/Services";
import { fetchActiveServices } from "@/lib/services";
import { fetchPublishedPosts } from "@/lib/posts";
import { useClientFetch } from "@/hooks/useClientFetch";

const Overview = dynamic(() => import("@/components/sections/home/Overview"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const Choose = dynamic(() => import("@/components/sections/home/Choose"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const Project = dynamic(() => import("@/components/sections/home/Project"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const Cta = dynamic(() => import("@/components/sections/home/Cta"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const FocusAreas = dynamic(() => import("@/components/sections/home/FocusAreas"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const Blog = dynamic(() => import("@/components/sections/home/Blog"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});

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
