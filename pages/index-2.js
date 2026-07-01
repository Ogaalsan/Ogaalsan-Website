import dynamic from "next/dynamic";
import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home2/Banner"
import Brand from "@/components/sections/home2/Brand"
import Features from "@/components/sections/home2/Features"
import About from "@/components/sections/home2/About"

// Lazy load below-the-fold components for better initial load performance
const Overview = dynamic(() => import("@/components/sections/home2/Overview"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const Project = dynamic(() => import("@/components/sections/home2/Project"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const Counter = dynamic(() => import("@/components/sections/home2/Counter"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const Team = dynamic(() => import("@/components/sections/home2/Team"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const Testimonial = dynamic(() => import("@/components/sections/home2/Testimonial"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const Cta = dynamic(() => import("@/components/sections/home2/Cta"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const Blog = dynamic(() => import("@/components/sections/home2/Blog"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});

export default function Home2() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={3}>
                <Banner />
                <Brand />
                <Features />
                <About />
                <Overview />
                <Project />
                <Counter />
                <Team />
                <Testimonial />
                <Cta />
                <Blog />
            </Layout>
        </>
    )
}