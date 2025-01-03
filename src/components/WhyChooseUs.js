// src/components/WhyChooseUs.js
import React from 'react';
import './WhyChooseUs.css'; 
import financeImg from '../assets/Finance1.png'; // Replace with your actual image
import innovationImg from '../assets/innovative.png'; // Replace with your actual image
import supportImg from '../assets/support.png'; // Replace with your actual image

const WhyChooseUs = () => {
  const sections = [
    {
      id: 1,
      title: 'Innovation and Technology:',
      description: 
        'We utilize cutting-edge technologies, such as TOPCon and Monofacial PERC, to ensure the highest efficiency and cost-effectiveness in our solar modules and energy solutions.',
      image: innovationImg,
      align: 'right',
    },
    {
      id: 2,
      title: 'Tailored Financing Solutions:',
      description: 
        'Our flexible project financing models, including deferred CAPEX, lease, and Power Purchase Agreements (PPA), enable clients to manage their energy projects with minimal upfront capital.',
      image: financeImg,
      align: 'left',
    },
    {
      id: 3,
      title: 'Comprehensive Support:',
      description: 
        'We provide a one-stop solution for all renewable energy needs, from project design and execution to maintenance and material sourcing.',
      image: supportImg,
      align: 'right',
    },
  ];

  return (
    <div className="why-choose-us">
      <h2>Why Choose Bask Energy?</h2>
      {sections.map((section) => (
        <div
          key={section.id}
          className={`section ${section.align === 'right' ? 'reverse' : ''}`}
        >
          <div className="section-text">
            <h3>{section.title}</h3>
            <p>{section.description}</p>
          </div>
          <div className="section-image">
            <img src={section.image} alt={section.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyChooseUs;
