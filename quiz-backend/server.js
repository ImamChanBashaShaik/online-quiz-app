const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

// GET questions for quiz (hide correct answers)
app.get("/api/quizzes/:id/questions", (req, res) => {
  const quizId = req.params.id;
  db.all("SELECT id, text, options FROM questions WHERE quiz_id = ?", [quizId], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    const questions = rows.map(q => ({
      id: q.id,
      text: q.text,
      options: JSON.parse(q.options),
    }));
    res.json(questions);
  });
});

// POST submit answers and calculate score
app.post("/api/quizzes/:id/submit", (req, res) => {
  const quizId = req.params.id;
  const { answers } = req.body;

  db.all("SELECT id, text, options, correct FROM questions WHERE quiz_id = ?", [quizId], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });

    let score = 0;
    const details = rows.map((q, i) => {
      const correct = answers[i] === q.correct;
      if (correct) score++;
      return {
        question: q.text,
        correct,
        yourAnswer: answers[i] != null ? JSON.parse(q.options)[answers[i]] : null,
        rightAnswer: JSON.parse(q.options)[q.correct],
      };
    });

    res.json({ score, total: rows.length, details });
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Backend running at http://localhost:${PORT}`));
