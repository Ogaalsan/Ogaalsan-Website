import Link from "next/link";
import Image from "next/image";

export default function ServiceCard({ service }) {
  const serviceHref = `/services/${service.slug || service.id}`;

  return (
    <article className="ogaalsan-service-card">
      <Link href={serviceHref} className="ogaalsan-service-card__media">
        <Image
          src={service.image}
          alt={service.title}
          width={420}
          height={240}
          loading="lazy"
        />
      </Link>
      <div className="ogaalsan-service-card__body">
        <h3 className="ogaalsan-service-card__title">
          <Link href={serviceHref}>{service.title}</Link>
        </h3>
        {service.shortDescription || service.summary ? (
          <p className="ogaalsan-service-card__desc">
            {service.shortDescription || service.summary}
          </p>
        ) : null}
        <Link href={serviceHref} className="ogaalsan-services__link">
          View service
          <i className="fas fa-arrow-right" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
