import React from 'react';
import './InfoSection.css';  // Import your CSS for styling

const InfoSection = ({ title, description }) => {
  return (
    <div className="info-section">
      <h3 className="info-title">{title}</h3>
      <p className="info-description">{description}</p>
    </div>
  );
};

export default InfoSection;
