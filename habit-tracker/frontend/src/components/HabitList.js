import React from 'react';

const HabitList = ({ habits }) => {
  if (!habits || habits.length === 0) {
    return <p>No habits to display.</p>;
  }

  return (
    <div>
      <h2>Your Habits</h2>
      <ul>
        {habits.map((habit) => (
          <li key={habit.habit_id}>
            {habit.habit_title} - {habit.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitList;
