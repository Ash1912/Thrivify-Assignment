import axios from 'axios';

const API_BASE = 'http://localhost:5000/api'; // Adjust based on your backend URL

// Fetch all habits
export const getHabits = async () => {
  const response = await axios.get(`${API_BASE}/habits`);
  return response.data;
};

// Fetch suggestions
export const getSuggestions = async () => {
  const response = await axios.get(`${API_BASE}/generate-habit-suggestions`);
  return response.data;
};

// Create a new habit
export const createHabit = async (habit) => {
  const response = await axios.post(`${API_BASE}/habits`, habit);
  return response.data;
};

// Fetch user details
export const getUser = async () => {
  const response = await axios.get(`${API_BASE}/user/profile`);
  return response.data;
};

// Update user details
export const updateUser = async (profile) => {
  const response = await axios.put(`${API_BASE}/user/profile`, profile);
  return response.data;
};
