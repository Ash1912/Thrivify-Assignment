import React, { useState, useEffect } from "react";
import { getSuggestions } from "../services/api";
import "../assets/css/Suggestions.css"; // Import the CSS file

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetchSuggestions();
  }, []);

  const fetchSuggestions = async () => {
    try {
      const data = await getSuggestions();
      setSuggestions(data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  return (
    <div className="suggestions-container">
      <h2 className="suggestions-title">Habit Suggestions</h2>
      <table className="suggestions-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {suggestions.map((s, index) => (
            <tr key={index}>
              <td>{s.title}</td>
              <td>{s.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Suggestions;
