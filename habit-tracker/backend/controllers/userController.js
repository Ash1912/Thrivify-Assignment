const db = require("../models/db");

// Fetch all users
exports.getAllUsers = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM Users");
    res.json(rows);
  } catch (err) {
    res.status(500).send("Error retrieving users");
  }
};

// Fetch a single user by ID
exports.getUser = async (req, res) => {
  try {
    const { id } = req.params; // Get user ID from URL
    const [rows] = await db.query("SELECT * FROM Users WHERE user_id = ?", [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(rows[0]);
  } catch (err) {
    res.status(500).send("Error retrieving user");
  }
};

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { user_name, email_id } = req.body;

    if (!user_name || !email_id ) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const query = `
      INSERT INTO Users (user_name, email_id)
      VALUES (?, ?)
    `;
    await db.query(query, [user_name, email_id]);

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;  // Get user ID from URL parameter
    const { user_name, email_id } = req.body;

    if (!user_name || !email_id) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Check if the user exists first
    const [rows] = await db.query("SELECT * FROM Users WHERE user_id = ?", [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    await db.query("UPDATE Users SET user_name = ?, email_id = ? WHERE user_id = ?", [user_name, email_id, id]);
    res.send("User updated successfully");
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).send("Error updating user");
  }
};
