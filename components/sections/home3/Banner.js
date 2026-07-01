import Link from "next/link"

export default function Banner() {
    return (
        <>
            <section className="banner-area-four banner-bg-four" data-background="/assets/img/banner/h4_banner_bg.jpg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-6 col-md-10 order-0 order-lg-2">
                            <div className="banner-img-four text-end">
                                <img src="/assets/img/banner/h4_banner_img.png" alt="" data-aos="fade-left" data-aos-delay={400} />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="banner-content-four">
                                <span className="sub-title" data-aos="fade-up" data-aos-delay={0}>Insurance Agency</span>
                                <h2 className="title" data-aos="fade-up" data-aos-delay={200}>Enjoy Life With Safety Insurance</h2>
                                <p data-aos="fade-up" data-aos-delay={400}>Agilos helps you to convert your data into rategic asset emand get top-notch business insights.</p>
                                <Link href="/services" className="btn btn-three" data-aos="fade-up" data-aos-delay={600}>Discover More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-shape-wrap-four">
                    <img src="/assets/img/banner/h4_banner_shape01.png" alt="" />
                    <img src="/assets/img/banner/h4_banner_shape02.png" alt="" data-aos="zoom-in" data-aos-delay={600} />
                    <img src="/assets/img/banner/h4_banner_shape03.png" alt="" data-aos="zoom-in-up" data-aos-delay={800} />
                </div>
            </section>
        </>
    )
}
