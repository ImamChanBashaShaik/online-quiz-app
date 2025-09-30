const API_BASE = "http://localhost:5000/api/quizzes/1";

export async function fetchQuestions() {
  const res = await fetch(`${API_BASE}/questions`);
  return res.json();
}

export async function submitAnswers(answers) {
  const res = await fetch(`${API_BASE}/submit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ answers }),
  });
  return res.json();
}
