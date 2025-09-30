import React from "react";

function QuestionView({ question, selected, onSelect }) {
  if (!question) return null;

  return (
    <div>
      <h2 style={{ marginBottom: "20px", textAlign: "center" }}>
        {question.text}
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          alignItems: "center",  // ✅ centers options
        }}
      >
        {question.options.map((option, index) => (
          <label
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: selected === index ? "#e3f2fd" : "#f9f9f9",
              padding: "10px 15px",
              borderRadius: "8px",
              width: "100%",
              maxWidth: "400px",
              cursor: "pointer",
              boxShadow:
                selected === index
                  ? "0 0 8px rgba(33, 150, 243, 0.6)"
                  : "0 0 4px rgba(0,0,0,0.1)",
            }}
          >
            <input
              type="radio"
              name={`question-${question.id}`}
              checked={selected === index}
              onChange={() => onSelect(index)}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
}

export default QuestionView;
