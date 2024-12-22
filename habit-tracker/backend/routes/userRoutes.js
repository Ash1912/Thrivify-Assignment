const express = require('express');
const { getUser, createUser, updateUser } = require('../controllers/userController');

const router = express.Router();

router.get('/:id', getUser);  // Get user details by ID
router.post('/', createUser);  // Create a new user
router.put('/:id', updateUser);  // Update user profile by ID

module.exports = router;
