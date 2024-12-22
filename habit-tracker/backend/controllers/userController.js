const User = require('../models/User');

exports.getUser = (req, res) => {
  const userId = req.params.id;  // Using dynamic ID for fetching user data
  User.findById(userId, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0]);  // Return the user data as JSON
  });
};

exports.createUser = (req, res) => {
  const userData = req.body;
  User.create(userData, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'User created', user_id: results.insertId });
  });
};

exports.updateUser = (req, res) => {
  const userId = req.params.id;
  const userData = req.body;
  User.update(userId, userData, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'User updated' });
  });
};
