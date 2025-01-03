import React from 'react';
import './HeadandDescription.css'; // Importing CSS for styling

const HeadandDescription = ({ title, description }) => {
  return (
    <div className="vision-section">
      <h3 className="vision-title">{title}</h3>
      <p className="vision-description">{description}</p>
    </div>
  );
};

export default HeadandDescription;
