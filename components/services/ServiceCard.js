import Link from "next/link";
import Image from "next/image";

export default function ServiceCard({ service }) {
  const serviceHref = `/services/${service.slug || service.id}`;

  return (
    <div className="col-lg-4 col-md-6 col-sm-10">
      <div className="services-item">
        <div className="services-content">
          <div className="content-top">
            <div className="icon">
              <i className={service.icon} />
            </div>
            <h2 className="title">
              <Link href={serviceHref}>{service.title}</Link>
            </h2>
          </div>
          <div className="services-thumb">
            <Image
              src={service.image}
              alt={service.title}
              width={400}
              height={300}
              loading="lazy"
              style={{ objectFit: "cover", width: "100%", height: "300px" }}
            />
            <Link href={serviceHref} className="btn transparent-btn">
              Our Services
            </Link>
          </div>
          {service.highlights?.length > 0 && (
            <ul className="list-wrap">
              {service.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
