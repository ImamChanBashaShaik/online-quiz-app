// backend/scoring.js

function calculateScore(questions, userAnswers) {
  let score = 0;
  const details = [];

  questions.forEach((q, index) => {
    const correct = q.correct === userAnswers[index];
    if (correct) score++;
    details.push({
      question: q.text,
      yourAnswer: userAnswers[index],
      rightAnswer: q.correct,
      correct,
    });
  });

  return { score, total: questions.length, details };
}

module.exports = { calculateScore };
