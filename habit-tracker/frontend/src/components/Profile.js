import React, { useState, useEffect } from 'react';
import { getUser, updateUser } from '../services/api';

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    getUser().then(setProfile);
  }, []);

  const handleSave = () => {
    updateUser(profile).then(() => setEditing(false));
  };

  return (
    <div>
      <h1>Profile</h1>
      {editing ? (
        <div>
          <label>
            Name:
            <input
              type="text"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            />
          </label>
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <button onClick={() => setEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
