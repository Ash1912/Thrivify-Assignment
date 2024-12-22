import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import HabitForm from './components/HabitForm';
import './App.css';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>Habit Tracker & Motivator</h1>
          <nav>
            <a href="/">Dashboard</a>
            <a href="/profile">Profile</a>
            <a href="/add-habit">Add Habit</a>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/add-habit" element={<HabitForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
