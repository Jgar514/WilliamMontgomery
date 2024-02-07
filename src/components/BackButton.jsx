// BackButton.js
import React from 'react';

const BackButton = ({ onClick }) => {
  return (
    <button
      style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        padding: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      Back to Home
    </button>
  );
};

export default BackButton;
