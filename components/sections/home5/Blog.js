import Link from "next/link"

export default function Blog() {
    return (
        <>
            <section className="blog-post-area">
                <div className="blog-bg" data-background="/assets/img/bg/blog_bg.jpg" />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="section-title text-center mb-60 tg-heading-subheading animation-style2">
                                <span className="sub-title tg-element-title">News  Blogs</span>
                                <h2 className="title tg-element-title">Read Our Latest Updates</h2>
                                <p>Ever find yourself staring at your computer screen a good consulting <br /> slogan to come to mind? Oftentimes.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="blog-post-item">
                                <div className="blog-post-thumb">
                                    <Link href="/blog-details"><img src="/assets/img/blog/blog_img01.jpg" alt="" /></Link>
                                    <span className="date"><strong>25</strong>Jan</span>
                                </div>
                                <div className="blog-post-content">
                                    <Link href="/blog" className="tag">Development</Link>
                                    <h2 className="title"><Link href="/blog-details">Meet AutoManage, the best AI management tools</Link></h2>
                                    <p>Everything you need to start building area atching presence for your business.</p>
                                    <Link href="/blog-details" className="link-btn">Read More <i className="flaticon-right-arrow" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="blog-post-item">
                                <div className="blog-post-thumb">
                                    <Link href="/blog-details"><img src="/assets/img/blog/blog_img02.jpg" alt="" /></Link>
                                    <span className="date"><strong>25</strong>Jan</span>
                                </div>
                                <div className="blog-post-content">
                                    <Link href="/blog" className="tag">Development</Link>
                                    <h2 className="title"><Link href="/blog-details">Meet AutoManage, the best AI management tools</Link></h2>
                                    <p>Everything you need to start building area atching presence for your business.</p>
                                    <Link href="/blog-details" className="link-btn">Read More <i className="flaticon-right-arrow" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="blog-post-item">
                                <div className="blog-post-thumb">
                                    <Link href="/blog-details"><img src="/assets/img/blog/blog_img03.jpg" alt="" /></Link>
                                    <span className="date"><strong>25</strong>Jan</span>
                                </div>
                                <div className="blog-post-content">
                                    <Link href="/blog" className="tag">Development</Link>
                                    <h2 className="title"><Link href="/blog-details">Meet AutoManage, the best AI management tools</Link></h2>
                                    <p>Everything you need to start building area atching presence for your business.</p>
                                    <Link href="/blog-details" className="link-btn">Read More <i className="flaticon-right-arrow" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
