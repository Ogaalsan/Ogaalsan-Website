import { useState } from "react"

export default function Estimate() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <section className="estimate-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="estimate-content">
                                <div className="section-title-two mb-30 tg-heading-subheading animation-style2">
                                    <span className="sub-title tg-element-title">GET A FREE ESTIMATE</span>
                                    <h2 className="title tg-element-title">Get an insurance quote From Our Expertise</h2>
                                </div>
                                <div className="estimate-tab-wrap">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" onClick={() => handleOnClick(1)}>
                                            <button className={activeIndex == 1 ? "nav-link active" : "nav-link"}>Home</button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(2)}>
                                            <button className={activeIndex == 2 ? "nav-link active" : "nav-link"}>Vehicles</button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(3)}>
                                            <button className={activeIndex == 3 ? "nav-link active" : "nav-link"}>Health</button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(4)}>
                                            <button className={activeIndex == 4 ? "nav-link active" : "nav-link"}>Life</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className={activeIndex == 1 ? "tab-pane fade show active" : "tab-pane fade"}>
                                            <div className="estimate-form-wrap">
                                                <form action="#">
                                                    <div className="form-grp">
                                                        <input type="text" placeholder="Full Name" />
                                                    </div>
                                                    <div className="form-grp">
                                                        <input type="email" placeholder="E-mail" />
                                                    </div>
                                                    <div className="form-grp">
                                                        <input type="number" placeholder="Phone" />
                                                    </div>
                                                    <div className="range-slider-wrap">
                                                        <div className="content-top">
                                                            <p>Limits of balance:</p>
                                                            <span>$<strong id="rangeValue">400000</strong></span>
                                                        </div>
                                                        <input className="range" type="range" min={1} max={100} />

                                                    </div>
                                                    <button className="btn btn-three" type="submit">Get a Quote Now</button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className={activeIndex == 2 ? "tab-pane fade show active" : "tab-pane fade"}>
                                            <div className="estimate-form-wrap">
                                                <form action="#">
                                                    <div className="form-grp">
                                                        <input type="text" placeholder="Full Name" />
                                                    </div>
                                                    <div className="form-grp">
                                                        <input type="email" placeholder="E-mail" />
                                                    </div>
                                                    <div className="form-grp">
                                                        <input type="number" placeholder="Phone" />
                                                    </div>
                                                    <div className="range-slider-wrap">
                                                        <div className="content-top">
                                                            <p>Limits of balance:</p>
                                                            <span>$<strong id="rangeValueTwo">400000</strong></span>
                                                        </div>
                                                        <input className="range" type="range" min={1} max={100} />
                                                    </div>
                                                    <button className="btn btn-three" type="submit">Get a Quote Now</button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className={activeIndex == 3 ? "tab-pane fade show active" : "tab-pane fade"}>
                                            <div className="estimate-form-wrap">
                                                <form action="#">
                                                    <div className="form-grp">
                                                        <input type="text" placeholder="Full Name" />
                                                    </div>
                                                    <div className="form-grp">
                                                        <input type="email" placeholder="E-mail" />
                                                    </div>
                                                    <div className="form-grp">
                                                        <input type="number" placeholder="Phone" />
                                                    </div>
                                                    <div className="range-slider-wrap">
                                                        <div className="content-top">
                                                            <p>Limits of balance:</p>
                                                            <span>$<strong id="rangeValueThree">400000</strong></span>
                                                        </div>
                                                        <input className="range" type="range" min={1} max={100} />
                                                    </div>
                                                    <button className="btn btn-three" type="submit">Get a Quote Now</button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className={activeIndex == 4 ? "tab-pane fade show active" : "tab-pane fade"}>
                                            <div className="estimate-form-wrap">
                                                <form action="#">
                                                    <div className="form-grp">
                                                        <input type="text" placeholder="Full Name" />
                                                    </div>
                                                    <div className="form-grp">
                                                        <input type="email" placeholder="E-mail" />
                                                    </div>
                                                    <div className="form-grp">
                                                        <input type="number" placeholder="Phone" />
                                                    </div>
                                                    <div className="range-slider-wrap">
                                                        <div className="content-top">
                                                            <p>Limits of balance:</p>
                                                            <span>$<strong id="rangeValueFour">400000</strong></span>
                                                        </div>
                                                        <input className="range" type="range" min={1} max={100} />
                                                    </div>
                                                    <button className="btn btn-three" type="submit">Get a Quote Now</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="estimate-img text-center">
                                <img src="/assets/img/images/estimate_img.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="estimate-shape">
                    <img src="/assets/img/services/h4_services_shape.png" alt="" data-aos="fade-left" data-aos-delay={200} />
                </div>
            </section>
        </>
    )
}
