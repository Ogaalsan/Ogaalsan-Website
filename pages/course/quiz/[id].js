import Layout from "@/components/layout/Layout";
import ContentLoader from "@/components/common/ContentLoader";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { fetchLearnerQuiz, submitQuizAttempt } from "@/lib/learner";

export default function TakeQuizPage() {
  const router = useRouter();
  const quizId = router.query.id;
  const ready = router.isReady && Boolean(quizId);
  const { isAuthenticated, loading: authLoading } = useAuth();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quiz, setQuiz] = useState(null);
  const [bestAttempt, setBestAttempt] = useState(null);
  const [answers, setAnswers] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);

  const returnPath =
    ready && quizId ? `/course/quiz/${quizId}` : "/my-courses";

  useEffect(() => {
    if (authLoading) return;
    if (!isAuthenticated) {
      router.replace(
        `/auth/sign-in?redirect=${encodeURIComponent(returnPath)}`
      );
    }
  }, [authLoading, isAuthenticated, returnPath, router]);

  useEffect(() => {
    if (!ready || !isAuthenticated || authLoading) return undefined;

    let active = true;
    setLoading(true);
    setError(null);
    setResult(null);

    fetchLearnerQuiz(quizId)
      .then((data) => {
        if (!active) return;
        setQuiz(data.quiz);
        setBestAttempt(data.bestAttempt);
        setAnswers({});
      })
      .catch((err) => {
        if (active) {
          setError(err);
          setQuiz(null);
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [ready, quizId, isAuthenticated, authLoading]);

  const unansweredCount = useMemo(() => {
    if (!quiz?.questions?.length) return 0;
    return quiz.questions.filter((question) => !answers[question.id]).length;
  }, [quiz, answers]);

  const handleSelect = (questionId, option) => {
    if (result) return;
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!quiz?.id || submitting) return;

    if (unansweredCount > 0) {
      setError(
        new Error(
          `Please answer all questions (${unansweredCount} remaining).`
        )
      );
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const response = await submitQuizAttempt(quiz.id, answers);
      setResult(response.result);
      if (response.attempt) {
        setBestAttempt({
          id: response.attempt.id,
          score: response.attempt.score,
          passed: response.attempt.passed,
          submittedAt: response.attempt.submitted_at,
        });
      }
    } catch (err) {
      setError(err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleRetake = () => {
    setResult(null);
    setAnswers({});
    setError(null);
  };

  if (authLoading || !isAuthenticated) {
    return (
      <Layout>
        <ContentLoader message="Checking your account..." />
      </Layout>
    );
  }

  if (!ready || loading) {
    return (
      <Layout>
        <ContentLoader message="Loading quiz..." />
      </Layout>
    );
  }

  if (error && !quiz) {
    return (
      <Layout breadcrumbTitle="Quiz">
        <div className="container pt-120 pb-120 text-center">
          <h2 style={{ color: "#22428F" }}>Unable to load quiz</h2>
          <p style={{ color: "#334770" }}>
            {error.message || "Please try again."}
          </p>
          <Link href="/my-courses" className="btn mt-30">
            Back to My Courses
          </Link>
        </div>
      </Layout>
    );
  }

  if (!quiz) {
    return (
      <Layout>
        <div className="container pt-120 pb-120 text-center">
          <h2>Quiz not found.</h2>
          <Link href="/my-courses" className="btn mt-30">
            Back to My Courses
          </Link>
        </div>
      </Layout>
    );
  }

  const courseHref = quiz.course?.slug
    ? `/course/watch/${quiz.course.slug}`
    : quiz.course?.id
      ? `/course/watch/${quiz.course.id}`
      : "/my-courses";

  return (
    <Layout breadcrumbTitle={quiz.title}>
      <section className="pt-60 pb-120">
        <div className="container" style={{ maxWidth: 860 }}>
          <Link
            href={courseHref}
            style={{
              color: "#3FA9F5",
              fontWeight: 600,
              fontSize: 14,
              textDecoration: "none",
            }}
          >
            ← Back to course
          </Link>

          <div
            className="mt-20"
            style={{
              background: "#fff",
              border: "1px solid #e8eef6",
              borderRadius: 16,
              padding: "28px 32px",
              boxShadow: "0 12px 30px rgba(34, 66, 143, 0.06)",
            }}
          >
            <div className="d-flex flex-wrap justify-content-between gap-3 mb-20">
              <div>
                <p
                  style={{
                    margin: 0,
                    color: "#8b9db5",
                    fontSize: 13,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                  }}
                >
                  {quiz.type === "final"
                    ? "Final quiz"
                    : quiz.type === "section"
                      ? "Section quiz"
                      : "Lesson quiz"}
                </p>
                <h2
                  style={{
                    color: "#22428F",
                    fontWeight: 700,
                    margin: "6px 0 0",
                    fontSize: 28,
                  }}
                >
                  {quiz.title}
                </h2>
                {quiz.course?.title && (
                  <p style={{ color: "#667085", margin: "8px 0 0" }}>
                    {quiz.course.title}
                  </p>
                )}
              </div>
              <div style={{ textAlign: "right", fontSize: 14, color: "#667085" }}>
                <div>
                  {quiz.questionCount} questions · Pass {quiz.passingScore}%
                </div>
                {bestAttempt && !result && (
                  <div style={{ marginTop: 6 }}>
                    Best score:{" "}
                    <strong style={{ color: bestAttempt.passed ? "#16a34a" : "#b45309" }}>
                      {bestAttempt.score}%
                    </strong>
                  </div>
                )}
              </div>
            </div>

            {result && (
              <div
                className="mb-30"
                style={{
                  background: result.passed
                    ? "rgba(22,163,74,0.1)"
                    : "rgba(217,119,6,0.1)",
                  border: `1px solid ${
                    result.passed
                      ? "rgba(22,163,74,0.25)"
                      : "rgba(217,119,6,0.25)"
                  }`,
                  color: result.passed ? "#166534" : "#92400e",
                  borderRadius: 12,
                  padding: "18px 20px",
                }}
              >
                <strong style={{ display: "block", fontSize: 18, marginBottom: 6 }}>
                  {result.passed ? "You passed!" : "Not quite yet"}
                </strong>
                <p style={{ margin: 0 }}>
                  Score: {result.score}% ({result.correctCount}/
                  {result.totalQuestions} correct). Passing score is{" "}
                  {result.passingScore}%.
                </p>
                <div className="d-flex flex-wrap gap-2 mt-3">
                  <button
                    type="button"
                    className="btn"
                    onClick={handleRetake}
                    style={{
                      background: "#22428F",
                      color: "#fff",
                      border: "none",
                      borderRadius: 8,
                      padding: "10px 16px",
                      fontWeight: 600,
                    }}
                  >
                    Retake quiz
                  </button>
                  <Link
                    href={courseHref}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "10px 16px",
                      borderRadius: 8,
                      border: "1px solid #d0d9e8",
                      color: "#22428F",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    Continue course
                  </Link>
                </div>
              </div>
            )}

            {error?.message && (
              <div
                className="mb-20"
                style={{
                  background: "rgba(220,38,38,0.08)",
                  border: "1px solid rgba(220,38,38,0.2)",
                  color: "#b91c1c",
                  borderRadius: 10,
                  padding: "12px 14px",
                }}
              >
                {error.message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {(quiz.questions || []).map((question, index) => (
                <div
                  key={question.id}
                  className="mb-30"
                  style={{
                    paddingBottom: 24,
                    borderBottom:
                      index === quiz.questions.length - 1
                        ? "none"
                        : "1px solid #eef2f6",
                  }}
                >
                  <h4
                    style={{
                      color: "#22428F",
                      fontSize: 17,
                      fontWeight: 650,
                      marginBottom: 14,
                      lineHeight: 1.45,
                    }}
                  >
                    {index + 1}. {question.question}
                  </h4>
                  <div className="d-flex flex-column gap-2">
                    {(question.options || []).map((option) => {
                      const selected = answers[question.id] === option;
                      return (
                        <label
                          key={`${question.id}-${option}`}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 12,
                            padding: "12px 14px",
                            borderRadius: 10,
                            border: selected
                              ? "1.5px solid #3FA9F5"
                              : "1px solid #e2e8f0",
                            background: selected
                              ? "rgba(63,169,245,0.08)"
                              : "#fff",
                            cursor: result ? "default" : "pointer",
                            opacity: result && !selected ? 0.7 : 1,
                          }}
                        >
                          <input
                            type="radio"
                            name={`question-${question.id}`}
                            value={option}
                            checked={selected}
                            disabled={Boolean(result)}
                            onChange={() => handleSelect(question.id, option)}
                            style={{ marginTop: 3 }}
                          />
                          <span style={{ color: "#334770", lineHeight: 1.5 }}>
                            {option}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              ))}

              {!result && (
                <button
                  type="submit"
                  disabled={submitting || quiz.questions.length === 0}
                  style={{
                    background: "#22428F",
                    color: "#fff",
                    border: "none",
                    borderRadius: 10,
                    padding: "14px 22px",
                    fontWeight: 650,
                    cursor: submitting ? "wait" : "pointer",
                    opacity: submitting ? 0.75 : 1,
                  }}
                >
                  {submitting ? "Submitting..." : "Submit quiz"}
                </button>
              )}
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
