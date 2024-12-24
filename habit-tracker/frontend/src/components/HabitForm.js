import React, { useState } from "react";
import "../assets/css/HabitForm.css"; // Import CSS

const HabitForm = ({ onAddHabit }) => {
  const [formData, setFormData] = useState({
    user_id: '',       
    habit_title: '',
    frequency: 'daily',
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddHabit = async () => {
    if (!formData.user_id || !formData.habit_title) {
      setErrorMessage("User ID and Habit Title are required");
      return;
    }

    try {
      await onAddHabit(formData);
      alert("Habit added successfully!");
      setFormData({
        user_id: '',
        habit_title: '',
        frequency: 'daily',
      });
      setErrorMessage("");  // Clear error message on successful submission
    } catch (error) {
      console.error("Error adding habit:", error.message);
    }
  };

  return (
    <div className="habit-form">
      <h2>Create Habit</h2>
      {errorMessage && <div className="error">{errorMessage}</div>}
      <input
        type="text"
        name="user_id"
        value={formData.user_id}
        placeholder="User ID"
        onChange={handleChange}
      />
      <input
        type="text"
        name="habit_title"
        value={formData.habit_title}
        placeholder="Habit Title"
        onChange={handleChange}
      />
      <select name="frequency" value={formData.frequency} onChange={handleChange}>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>
      <button onClick={handleAddHabit}>Add Habit</button>
    </div>
  );
};

export default HabitForm;