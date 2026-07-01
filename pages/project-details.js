import VideoPopup from "@/components/elements/PopupVideo"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Image from "next/image"

export default function ProjectDetails() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Portfolio Details">
                <section className="project-details-area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="project-details-wrap">
                                    <div className="row">
                                        <div className="col-71">
                                            <div className="project-details-thumb">
                                                <Image src="/assets/img/project/project_details01.jpg" alt="" width={800} height={600} loading="lazy" />
                                            </div>
                                        </div>
                                        <div className="col-29">
                                            <div className="project-details-info">
                                                <h4 className="title">Project Information</h4>
                                                <ul className="list-wrap">
                                                    <li><span>Client:</span>Rebeca</li>
                                                    <li><span>Date:</span>17 March, 2023</li>
                                                    <li><span>Category:</span>Modern</li>
                                                    <li><span>Author:</span>Mark Willy</li>
                                                    <li><span>Place:</span>Paris</li>
                                                    <li className="social">
                                                        <span>Share:</span>
                                                        <ul className="list-wrap">
                                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                            <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="project-details-content">
                                        <h2 className="title">Business Planing  Solution</h2>
                                        <p>when an unknown printer took ar galley offer type year anddey scrambled  make type aewer specimen book bethas survived not only five when anner year unknown printer.eed a little help from our friends from time to time. Although we offer the one-stop convenience.when an unknown printer took ar galley  type year anddey scrambled  make type aewer specimen book bethas survived.</p>
                                        <p>eed a little help from our friends from time to time. Although we offer the one-stop convenience of annery integrated range of legal, financial services under one roof, there are occasions when our clients areaneed specia- list advice beyond the scope of our own expertise. That’s why we’ve developed close working relationships with a number of strategic partner.</p>
                                        <div className="pd-optimized-wrap">
                                            <h3 className="title-two">Speed Optimized</h3>
                                            <p>when an unknown printer took a galley of type and scrambled it to make a type specimen bookhas a not only five centuries, but also the leap into electronic typesetting, remaining essentially unchan galley of type and scrambled it to make a type specimen book.</p>
                                        </div>
                                        <div className="pd-inner-wrap">
                                            <div className="row align-items-center">
                                                <div className="col-41">
                                                    <div className="content">
                                                        <h3 className="title-two">Raise capital faster  negotiate on your own terms</h3>
                                                        <p className="info-one">when an unknown printer took a galley offer typey anddey scrambled make a type specimen bookhas survived not only five centuries but also.</p>
                                                        <ul className="list-wrap">
                                                            <li><Image src="/assets/img/icons/check_icon.svg" alt="" width={20} height={20} loading="lazy" />100% Better results</li>
                                                            <li><Image src="/assets/img/icons/check_icon.svg" alt="" width={20} height={20} loading="lazy" />Valuable Ideas</li>
                                                            <li><Image src="/assets/img/icons/check_icon.svg" alt="" width={20} height={20} loading="lazy" />Budget Friendly Theme</li>
                                                            <li><Image src="/assets/img/icons/check_icon.svg" alt="" width={20} height={20} loading="lazy" />Happy Customers</li>
                                                        </ul>
                                                        <p className="info-two">when an unknown printer took a galley of type and  aweratr scrambled it to make a type specimen bookhas a not only five centuries, but also the leap into electronic typesetting, remaining essentially unchan galley of type and scrambled it to make a type specimen book.</p>
                                                    </div>
                                                </div>
                                                <div className="col-59">
                                                    <div className="thumb">
                                                        <Image src="/assets/img/project/project_details02.jpg" alt="" width={700} height={500} loading="lazy" />
                                                        <VideoPopup style={3} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}