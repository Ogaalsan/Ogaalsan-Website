import dynamic from "next/dynamic";
import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home4/Banner"
import Brand from "@/components/sections/home4/Brand"
import Services from "@/components/sections/home4/Services"
import About from "@/components/sections/home4/About"

// Lazy load below-the-fold components for better initial load performance
const Counter = dynamic(() => import("@/components/sections/home4/Counter"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const Team = dynamic(() => import("@/components/sections/home4/Team"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const Project = dynamic(() => import("@/components/sections/home4/Project"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const Cta = dynamic(() => import("@/components/sections/home4/Cta"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const Testimonial = dynamic(() => import("@/components/sections/home4/Testimonial"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const Blog = dynamic(() => import("@/components/sections/home4/Blog"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});
const Request = dynamic(() => import("@/components/sections/home4/Request"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});

export default function Home4() {
    return (
        <>
            <Layout headerStyle={4} footerStyle={2}>
                <Banner />
                <Brand />
                <Services />
                <About />
                <Counter />
                <Team />
                <Project />
                <Cta />
                <Testimonial />
                <Blog />
                <Request />
            </Layout>
        </>
    )
}