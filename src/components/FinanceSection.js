import React from "react";
import './FinanceSolution.css';

const FinanceSection = ({ solution }) => {
  return (
    <section className="finance-section">
      <h2>{solution.id}. {solution.title}</h2>
      <div className="content">
        <div className="text">
          <h3>{solution.title}</h3>
          <p>{solution.description}</p>
          <ul>
            {solution.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
        <div className="image">
          <img src={solution.image} alt={solution.title} />
        </div>
      </div>
    </section>
  );
};

export default FinanceSection;
