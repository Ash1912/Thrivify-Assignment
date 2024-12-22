const Habit = require('../models/Habit');

exports.getHabits = (req, res) => {
  const userId = req.query.user_id;  // Get user ID from query params
  Habit.findByUserId(userId, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);  // Return the list of habits
  });
};

exports.createHabit = (req, res) => {
  const habitData = req.body;  // Habit data is passed in the request body
  Habit.create(habitData, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Habit created', habit_id: results.insertId });
  });
};

exports.updateHabit = (req, res) => {
  const habitId = req.params.id;
  const { status } = req.body;  // Status (completed, in-progress, etc.)
  Habit.update(habitId, status, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Habit updated' });
  });
};

exports.deleteHabit = (req, res) => {
  const habitId = req.params.id;
  Habit.delete(habitId, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Habit deleted' });
  });
};
