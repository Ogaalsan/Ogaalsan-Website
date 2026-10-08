import Layout from "@/components/layout/Layout";
import CourseCard from "@/components/courses/CourseCard";
import LearnerPortalBanner from "@/components/courses/LearnerPortalBanner";
import ContentLoader from "@/components/common/ContentLoader";
import { fetchPublishedCourses } from "@/lib/courses";
import { fetchMyCourses } from "@/lib/learner";
import { useAuth } from "@/context/AuthContext";
import { useClientFetch } from "@/hooks/useClientFetch";

export default function Courses() {
  const { isAuthenticated, loading: authLoading } = useAuth();
  const { data: courses = [], loading } = useClientFetch(
    fetchPublishedCourses,
    []
  );
  const { data: mine } = useClientFetch(
    () => fetchMyCourses(),
    [],
    {
      enabled: isAuthenticated && !authLoading,
      initialData: { courses: [] },
      cacheKey: "catalog-my-courses",
    }
  );

  const enrollmentsByCourseId = new Map(
    (mine?.courses || []).map((item) => [item.course?.id, item])
  );

  return (
    <Layout breadcrumbTitle="Our Courses">
      <section
        className="services-area-five inner-services-bg"
        data-background="/assets/img/bg/inner_services_bg.jpg"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="section-title-two text-center mb-50">
                <h2 className="title">Training &amp; Capacity Building Programmes</h2>
                <p>
                  Practical, hands-on training in entrepreneurship,
                  professional development, and ICT skills — building the
                  human capital organizations need for sustainable growth.
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mb-40">
            <div className="col-xl-10">
              <LearnerPortalBanner compact />
            </div>
          </div>

          {loading ? (
            <ContentLoader message="Loading courses..." />
          ) : courses.length > 0 ? (
            <div className="row justify-content-center g-4">
              {courses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  enrollment={enrollmentsByCourseId.get(course.id) || null}
                />
              ))}
            </div>
          ) : (
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="courses-empty-state">
                  <h3>No courses published yet</h3>
                  <p>
                    Register courses in the Ogaalsan admin panel and set their
                    status to Published to display them here.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

