// Import necessary modules
const express = require('express');
const mysql = require('mysql2'); // Use mysql2 package
const cors = require('cors'); // If you're using CORS for cross-origin requests
const bodyParser = require('body-parser'); // If you need body parsing
const dotenv = require('dotenv'); // For loading environment variables (optional)
const userRoutes = require('./routes/userRoutes');
const habitRoutes = require('./routes/habitRoutes');

// Load environment variables from .env file (optional)
dotenv.config();

// Create the Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parse JSON request bodies

// MySQL database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost', // Set your DB host here
  user: process.env.DB_USER || 'root', // Replace with your DB username
  password: process.env.DB_PASSWORD || 'C_20051685', // Replace with your DB password
  database: process.env.DB_NAME || 'habittracker', // Replace with your DB name
  authPlugins: {
    mysql_clear_password: () => () => Buffer.from('') // Handle authentication plugin issues
  }
});

// Connect to MySQL database
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to database');
});

// Example route for testing database connection
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Routes
app.use('/api/users', userRoutes);
app.use('/api/habits', habitRoutes);

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
