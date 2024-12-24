# Thrivify-Assignment

# Habit Tracker Web Application

This is a Habit Tracker web application that allows users to track their daily, weekly, or monthly habits, receive suggestions, and view their progress in a user-friendly dashboard. It consists of a frontend built with React and a backend built with Node.js and Express, with a Flask-based API for habit suggestions.

## Features

- **User Authentication**: Allows users to register and log in (if implemented).
- **Habit Tracking**: Users can create habits with specific titles and frequencies (daily, weekly, or monthly).
- **Habit Suggestions**: AI-based habit suggestions based on user data.
- **Profile Management**: Users can update their profiles (if implemented).
- **Responsive Design**: Works well across desktop and mobile devices.

## Technologies Used

- **Frontend**: React, React Router, Axios for API requests, CSS
- **Backend**: Node.js, Express, MySQL (or SQLite)
- **AI API**: Flask server for habit suggestions
- **Database**: MySQL (or SQLite) for storing user and habit data

## Setup Instructions

### Prerequisites

- **Node.js** (v14 or higher)
- **MySQL** or **SQLite** (depending on your preference)
- **Flask** (for the AI-based suggestions API)

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Ash1912/Thrivify-Assignment.git
   cd habit-tracker
   ```

2. Install dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Set up your database:

->Create a MySQL database or use SQLite.
->Import the required schema for Users and Habits.

4. Run the server:
    ```bash
    npm run dev
    ```

5. Your backend should now be running at 
    ```bash
    http://localhost:5000
    ```

### Frontend Setup

1. Install frontend dependencies:
    ```bash
    cd frontend
    npm install
    ```

2. Update the API URL in api.js (if necessary) to match the backend URL:
    ```bash
    const API_BASE_URL = "http://localhost:5000/api"; // Update this URL
    const AI_BASE_URL = "http://localhost:5001"; // Flask server URL for AI-based suggestions
    ```

3. Run the frontend:
    ```bash.
    npm start
    ```

4. Your frontend should now be running at 
    ```bash
    http://localhost:3000
    ```

### AI Service Setup

1. Install dependencies:
    ```bash
    cd ai-service
    venv\Scripts\activate
    pip install flask
    pip install -r requirements.txt
    ```

2. Run the AI server:
    ```bash
    python app.py
    ```

3. The AI server should now be running at
    ```bash
    http://localhost:5001
    ```

## Project Structure

```bash
habit-tracker/
│
├── frontend/                # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── assets/css/
│   │   │   ├── Dashboard.css
│   │   │   ├── HabitList.css
│   │   │   ├── HabitForm.css
│   │   │   ├── Profile.css
│   │   │   ├── Suggestions.css
│   │   ├── components/
│   │   │   ├── Dashboard.js
│   │   │   ├── HabitList.js
│   │   │   ├── HabitForm.js
│   │   │   ├── Profile.js
│   │   │   ├── Suggestions.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── App.css
│   │   ├── index.css
│   │   ├── styles.css
├── backend/                 # Node.js Backend
│   ├── controllers/
│   │   ├── habitController.js
│   │   ├── userController.js
│   ├── models/
│   │   └── db.js
│   ├── routes/
│   │   ├── habitRoutes.js
│   │   ├── userRoutes.js
│   ├── .env
│   ├── server.js
├── ai-service/              # Flask AI Service
│   ├── app.py
│   ├── recommendation.py
|   ├── static/
│   |    └── favicon.ico
│   ├── requirements.txt
├── README.md
```

## Endpoints

### Backend Routes

->GET /api/habits: Fetch all habits
->POST /api/habits: Create a new habit
->GET /api/user: Fetch all users
->GET /api/user/:id: Fetch a user by ID
->PUT /api/user/:id: Update user details
->DELETE /api/habits/:id: Delete a habit

### AI API Routes (Optional)
->GET /generate-habit-suggestions: Fetch habit suggestions (based on user data)

## Example Usage

### Creating a Habit

1. Go to the Dashboard.
2. Fill out the form with a habit title, select the frequency, and enter your user ID.
3. Click on "Add Habit" to create the habit.

### Viewing Habit Suggestions

1. On the Dashboard, you'll receive habit suggestions based on your existing habits and AI-generated recommendations.

### Profile Management

1. Go to the Profile page (if implemented) to view and update your user details.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push to your branch and create a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

Happy Habit Tracking! 🎯


### Key Sections Explained:

1. **Technologies Used**: Lists the key technologies involved in the project.
2. **Setup Instructions**: Provides clear steps for setting up both the backend, frontend, and the AI suggestions API.
3. **Project Structure**: Shows how the project's files are organized.
4. **API Endpoints**: Describes the key API routes and their functionalities.
5. **Example Usage**: Explains how the user can create a habit, view suggestions, and manage their profile.
6. **Contributing**: Encourages others to contribute to the project and provides guidelines for doing so.

This `README.md` is designed to help both new developers and collaborators get up and running quickly with the project while also providing all necessary information to understand and extend it.
