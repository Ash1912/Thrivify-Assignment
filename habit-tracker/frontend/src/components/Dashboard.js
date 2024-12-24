import React, { useState, useEffect } from "react";
import HabitList from "./HabitList";
import HabitForm from "./HabitForm";
import Suggestions from "./Suggestions";
import { getHabits, createHabit } from "../services/api";
import "../assets/css/Dashboard.css"; // Import CSS

const Dashboard = () => {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    fetchHabits();
  }, []);

  const fetchHabits = async () => {
    try {
      const data = await getHabits();
      setHabits(data);
    } catch (error) {
      console.error("Error fetching habits:", error.message);
    }
  };

  const handleAddHabit = async (habit) => {
    try {
      await createHabit(habit);
      fetchHabits();
    } catch (error) {
      console.error("Error adding habit:", error.message);
    }
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Habit Tracker</h1>
      <HabitForm onAddHabit={handleAddHabit} />
      <HabitList habits={habits} />
      <Suggestions />
    </div>
  );
};

export default Dashboard;
