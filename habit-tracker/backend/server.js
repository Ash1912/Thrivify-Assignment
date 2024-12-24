const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const habitRoutes = require("./routes/habitRoutes");

const app = express();

// Middleware
app.use(cors(
  {
    origin: "*",  // Allow all origins for development
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"]
  }
));
app.use(express.json());

// Routes
app.use("/api/user", userRoutes);
app.use("/api/habits", habitRoutes);

// Default route for root URL
app.get("/", (req, res) => {
  res.send("Welcome to the Habit Tracker API!");
});

// Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
