const db = require('./db');

const Habit = {
  findByUserId: (userId, callback) => {
    db.query('SELECT * FROM Habits WHERE user_id = ?', [userId], callback);
  },
  create: (habitData, callback) => {
    db.query('INSERT INTO Habits SET ?', habitData, callback);
  },
  update: (id, status, callback) => {
    db.query('UPDATE Habits SET status = ? WHERE habit_id = ?', [status, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM Habits WHERE habit_id = ?', [id], callback);
  },
};

module.exports = Habit;
