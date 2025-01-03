import React from 'react';
import './LeadershipSection.css'; // Importing CSS for styling

const LeadershipSection = ({ title, description, leaderName, leaderRole }) => {
  return (
    <div className="leadership-section">
      <h3 className="leadership-title">{title}</h3>
      <div className="leadership-content">
        <p className="leader-name"><strong>{leaderName}</strong> - {leaderRole}</p>
        <p className="leadership-description">{description}</p>
      </div>
    </div>
  );
};

export default LeadershipSection;
