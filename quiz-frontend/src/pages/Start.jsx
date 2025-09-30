import React from "react";
import { useNavigate } from "react-router-dom";

function Start() {
  const navigate = useNavigate();

  return (
    <div className="position-absolute top-50 start-50 translate-middle bg-white p-5 rounded shadow text-center" style={{ maxWidth: "600px", width: "100%" }}>
      <h1 className="mb-4">Welcome to the Quiz App 🎯</h1>
      <button
        onClick={() => navigate("/quiz")}
        className="btn btn-primary px-4 py-2"
        style={{ fontSize: "16px" }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default Start;