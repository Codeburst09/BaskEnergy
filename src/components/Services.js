// src/components/Services.js
import React from 'react';
import './Services.css';
import finance from '../assets/finance.png'
import service2 from '../assets/service2.png'
import service3 from '../assets/service3.png'
import { FaPiggyBank, FaSolarPanel, FaIndustry } from 'react-icons/fa'; // Icons

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaPiggyBank />,
      title: 'Finance solution',
      description:
        'Bask Energy offers a wide range of financial solutions tailored for businesses in the renewable energy space.',
      image: finance, // Replace with actual image
    },
    {
      id: 2,
      icon: <FaSolarPanel />,
      title: 'Solar Installation',
      description:
        'Solar installation refers to the process of setting up solar energy systems that convert sunlight into electricity.',
      image: service2, // Replace with actual image
    },
    {
      id: 3,
      icon: <FaIndustry />,
      title: 'Solar Panel Contract Manufacturing',
      description:
        'Solar panel contract manufacturing involves supporting the production of solar panels for specialized manufacturers.',
      image: service3, // Replace with actual image
    },
  ];

  return (
    <div className="services-container">
        
      <div className="services-header">
      <div className="services-intro">
          <p>We Offer</p>
        </div>
      
        <h2 className="vertical-text">SERVICES</h2>
        
      </div>

      <div className="services-grid">
        
        
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.title} />
            <div className="service-content">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
