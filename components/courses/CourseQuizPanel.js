import { useEffect, useMemo, useState } from "react";
import { fetchLearnerQuiz, submitQuizAttempt } from "@/lib/learner";
import ContentLoader from "@/components/common/ContentLoader";

export default function CourseQuizPanel({ quizId, onClose, onCompleted }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quiz, setQuiz] = useState(null);
  const [bestAttempt, setBestAttempt] = useState(null);
  const [answers, setAnswers] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (!quizId) return undefined;

    let active = true;
    setLoading(true);
    setError(null);
    setResult(null);
    setAnswers({});

    fetchLearnerQuiz(quizId)
      .then((data) => {
        if (!active) return;
        setQuiz(data.quiz);
        setBestAttempt(data.bestAttempt);
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
  }, [quizId]);

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
        new Error(`Please answer all questions (${unansweredCount} remaining).`)
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
      onCompleted?.(response);
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

  if (loading) {
    return (
      <div className="learn-quiz-panel learn-quiz-panel--loading">
        <ContentLoader message="Loading quiz..." />
      </div>
    );
  }

  if (error && !quiz) {
    return (
      <div className="learn-quiz-panel">
        <div className="learn-quiz-panel__error">
          <h3>Unable to load quiz</h3>
          <p>{error.message || "Please try again."}</p>
          {onClose ? (
            <button type="button" className="learn-portal__primary-btn" onClick={onClose}>
              Back to lesson
            </button>
          ) : null}
        </div>
      </div>
    );
  }

  if (!quiz) {
    return (
      <div className="learn-quiz-panel">
        <div className="learn-quiz-panel__error">
          <h3>Quiz not found</h3>
          {onClose ? (
            <button type="button" className="learn-portal__primary-btn" onClick={onClose}>
              Back to lesson
            </button>
          ) : null}
        </div>
      </div>
    );
  }

  const typeLabel =
    quiz.type === "final"
      ? "Final quiz"
      : quiz.type === "section"
        ? "Section quiz"
        : "Lesson quiz";

  return (
    <div className="learn-quiz-panel">
      <div className="learn-quiz-panel__toolbar">
        {onClose ? (
          <button type="button" className="learn-quiz-panel__back" onClick={onClose}>
            ← Back to lesson
          </button>
        ) : (
          <span />
        )}
        <span className="learn-quiz-panel__meta">
          {quiz.questionCount} questions · Pass {quiz.passingScore}%
        </span>
      </div>

      <div className="learn-quiz-panel__header">
        <span className="learn-quiz-panel__eyebrow">{typeLabel}</span>
        <h2>{quiz.title}</h2>
        {bestAttempt && !result ? (
          <p>
            Best score:{" "}
            <strong className={bestAttempt.passed ? "is-pass" : "is-fail"}>
              {bestAttempt.score}%
            </strong>
          </p>
        ) : null}
      </div>

      {result ? (
        <div
          className={`learn-quiz-panel__result${
            result.passed ? " is-pass" : " is-fail"
          }`}
        >
          <strong>{result.passed ? "You passed!" : "Not quite yet"}</strong>
          <p>
            Score: {result.score}% ({result.correctCount}/
            {result.totalQuestions} correct). Passing score is{" "}
            {result.passingScore}%.
          </p>
          <div className="learn-quiz-panel__result-actions">
            <button
              type="button"
              className="learn-portal__continue-btn"
              onClick={handleRetake}
            >
              Retake quiz
            </button>
            {onClose ? (
              <button
                type="button"
                className="learn-portal__complete-btn"
                onClick={onClose}
              >
                Continue course
              </button>
            ) : null}
          </div>
        </div>
      ) : null}

      {error?.message ? (
        <div className="learn-quiz-panel__error-inline">{error.message}</div>
      ) : null}

      <form onSubmit={handleSubmit} className="learn-quiz-panel__form">
        {(quiz.questions || []).map((question, index) => (
          <div key={question.id} className="learn-quiz-panel__question">
            <h4>
              {index + 1}. {question.question}
            </h4>
            <div className="learn-quiz-panel__options">
              {(question.options || []).map((option) => {
                const selected = answers[question.id] === option;
                return (
                  <label
                    key={`${question.id}-${option}`}
                    className={`learn-quiz-panel__option${
                      selected ? " is-selected" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={option}
                      checked={selected}
                      disabled={Boolean(result)}
                      onChange={() => handleSelect(question.id, option)}
                    />
                    <span>{option}</span>
                  </label>
                );
              })}
            </div>
          </div>
        ))}

        {!result ? (
          <button
            type="submit"
            className="learn-portal__complete-btn"
            disabled={submitting || quiz.questions.length === 0}
          >
            {submitting ? "Submitting..." : "Submit quiz"}
          </button>
        ) : null}
      </form>
    </div>
  );
}
