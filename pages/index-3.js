import dynamic from "next/dynamic";
import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home3/Banner"
import Features from "@/components/sections/home3/Features"
import About from "@/components/sections/home3/About"
import Brand from "@/components/sections/home3/Brand"
import Services from "@/components/sections/home3/Services"

// Lazy load below-the-fold components for better initial load performance
const Choose = dynamic(() => import("@/components/sections/home3/Choose"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const Cta = dynamic(() => import("@/components/sections/home3/Cta"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const Estimate = dynamic(() => import("@/components/sections/home3/Estimate"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const Team = dynamic(() => import("@/components/sections/home3/Team"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const Testimonial = dynamic(() => import("@/components/sections/home3/Testimonial"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const Pricing = dynamic(() => import("@/components/sections/home3/Pricing"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const Blog = dynamic(() => import("@/components/sections/home3/Blog"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});

export default function Home3() {
    return (
        <>
            <Layout headerStyle={3} footerStyle={2}>
                <Banner />
                <Features />
                <About />
                <Brand />
                <Services />
                <Choose />
                <Cta />
                <Estimate />
                <Team />
                <Testimonial />
                <Pricing />
                <Blog />
            </Layout>
        </>
    )
}