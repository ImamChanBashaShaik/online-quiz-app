# Online Quiz App 🎯

A full-stack quiz application built with **React**, **Bootstrap 5**, **Node.js (Express)**, and **SQLite**. Users can take a quiz, navigate through questions, submit answers, and view detailed results with correct/incorrect answers. Includes a countdown timer and backend unit tests for scoring logic.

---

## 🚀 Features

* Start quiz with a simple UI.
* Navigate with **Next** / **Previous** buttons.
* Timer auto-submits when time is up.
* Backend scoring with detailed review of answers.
* Unit tests for scoring logic (Jest).

---

## ⚙️ Setup & Run Locally

### 1. Clone Repository

```bash
git clone https://github.com/ImamChanBashaShaik/online-quiz-app.git
cd online-quiz-app
```

### 2. Backend Setup

```bash
cd quiz-backend
npm install
node server.js
```

Backend runs on: `http://localhost:5000`

### 3. Frontend Setup

```bash
cd ../quiz-frontend
npm install
npm start
```

Frontend runs on: `http://localhost:3000`

---

## 🧪 Run Tests (Backend)

From `quiz-backend`:

```bash
npm test
```

This runs unit tests for scoring logic with **Jest**.

---

## 📌 Assumptions & Design Choices

* SQLite is used for lightweight storage of quiz questions.
* Each question stores its text, options, and correct answer index.
* API never exposes correct answers during quiz fetch.
* Frontend tracks answers locally and submits once.
* Results page shows detailed feedback with ✅ / ❌ indicators.

---

## 📂 Project Structure

```
online-quiz-app/
 ├── quiz-backend/     # Node.js + Express + SQLite backend
 ├── quiz-frontend/    # React + Bootstrap 5 frontend
 └── README.md         # Project documentation
```
