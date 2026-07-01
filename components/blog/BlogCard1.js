import Image from "next/image";
import Link from "next/link";

export default function BlogCard1({ item }) {
  const postHref = `/blog/${item.slug || item.id}`;
  const imageSrc = item.image || item.img;

  return (
    <>
      <div className="col-md-6">
        <div className="blog-post-item-two">
          <div className="blog-post-thumb-two">
            <Link href={postHref}>
              <Image
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: "auto", height: "auto" }}
                src={imageSrc}
                alt={item.title}
              />
            </Link>
            <Link href="/blog" className="tag tag-two">
              {item.category}
            </Link>
          </div>
          <div className="blog-post-content-two">
            <h2 className="title">
              <Link href={postHref}>{item.title}</Link>
            </h2>
            <p>{item.excerpt || "Discover insights from the OgaalSan team."}</p>
            <div className="blog-meta">
              <ul className="list-wrap">
                <li>
                  <Link href={postHref}>
                    <img
                      src={item.authorImg || "/assets/img/ogalsan/image (8).png"}
                      alt={item.author}
                    />
                    {item.author}
                  </Link>
                </li>
                <li>
                  <i className="far fa-calendar" />
                  {item.date}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
