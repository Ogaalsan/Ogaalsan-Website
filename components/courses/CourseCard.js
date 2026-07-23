import Link from "next/link";
import Image from "next/image";

export default function CourseCard({ course }) {
  const hasDiscount =
    course.discountPrice != null &&
    Number(course.discountPrice) > 0 &&
    Number(course.discountPrice) < Number(course.price);
  const courseHref = `/course/${course.slug || course.id}`;

  return (
    <div className="col-lg-4 col-md-6 col-sm-10">
      <article className="course-card">
        <div className="course-card__media">
          <Link href={courseHref} className="course-card__image-link">
            <Image
              src={course.image}
              alt={course.title}
              width={420}
              height={240}
              loading="lazy"
              className="course-card__image"
            />
          </Link>
          <span className="course-card__badge">{course.category}</span>
          {course.level && (
            <span className="course-card__level">{course.level}</span>
          )}
        </div>

        <div className="course-card__body">
          <div className="course-card__meta">
            {course.duration && (
              <span>
                <i className="far fa-clock" />
                {course.duration}
              </span>
            )}
            <span>
              <i className="fas fa-play-circle" />
              {course.lessonCount} lessons
            </span>
          </div>

          <h3 className="course-card__title">
            <Link href={courseHref}>{course.title}</Link>
          </h3>

          <p className="course-card__description">
            {course.description?.length > 130
              ? `${course.description.slice(0, 130)}...`
              : course.description}
          </p>

          <div className="course-card__footer">
            <div className="course-card__instructor">
              <i className="fas fa-user-graduate" />
              <span>{course.instructor}</span>
            </div>

            <div className="course-card__actions">
              {course.price > 0 ? (
                <div className="course-card__price">
                  {hasDiscount && (
                    <span className="course-card__price-old">
                      ${course.price.toFixed(2)}
                    </span>
                  )}
                  <span className="course-card__price-current">
                    $
                    {(hasDiscount ? course.discountPrice : course.price).toFixed(
                      2
                    )}
                  </span>
                </div>
              ) : (
                <span className="course-card__free">Free</span>
              )}

              <Link href={courseHref} className="course-card__btn">
                View Course
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
