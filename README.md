# Thrivify-Assignment

## Project Structure

```bash
habit-tracker/
│
├── frontend/                # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard.js
│   │   │   ├── HabitList.js
│   │   │   ├── HabitForm.js
│   │   │   ├── HabitProgress.js
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
|   |   ├── Habit.js
│   │   ├── User.js
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