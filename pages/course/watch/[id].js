import Layout from "@/components/layout/Layout";
import ContentLoader from "@/components/common/ContentLoader";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  extractYouTubeId,
  fetchPublishedCourse,
} from "@/util/coursesApi";
import { useClientFetch } from "@/util/useClientFetch";

export default function CourseWatch() {
  const router = useRouter();
  const identifier = router.query.id;
  const ready = router.isReady && Boolean(identifier);
  const [activeLessonIndex, setActiveLessonIndex] = useState(0);

  const { data: course, loading } = useClientFetch(
    () => fetchPublishedCourse(identifier),
    [identifier],
    { enabled: ready, initialData: null }
  );

  if (!ready || loading) {
    return (
      <Layout headerStyle={1} footerStyle={2}>
        <ContentLoader message="Loading course..." />
      </Layout>
    );
  }

  if (!course) {
    return (
      <Layout headerStyle={1} footerStyle={2}>
        <div className="container pt-120 pb-120 text-center">
          <h2>Course not found.</h2>
          <Link href="/courses" className="btn mt-30">
            Back to Courses
          </Link>
        </div>
      </Layout>
    );
  }

  const lessons = course.lessons?.length
    ? course.lessons
    : (course.syllabus || []).map((title, index) => ({
        id: index,
        title,
        video_url: course.videoId,
      }));

  const activeLesson = lessons[activeLessonIndex] || lessons[0];
  const activeVideo =
    extractYouTubeId(activeLesson?.video_url) || course.videoId;

  return (
    <Layout headerStyle={1} footerStyle={2} breadcrumbTitle={course.title}>
      <section className="course-watch-area pt-60 pb-120">
        <div className="container-fluid" style={{ maxWidth: "1600px" }}>
          <div className="row">
            <div className="col-lg-8 mb-40">
              <div
                className="video-player-container"
                style={{
                  backgroundColor: "#000",
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
                }}
              >
                {activeVideo ? (
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${activeVideo}?rel=0&modestbranding=1&autoplay=0`}
                      title="Course Video Player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                ) : (
                  <div
                    style={{
                      minHeight: "420px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      padding: "40px",
                      textAlign: "center",
                    }}
                  >
                    <div>
                      <i
                        className="fas fa-video-slash"
                        style={{ fontSize: "42px", marginBottom: "16px" }}
                      />
                      <p style={{ margin: 0 }}>
                        Video content for this lesson will be available soon.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="course-info mt-40">
                <span
                  style={{
                    backgroundColor: "rgba(63, 169, 245, 0.1)",
                    color: "#3FA9F5",
                    padding: "5px 15px",
                    borderRadius: "20px",
                    fontSize: "14px",
                    fontWeight: "600",
                    marginBottom: "15px",
                    display: "inline-block",
                  }}
                >
                  {course.category}
                </span>
                <h2
                  style={{
                    color: "#22428F",
                    fontWeight: "700",
                    marginBottom: "20px",
                  }}
                >
                  {activeLesson?.title || course.title}
                </h2>
                <h4 style={{ color: "#22428F", marginBottom: "15px" }}>
                  About this course
                </h4>
                <p
                  style={{
                    color: "#334770",
                    lineHeight: "1.8",
                    fontSize: "16px",
                  }}
                >
                  {course.description}
                </p>

                <div
                  className="mt-30 pt-30"
                  style={{ borderTop: "1px solid #eef2f6" }}
                >
                  <div className="d-flex align-items-center gap-3">
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        backgroundColor: "#eef2f6",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <i
                        className="fas fa-user-tie"
                        style={{ color: "#3FA9F5", fontSize: "20px" }}
                      />
                    </div>
                    <div>
                      <h5 style={{ margin: 0, color: "#22428F" }}>
                        {course.instructor}
                      </h5>
                      <span style={{ fontSize: "14px", color: "#334770" }}>
                        Instructor
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div
                className="course-content-sidebar"
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid #eef2f6",
                  borderRadius: "10px",
                  boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.05)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    padding: "20px 25px",
                    borderBottom: "1px solid #eef2f6",
                    backgroundColor: "#f9fbff",
                  }}
                >
                  <h4 style={{ margin: 0, color: "#22428F", fontSize: "20px" }}>
                    Course Content
                  </h4>
                  <span style={{ fontSize: "14px", color: "#334770" }}>
                    {lessons.length} lessons • {course.duration}
                  </span>
                </div>

                <div
                  className="syllabus-list"
                  style={{ maxHeight: "700px", overflowY: "auto" }}
                >
                  {lessons.map((lesson, index) => (
                    <div
                      key={lesson.id || index}
                      onClick={() => setActiveLessonIndex(index)}
                      style={{
                        padding: "20px 25px",
                        borderBottom: "1px solid #eef2f6",
                        cursor: "pointer",
                        backgroundColor:
                          activeLessonIndex === index
                            ? "rgba(63, 169, 245, 0.05)"
                            : "#fff",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "15px",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <div
                        style={{
                          marginTop: "3px",
                          color:
                            activeLessonIndex === index ? "#3FA9F5" : "#a1b1c5",
                        }}
                      >
                        <i
                          className={
                            activeLessonIndex === index
                              ? "fas fa-play-circle"
                              : "far fa-play-circle"
                          }
                          style={{ fontSize: "18px" }}
                        />
                      </div>
                      <div>
                        <h6
                          style={{
                            margin: 0,
                            color:
                              activeLessonIndex === index
                                ? "#3FA9F5"
                                : "#22428F",
                            fontSize: "15px",
                            lineHeight: "1.4",
                          }}
                        >
                          {index + 1}. {lesson.title}
                        </h6>
                        <span style={{ fontSize: "13px", color: "#8b9db5" }}>
                          {lesson.video_url ? "Video lesson" : "Reading material"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
