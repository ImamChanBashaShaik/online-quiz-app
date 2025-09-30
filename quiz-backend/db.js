const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./quiz.db");

// Create table if it doesn't exist
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS questions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      quiz_id INTEGER,
      text TEXT,
      options TEXT,
      correct INTEGER
    )
  `);

  // Insert sample questions if table is empty
  db.get("SELECT COUNT(*) as count FROM questions", (err, row) => {
    if (row.count === 0) {
      const sample = [
        { quiz_id: 1, text: "What is 2 + 2?", options: JSON.stringify(["3", "4", "5"]), correct: 1 },
        { quiz_id: 1, text: "Capital of France?", options: JSON.stringify(["London", "Paris", "Rome"]), correct: 1 },
        { quiz_id: 1, text: "Which planet is known as the Red Planet?", options: JSON.stringify(["Earth", "Mars", "Jupiter"]), correct: 1 },
        { quiz_id: 1, text: "Largest ocean on Earth?", options: JSON.stringify(["Atlantic", "Indian", "Pacific"]), correct: 2 },
        { quiz_id: 1, text: "Who wrote 'Romeo and Juliet'?", options: JSON.stringify(["Shakespeare", "Dickens", "Tolstoy"]), correct: 0 },
        { quiz_id: 1, text: "Boiling point of water?", options: JSON.stringify(["90°C", "100°C", "120°C"]), correct: 1 },
        { quiz_id: 1, text: "Chemical symbol 'O' stands for?", options: JSON.stringify(["Gold", "Oxygen", "Silver"]), correct: 1 },
        { quiz_id: 1, text: "Capital of Japan?", options: JSON.stringify(["Tokyo", "Seoul", "Beijing"]), correct: 0 },
        { quiz_id: 1, text: "Fastest land animal?", options: JSON.stringify(["Cheetah", "Lion", "Horse"]), correct: 0 },
        { quiz_id: 1, text: "Who painted the Mona Lisa?", options: JSON.stringify(["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh"]), correct: 0 },
    ];

      const stmt = db.prepare("INSERT INTO questions (quiz_id, text, options, correct) VALUES (?, ?, ?, ?)");
      sample.forEach(q => stmt.run(q.quiz_id, q.text, q.options, q.correct));
      stmt.finalize();
      console.log("✅ Sample questions inserted");
    }
  });
});

module.exports = db;
