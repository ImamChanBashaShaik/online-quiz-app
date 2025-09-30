import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Results() {
  const navigate = useNavigate();
  const { state } = useLocation();

  if (!state) {
    return (
      <div className="text-center mt-5">
        <h2>No results found</h2>
        <button className="btn btn-primary mt-3" onClick={() => navigate("/")}>
          Go Back
        </button>
      </div>
    );
  }

  const { score, total, details } = state;

  return (
    <div className="position-absolute top-50 start-50 translate-middle" style={{ width: "100%", maxWidth: "700px", maxHeight: "90vh", overflowY: "auto"}}>
      <div className="card p-4 rounded shadow bg-white text-center">
        <h1>Quiz Completed 🎉</h1>
        <h2>
          Your Score: {score} / {total}
        </h2>

        <h3 className="mt-4">Review:</h3>
        <ul className="list-unstyled mt-3 text-start">
          {details.map((d, i) => (
            <li
              key={i}
              className={`mb-3 p-3 rounded`}
              style={{ background: d.correct ? "#e6ffed" : "#ffe6e6", border: "1px solid #ddd" }}
            >
              <p className="fw-bold">
                {i + 1}. {d.question}
              </p>
              <p>
                <strong>Your Answer:</strong> {d.yourAnswer}{" "}
                {d.correct ? "✅ Correct" : "❌ Wrong"}
              </p>
              {!d.correct && (
                <p>
                  <strong>Correct Answer:</strong> {d.rightAnswer}
                </p>
              )}
            </li>
          ))}
        </ul>

        <button
          onClick={() => navigate("/")}
          className="btn btn-primary mt-3"
        >
          Go Back to Start
        </button>
      </div>
    </div>
  );
}

export default Results;
