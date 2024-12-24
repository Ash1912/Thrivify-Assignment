import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import './App.css';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>Habit Tracker</h1>
          <nav>
            <a href="/">Dashboard</a>
            <a href="/profile">Profile</a>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;