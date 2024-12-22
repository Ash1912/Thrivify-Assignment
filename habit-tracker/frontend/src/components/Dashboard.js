import React, { useState, useEffect } from 'react';
import HabitList from './HabitList';
import Suggestions from './Suggestions';
// import HabitForm from './HabitForm';
import { getHabits, getSuggestions, } from '../services/api';

const Dashboard = () => {
  const [habits, setHabits] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    getHabits().then(setHabits);
    getSuggestions().then(setSuggestions);
  }, []);

//   const handleAddHabit = (habit) => {
//     createHabit(habit).then((newHabit) => setHabits([...habits, newHabit]));
//   };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Track and improve your habits efficiently.</p>
      {/* <HabitForm onSubmit={handleAddHabit} /> */}
      <HabitList habits={habits} />
      <Suggestions suggestions={suggestions} />
    </div>
  );
};

export default Dashboard;
