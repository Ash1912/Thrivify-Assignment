const express = require("express");
const { getUser, createUser, updateUser, getAllUsers } = require("../controllers/userController");

const router = express.Router();

// Get all users
router.get("/", getAllUsers);

// Get a specific user
router.get("/:id", getUser);

// Create new user
router.post("/", createUser);

// Update user
router.put("/:id", updateUser);

module.exports = router;
