import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // Update this to match your backend URL
const AI_BASE_URL = "http://localhost:5001"; // Replace with your Flask server's base URL

// Fetch habits
export const getHabits = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/habits`);
    return response.data;
  } catch (error) {
    console.error("Error fetching habits:", error);
    throw error;
  }
};

// Create a new habit
export const createHabit = async (habitData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/habits`, habitData);
    return response.data;
  } catch (error) {
    console.error("Error creating habit:", error);
    throw error;
  }
};

// Fetch suggestions
export const getSuggestions = async () => {
  try {
    const response = await axios.get(`${AI_BASE_URL}/generate-habit-suggestions`);
    return response.data;
  } catch (error) {
    console.error("Error fetching suggestions:", error);
    throw error;
  }
};

// Fetch all users
export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

// Fetch user details by ID
export const getUser = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user details:", error);
    throw error;
  }
};

// Update user details
export const updateUser = async (userData) => {
  if (!userData.id) {
    console.error("User ID is missing");
    return;
  }
  console.log("User Data ID:", userData.id);  // Add this line to check
  try {
    const response = await axios.put(`${API_BASE_URL}/user/${userData.id}`, userData);
    return response.data;
  } catch (error) {
    console.error("Error updating user details:", error);
    throw error;
  }
};

// Create a new user
export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/user`, userData);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};
