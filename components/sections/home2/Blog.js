import Link from "next/link"

export default function Blog() {
    return (
        <>
            <section className="blog-area-three pt-120 pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title-two text-center mb-50 tg-heading-subheading animation-style1">
                                <span className="sub-title tg-element-title">News  Blogs</span>
                                <h2 className="title tg-element-title">Read Our Latest Updates</h2>
                                <p>Ever find yourself staring at your computer screen a good consulting slogan to come to mind? Oftentimes.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="blog-post-item-two">
                                <div className="blog-post-thumb-two">
                                    <Link href="/blog-details"><img src="/assets/img/blog/h3_blog_img01.jpg" alt="" /></Link>
                                    <Link href="/blog" className="tag tag-two">Development</Link>
                                </div>
                                <div className="blog-post-content-two">
                                    <h2 className="title"><Link href="/blog-details">Meet AutoManage, the best AI management tools</Link></h2>
                                    <p>Everything you need to start building area atching presence for your business.</p>
                                    <div className="blog-meta">
                                        <ul className="list-wrap">
                                            <li>
                                                <Link href="/blog-details"><img src="/assets/img/blog/blog_avatar01.png" alt="" />Kat Doven</Link>
                                            </li>
                                            <li><i className="far fa-calendar" />22 Jan, 2023</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="blog-post-item-two">
                                <div className="blog-post-thumb-two">
                                    <Link href="/blog-details"><img src="/assets/img/blog/h3_blog_img02.jpg" alt="" /></Link>
                                    <Link href="/blog" className="tag tag-two">Business</Link>
                                </div>
                                <div className="blog-post-content-two">
                                    <h2 className="title"><Link href="/blog-details">Meet AutoManage, the best AI management tools</Link></h2>
                                    <p>Everything you need to start building area atching presence for your business.</p>
                                    <div className="blog-meta">
                                        <ul className="list-wrap">
                                            <li>
                                                <Link href="/blog-details"><img src="/assets/img/blog/blog_avatar01.png" alt="" />Kat Doven</Link>
                                            </li>
                                            <li><i className="far fa-calendar" />22 Jan, 2023</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="blog-post-item-two">
                                <div className="blog-post-thumb-two">
                                    <Link href="/blog-details"><img src="/assets/img/blog/h3_blog_img03.jpg" alt="" /></Link>
                                    <Link href="/blog" className="tag tag-two">Tax Advisory</Link>
                                </div>
                                <div className="blog-post-content-two">
                                    <h2 className="title"><Link href="/blog-details">Meet AutoManage, the best AI management tools</Link></h2>
                                    <p>Everything you need to start building area atching presence for your business.</p>
                                    <div className="blog-meta">
                                        <ul className="list-wrap">
                                            <li>
                                                <Link href="/blog-details"><img src="/assets/img/blog/blog_avatar01.png" alt="" />Kat Doven</Link>
                                            </li>
                                            <li><i className="far fa-calendar" />22 Jan, 2023</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
