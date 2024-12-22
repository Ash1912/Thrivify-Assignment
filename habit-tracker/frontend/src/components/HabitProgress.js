import React from 'react';

const HabitProgress = ({ progress }) => {
  return (
    <div>
      <h2>Progress</h2>
      <div style={{ width: '100%', backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
        <div
          style={{
            width: `${progress}%`,
            backgroundColor: '#4caf50',
            height: '20px',
            borderRadius: '5px',
          }}
        ></div>
      </div>
      <p>{progress}% completed</p>
    </div>
  );
};

export default HabitProgress;
