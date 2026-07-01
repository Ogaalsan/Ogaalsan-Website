import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: false,
    breakpoints: {
        500: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 3.5,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3.5,
            spaceBetween: 20,
        },
        1500: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
    },
    // If we need pagination
    pagination: {
        el: ".project-swiper-pagination",
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
}

export default function ProjectSlider() {
    return (
        <>
            <Swiper {...swiperOptions}>
                <SwiperSlide>
                    <div className="project-item">
                        <div className="project-thumb">
                            <Link href="/project-details"><img src="/assets/img/project/project_img01.jpg" alt="" /></Link>
                        </div>
                        <div className="project-content">
                            <Link href="project" className="tag">Achievment</Link>
                            <h2 className="title"><Link href="/project-details">based on your Correct situation</Link></h2>
                            <Link href="/project-details" className="link-arrow"><i className="flaticon-right-arrow" /></Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="project-item">
                        <div className="project-thumb">
                            <Link href="/project-details"><img src="/assets/img/project/project_img02.jpg" alt="" /></Link>
                        </div>
                        <div className="project-content">
                            <Link href="project" className="tag">Business Strategy</Link>
                            <h2 className="title"><Link href="/project-details">Best mortgage rates guaranteed.</Link></h2>
                            <Link href="/project-details" className="link-arrow"><i className="flaticon-right-arrow" /></Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="project-item">
                        <div className="project-thumb">
                            <Link href="/project-details"><img src="/assets/img/project/project_img03.jpg" alt="" /></Link>
                        </div>
                        <div className="project-content">
                            <Link href="project" className="tag">Investment</Link>
                            <h2 className="title"><Link href="/project-details">Investment Policy For New Project</Link></h2>
                            <Link href="/project-details" className="link-arrow"><i className="flaticon-right-arrow" /></Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="project-item">
                        <div className="project-thumb">
                            <Link href="/project-details"><img src="/assets/img/project/project_img04.jpg" alt="" /></Link>
                        </div>
                        <div className="project-content">
                            <Link href="project" className="tag">Achievment</Link>
                            <h2 className="title"><Link href="/project-details">based on your Correct situation</Link></h2>
                            <Link href="/project-details" className="link-arrow"><i className="flaticon-right-arrow" /></Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="project-item">
                        <div className="project-thumb">
                            <Link href="/project-details"><img src="/assets/img/project/project_img01.jpg" alt="" /></Link>
                        </div>
                        <div className="project-content">
                            <Link href="project" className="tag">Achievment</Link>
                            <h2 className="title"><Link href="/project-details">based on your Correct situation</Link></h2>
                            <Link href="/project-details" className="link-arrow"><i className="flaticon-right-arrow" /></Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="project-item">
                        <div className="project-thumb">
                            <Link href="/project-details"><img src="/assets/img/project/project_img02.jpg" alt="" /></Link>
                        </div>
                        <div className="project-content">
                            <Link href="project" className="tag">Business Strategy</Link>
                            <h2 className="title"><Link href="/project-details">Best mortgage rates guaranteed.</Link></h2>
                            <Link href="/project-details" className="link-arrow"><i className="flaticon-right-arrow" /></Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="project-item">
                        <div className="project-thumb">
                            <Link href="/project-details"><img src="/assets/img/project/project_img03.jpg" alt="" /></Link>
                        </div>
                        <div className="project-content">
                            <Link href="project" className="tag">Investment</Link>
                            <h2 className="title"><Link href="/project-details">Investment Policy For New Project</Link></h2>
                            <Link href="/project-details" className="link-arrow"><i className="flaticon-right-arrow" /></Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="project-item">
                        <div className="project-thumb">
                            <Link href="/project-details"><img src="/assets/img/project/project_img04.jpg" alt="" /></Link>
                        </div>
                        <div className="project-content">
                            <Link href="project" className="tag">Achievment</Link>
                            <h2 className="title"><Link href="/project-details">based on your Correct situation</Link></h2>
                            <Link href="/project-details" className="link-arrow"><i className="flaticon-right-arrow" /></Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
