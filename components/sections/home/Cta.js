import Link from "next/link";
import { useOrganization } from "@/context/OrganizationContext";

export default function Cta() {
  const { phoneLabel, phoneHref } = useOrganization();

  return (
    <section className="cta-area">
      <div className="container">
        <div className="cta-inner-wrap ogaalsan-cta">
          <div
            className="ogaalsan-cta__map"
            aria-hidden="true"
            style={{
              backgroundImage: "url(/assets/img/bg/cta_bg.jpg)",
            }}
          />
          <div className="choose-shape ogaalsan-cta__shape" aria-hidden="true">
            <img src="/assets/img/images/choose_shape.png" alt="" />
          </div>
          <div className="row align-items-center ogaalsan-cta__row">
            <div className="col-lg-9">
              <div className="cta-content">
                <div className="cta-info-wrap">
                  <div className="icon">
                    <i className="flaticon-phone-call" />
                  </div>
                  <div className="content">
                    <span>Call For More Info</span>
                    <Link href={phoneHref}>{phoneLabel}</Link>
                  </div>
                </div>
                <h2 className="title">
                  Let&apos;s Discuss Your Business, ICT, Research &amp; Legal Needs
                </h2>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="cta-btn text-end">
                <Link href="/contact" className="btn">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
