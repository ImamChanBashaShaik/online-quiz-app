// backend/scoring.test.js
const { calculateScore } = require('./scoring');

describe("Quiz Scoring Logic", () => {
  const questions = [
    { text: "2 + 2 = ?", correct: 1 },
    { text: "Capital of France?", correct: 1 },
    { text: "Fastest land animal?", correct: 0 },
  ];

  test("All correct answers", () => {
    const userAnswers = [1, 1, 0];
    const result = calculateScore(questions, userAnswers);
    expect(result.score).toBe(3);
    result.details.forEach(d => expect(d.correct).toBe(true));
  });

  test("All wrong answers", () => {
    const userAnswers = [0, 0, 1];
    const result = calculateScore(questions, userAnswers);
    expect(result.score).toBe(0);
    result.details.forEach(d => expect(d.correct).toBe(false));
  });

  test("Some correct, some wrong", () => {
    const userAnswers = [1, 0, 0];
    const result = calculateScore(questions, userAnswers);
    expect(result.score).toBe(2);
    expect(result.details[0].correct).toBe(true);
    expect(result.details[1].correct).toBe(false);
    expect(result.details[2].correct).toBe(true);
  });
});
