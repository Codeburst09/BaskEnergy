// src/components/CarouselComponent.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './CustomCarousel.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import Untitled from '../assets/Untitled.png';

const CarouselComponent = () => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} interval={3000}>
      <div>
        <img src={Untitled} alt="Solar 1" loading="lazy" />
        {/* <p className="legend">Solar Power 1</p> */}
        <div className="placeholder">
          <h1>SUSTAINABLE ENERGY AND POWER MADE EASY</h1>
          <p>Simplifying the journey to clean, renewable energy solutions for a sustainable future. Empowering individuals and businesses with accessible, eco-friendly power technologies.</p>
          <button>Get in touch</button>
        </div>
      </div>
      <div>
        <img src={Untitled} alt="Solar 2" loading="lazy" />
        {/* <p className="legend">Solar Power 2</p> */}
        <div className="placeholder">
          <h1>SUSTAINABLE ENERGY AND POWER MADE EASY</h1>
          <p>Your guide to understanding and adopting sustainable energy systems effortlessly. Bridging the gap between innovation and everyday use for a greener tomorrow.</p>
          <button>Get in touch</button>
        </div>
      </div>
      <div>
        <img src={Untitled} alt="Solar 3" loading="lazy" className="image-carousel" />
        {/* <p className="legend">Sustainable Energy</p> */}
        <div className="placeholder">
          <h1>SUSTAINABLE ENERGY AND POWER MADE EASY</h1>
          <p>Making renewable energy adoption seamless and practical for everyone. Unlocking the potential of clean power to drive positive change.
          </p>
          <button>Get in touch</button>
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
