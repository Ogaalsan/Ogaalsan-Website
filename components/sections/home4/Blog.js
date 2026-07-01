import Link from "next/link"

export default function Blog() {
    return (
        <>
            <section className="blog-area-five pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title section-title-three text-center mb-60 tg-heading-subheading animation-style1">
                                <span className="sub-title tg-element-title">News  Blogs</span>
                                <h2 className="title tg-element-title">Read Our Latest Updates</h2>
                                <p>Ever find yourself staring at your computer screen a good consulting slogan to come to mind? Oftentimes.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="blog-post-item-four">
                                <div className="blog-post-thumb-four">
                                    <Link href="/blog-details"><img src="/assets/img/blog/h4_blog_img01.jpg" alt="" /></Link>
                                </div>
                                <div className="blog-post-content-four">
                                    <Link href="/blog" className="tag">car Insurance</Link>
                                    <div className="blog-meta-two">
                                        <ul className="list-wrap">
                                            <li><i className="far fa-calendar" />22 Jan, 2023</li>
                                            <li><i className="far fa-user" />by <Link href="/blog-details">Admin</Link></li>
                                        </ul>
                                    </div>
                                    <h4 className="title"><Link href="/blog-details">Meet Auto Manage, the best AI management tools</Link></h4>
                                    <Link href="/blog-details" className="link-btn">Read More <i className="flaticon-right-arrow" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="blog-post-item-four">
                                <div className="blog-post-thumb-four">
                                    <Link href="/blog-details"><img src="/assets/img/blog/h4_blog_img02.jpg" alt="" /></Link>
                                </div>
                                <div className="blog-post-content-four">
                                    <Link href="/blog" className="tag">Home Insurance</Link>
                                    <div className="blog-meta-two">
                                        <ul className="list-wrap">
                                            <li><i className="far fa-calendar" />22 Jan, 2023</li>
                                            <li><i className="far fa-user" />by <Link href="/blog-details">Admin</Link></li>
                                        </ul>
                                    </div>
                                    <h4 className="title"><Link href="/blog-details">Meet Auto Manage, the best AI management tools</Link></h4>
                                    <Link href="/blog-details" className="link-btn">Read More <i className="flaticon-right-arrow" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="blog-post-item-four">
                                <div className="blog-post-thumb-four">
                                    <Link href="/blog-details"><img src="/assets/img/blog/h4_blog_img03.jpg" alt="" /></Link>
                                </div>
                                <div className="blog-post-content-four">
                                    <Link href="/blog" className="tag">Family Insurance</Link>
                                    <div className="blog-meta-two">
                                        <ul className="list-wrap">
                                            <li><i className="far fa-calendar" />22 Jan, 2023</li>
                                            <li><i className="far fa-user" />by <Link href="/blog-details">Admin</Link></li>
                                        </ul>
                                    </div>
                                    <h4 className="title"><Link href="/blog-details">Meet Auto Manage, the best AI management tools</Link></h4>
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
