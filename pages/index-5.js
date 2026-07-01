import dynamic from "next/dynamic";
import Layout from "@/components/layout/Layout"
import Slider from "@/components/sections/home5/Slider"
import About from "@/components/sections/home5/About"
import Features from "@/components/sections/home5/Features"
import AboutTwo from "@/components/sections/home5/AboutTwo"
import Services from "@/components/sections/home5/Services"

// Lazy load below-the-fold components for better initial load performance
const Counter = dynamic(() => import("@/components/sections/home5/Counter"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const Project = dynamic(() => import("@/components/sections/home5/Project"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const Faq = dynamic(() => import("@/components/sections/home5/Faq"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const Request = dynamic(() => import("@/components/sections/home5/Request"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const Team = dynamic(() => import("@/components/sections/home5/Team"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const Testimonial = dynamic(() => import("@/components/sections/home5/Testimonial"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const Pricing = dynamic(() => import("@/components/sections/home5/Pricing"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const Contact = dynamic(() => import("@/components/sections/home5/Contact"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const Blog = dynamic(() => import("@/components/sections/home5/Blog"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const Brand = dynamic(() => import("@/components/sections/home5/Brand"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});

export default function Home5() {
    return (
        <>
            <Layout headerStyle={5} footerStyle={2}>
                <Slider />
                <About />
                <Features />
                <AboutTwo />
                <Services />
                <Counter />
                <Project />
                <Faq />
                <Request />
                <Team />
                <Testimonial />
                <Pricing />
                <Contact />
                <Blog />
                <Brand />
            </Layout>
        </>
    )
}