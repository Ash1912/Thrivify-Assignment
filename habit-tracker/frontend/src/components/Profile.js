import React, { useState, useEffect } from "react";
import '../assets/css/Profile.css'; // Import the CSS for styling
import { getUser, updateUser, getAllUsers, createUser } from "../services/api"; // Assuming correct path to your api.js

const Profile = () => {
  const [users, setUsers] = useState([]); // List of all users
  const [user, setUser] = useState({ user_name: "", email_id: "" });
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ user_name: "", email_id: "" });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState(""); // For success message
  const [createMode, setCreateMode] = useState(false); // To toggle user creation form


  // Fetch user details when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []);
  
  useEffect(() => {
    console.log("Users state updated:", users);
  }, [users]);
  
  

  const fetchUsers = async () => {
    try {
      const data = await getAllUsers();
      console.log("Fetched Users:", data); // Debug log to ensure data is fetched
      setUsers(data);
    } catch (err) {
      setError("Error fetching users.");
      console.error("Error fetching users:", err);
    }
  };

  // Fetch user details based on selected user
  const fetchUser = async (userId) => {
    try {
      const data = await getUser(userId);
      setUser(data);
      setFormData({ user_name: data.user_name, email_id: data.email_id });
      setEditMode(true); // Enter edit mode when selecting a user
    } catch (err) {
      setError("Error fetching user details.");
      console.error("Error fetching user details:", err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      if (!user.user_id) {
        setError("User ID is missing. Cannot update user.");
        console.error("User ID is missing.");
        return;
      }
      // Ensure the user ID is included when updating
      const updatedUserData = { ...formData, id: user.user_id }; // Add user_id to the request data
      console.log("Updating User Data:", updatedUserData);
      await updateUser(updatedUserData);
      // Show success message
      setSuccessMessage("Saved Successfully!");

      setEditMode(false);
      // Reload the page after a short delay
      setTimeout(() => {
        window.location.reload();
      }, 500); // 0.5-second delay

      fetchUser(user.user_id); // Pass the currently edited user's ID
    } catch (err) {
      setError(`Error updating user: ${err.response ? err.response.data : err.message}`);
      console.error("Error updating user:", err);
    }
  };

  const handleCreateUser = async () => {
    try {
      await createUser(formData);
      setCreateMode(false);
      fetchUsers(); // Refresh users list after creating new user
    } catch (err) {
      setError("Error creating user.");
      console.error("Error creating user:", err);
    }
  };

  return (
    <div className="profile-container">
      <h1>Profile</h1>

      {error && <div className="error-message">{error}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}

      {/* Create New User Form */}
      {createMode && (
        <div className="profile-form">
          <label>
            Name:
            <input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleInputChange}
              className="input-field"
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email_id"
              value={formData.email_id}
              onChange={handleInputChange}
              className="input-field"
            />
          </label>
          <button onClick={handleCreateUser} className="save-button">
            Create User
          </button>
          <button onClick={() => setCreateMode(false)} className="cancel-button">
            Cancel
          </button>
        </div>
      )}

      {/* Users Table */}
      {!createMode && (
        <div className="users-table">
          <h2>All Users</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.user_id}>
                  <td>{user.user_name}</td>
                  <td>{user.email_id}</td>
                  <td>
                    <button onClick={() => fetchUser(user.user_id)} className="edit-button">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Editable Profile Form */}
      {editMode && (
        <div className="profile-form">
          <label>
            Name:
            <input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleInputChange}
              className="input-field"
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email_id"
              value={formData.email_id}
              onChange={handleInputChange}
              className="input-field"
            />
          </label>
          <button onClick={handleSave} className="save-button">
            Save
          </button>
          <button onClick={() => setEditMode(false)} className="cancel-button">
            Cancel
          </button>
        </div>
      )}

      {/* Create New User Button */}
      {!createMode && (
        <div className="create-user-container">
        <button onClick={() => setCreateMode(true)} className="create-user-button">
          Create New User
        </button>
        </div>
      )}
    </div>
  );
};

export default Profile;