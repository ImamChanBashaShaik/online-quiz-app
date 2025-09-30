import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchQuestions, submitAnswers } from "../api";
import QuestionView from "../components/QuestionView";

function Quiz() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchQuestions();
        setQuestions(data);
        setAnswers(Array(data.length).fill(null));
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch questions:", err);
      }
    }
    load();
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }
    const timer = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswer = (index) => {
    const newAnswers = [...answers];
    newAnswers[current] = index;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (current < questions.length - 1) setCurrent(current + 1);
  };

  const prevQuestion = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const handleSubmit = async () => {
    try {
      const result = await submitAnswers(answers);
      navigate("/results", { state: { ...result, questions, answers } });
    } catch (err) {
      console.error("Failed to submit answers:", err);
    }
  };

  if (loading) return <p className="text-center">Loading questions...</p>;
  if (questions.length === 0) return <p className="text-center">No questions found.</p>;

  return (
    <div className="card p-4 rounded shadow text-center position-absolute top-50 start-50 translate-middle bg-white" style={{ maxWidth: "600px", width: "100%" }}>
      
      {/* Timer */}
      <div className="mb-3 fw-bold text-dark" style={{ fontSize: "18px" }}>
        Time Left: {Math.floor(timeLeft / 60)}:{("0" + (timeLeft % 60)).slice(-2)}
      </div>

      {/* Question */}
      <QuestionView
        question={questions[current]}
        selected={answers[current]}
        onSelect={handleAnswer}
      />

      {/* Navigation Buttons */}
      <div className="d-flex justify-content-center gap-3 flex-wrap mt-4">
        <button
          onClick={prevQuestion}
          disabled={current === 0}
          className={`btn ${current === 0 ? "btn-secondary disabled" : "btn-secondary"}`}
        >
          Previous
        </button>

        {current === questions.length - 1 ? (
          <button onClick={handleSubmit} className="btn btn-success">
            Submit
          </button>
        ) : (
          <button onClick={nextQuestion} className="btn btn-primary">
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default Quiz;
