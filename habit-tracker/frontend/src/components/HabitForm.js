import React, { useState } from 'react';
import { createHabit } from '../services/api';

const HabitForm = () => {
  const [form, setForm] = useState({ habit_title: '', frequency: 'daily' });

  const handleSubmit = (e) => {
    e.preventDefault();
    createHabit(form).then(() => alert('Habit added!'));
  };

  return (
    <div className="form-container card">
      <h2>Add New Habit</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Habit Title</label>
        <input
          id="title"
          value={form.habit_title}
          onChange={(e) => setForm({ ...form, habit_title: e.target.value })}
          required
        />

        <label htmlFor="frequency">Frequency</label>
        <select
          id="frequency"
          value={form.frequency}
          onChange={(e) => setForm({ ...form, frequency: e.target.value })}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>

        <button type="submit">Add Habit</button>
      </form>
    </div>
  );
};

export default HabitForm;
