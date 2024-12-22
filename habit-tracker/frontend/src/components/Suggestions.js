import React from 'react';

const Suggestions = ({ suggestions }) => {
  if (!suggestions || suggestions.length === 0) {
    return <p>No suggestions available.</p>;
  }

  return (
    <div>
      <h2>Suggested Habits</h2>
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>
            <strong>{suggestion.title}</strong> - {suggestion.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Suggestions;
