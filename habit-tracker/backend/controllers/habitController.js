const db = require('../models/db');

// Fetch habits
exports.getHabits = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM Habits');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching habits:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Create a new habit
exports.createHabit = async (req, res) => {
  try {
    const { user_id, habit_title, frequency } = req.body;
    console.log("Request body:", req.body); // Debug log

    if (!user_id || !habit_title || !frequency) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const query = `
      INSERT INTO Habits (user_id, habit_title, frequency, start_date)
      VALUES (?, ?, ?, CURDATE())
    `;
    await db.query(query, [user_id, habit_title, frequency]);

    res.status(201).json({ message: 'Habit created successfully' });
  } catch (error) {
    console.error('Error creating habit:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.updateHabit = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    await db.query("UPDATE Habits SET status = ? WHERE habit_id = ?", [status, id]);
    res.send("Habit updated successfully");
  } catch (err) {
    res.status(500).send("Error updating habit");
  }
};

exports.deleteHabit = async (req, res) => {
  try {
    const { id } = req.params;
    await db.query("DELETE FROM Habits WHERE habit_id = ?", [id]);
    res.send("Habit deleted successfully");
  } catch (err) {
    res.status(500).send("Error deleting habit");
  }
};