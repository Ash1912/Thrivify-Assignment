const db = require('./db');

const User = {
  findById: (id, callback) => {
    db.query('SELECT * FROM Users WHERE user_id = ?', [id], callback);
  },
  create: (userData, callback) => {
    db.query('INSERT INTO Users SET ?', userData, callback);
  },
  update: (id, userData, callback) => {
    db.query('UPDATE Users SET ? WHERE user_id = ?', [userData, id], callback);
  },
};

module.exports = User;
