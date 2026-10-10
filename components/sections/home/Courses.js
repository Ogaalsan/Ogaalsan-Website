import Link from "next/link";
import CourseCard from "@/components/courses/CourseCard";
import ContentLoader from "@/components/common/ContentLoader";

export default function Courses({ courses = [], loading = false }) {
  return (
    <section className="courses-area ogaalsan-home-courses pt-100 pb-100">
      <div className="container">
        <div className="row align-items-end mb-50">
          <div className="col-lg-7 col-md-8">
            <div className="section-title-two mb-0">
              <span className="sub-title">Training Programmes</span>
              <h2 className="title">Courses from OgaalSan</h2>
              <p className="mb-0">
                Live catalogue from the admin — enroll in published online and
                in-person programmes.
              </p>
            </div>
          </div>
          <div className="col-lg-5 col-md-4 text-md-end mt-3 mt-md-0">
            <Link href="/courses" className="btn btn-three">
              View All Courses
            </Link>
          </div>
        </div>

        {loading ? (
          <ContentLoader message="Loading courses..." />
        ) : courses.length > 0 ? (
          <div className="row justify-content-center g-4">
            {courses.slice(0, 3).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="courses-empty-state">
            <h3>No courses published yet</h3>
            <p>
              Publish a course in the Ogaalsan admin panel to show it here.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
