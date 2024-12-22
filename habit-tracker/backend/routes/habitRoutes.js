const express = require('express');
const { getHabits, createHabit, updateHabit, deleteHabit } = require('../controllers/habitController');

const router = express.Router();

router.get('/', getHabits);  // Get all habits for a user
router.post('/', createHabit);  // Create a new habit
router.put('/:id', updateHabit);  // Update habit status by ID
router.delete('/:id', deleteHabit);  // Delete habit by ID

module.exports = router;
