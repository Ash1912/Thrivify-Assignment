import React from "react";
import "../assets/css/HabitList.css"; // Import CSS

const HabitList = ({ habits }) => (
  <div className="habit-list">
    <h2>Habit List</h2>
    <ul>
      {habits.map((habit) => (
        <li key={habit.habit_id}>
          <span className="habit-title">{habit.habit_title}</span> -{" "}
          <span className="habit-frequency">{habit.frequency}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default HabitList;
