import { useRef } from "react";
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const focusAreas = [
  "ICT Solutions",
  "Business Development",
  "Training & Capacity Building",
  "Research & Consultancy",
  "Legal Advisory",
];

export default function FocusAreas() {
  const sliderRef = useRef(null);

  return (
    <section className="brand-area-two ogaalsan-focus pt-120 pb-120">
      <div
        className="ogaalsan-focus__map"
        aria-hidden="true"
        style={{
          backgroundImage: "url(/assets/img/bg/h2_testimonial_bg.jpg)",
        }}
      />
      <div className="choose-shape ogaalsan-focus__shape" aria-hidden="true">
        <img src="/assets/img/images/choose_shape.png" alt="" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title-two white-title text-center mb-60 tg-heading-subheading animation-style3">
              <span className="sub-title">What We Do</span>
              <h2 className="title tg-element-title">Our Focus Areas</h2>
            </div>
          </div>
        </div>
        <div className="brand-item-wrap">
          <Slider
            ref={sliderRef}
            {...settings}
            className="row brand-active-two"
          >
            {focusAreas.map((area) => (
              <div key={area} className="col-lg-12">
                <div className="brand-item-two" style={{ padding: "0 10px" }}>
                  <div className="focus-item ogaalsan-focus__card">
                    <h4>{area}</h4>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
