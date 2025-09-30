Online Quiz Application 🎯
Project Description

This is a full-stack Online Quiz Application where users can take a quiz, track their time, and view their score with a detailed review of correct and incorrect answers.

Key Features:

Start page with “Start Quiz” button.

Displays one question at a time with options.

Next and Previous navigation buttons.

Timer for quiz duration (5 minutes).

Submit button on the last question.

Results page showing:

Total score

Correct and wrong answers

Detailed review per question

Backend Features:

SQLite database stores quiz questions.

API endpoints to fetch questions and submit answers.

Scoring logic separated for easy testing.

Unit tests using Jest ensure scoring works correctly.

Setup Instructions
Frontend

Navigate to the frontend folder:

cd quiz-frontend


Install dependencies:

npm install


Start the development server:

npm start


The frontend will run on http://localhost:3000

Backend

Navigate to the backend folder:

cd quiz-backend


Install dependencies:

npm install


Start the server:

node server.js


The backend will run on http://localhost:5000

Running Test Cases

Make sure you are in the backend folder:

cd quiz-backend


Run the Jest tests:

npm test


You should see results indicating all tests passed for the scoring logic.

Assumptions / Design Choices

Questions Table: Each question has text, options (stored as JSON), and the correct option index.

Frontend: Built using React and Bootstrap 5 for responsive layout.

Timer: Fixed 5-minute timer per quiz.

Navigation: Users can navigate back and forth between questions.

Results Page: Shows detailed review with color-coded answers (green for correct, red for wrong).

Testing: Scoring logic is tested independently using Jest to ensure correctness.
