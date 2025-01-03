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
          <p>Lorem ipsum dolor sit amet consectetur. Quis diam pretium viverra quam. Lectus aenean porttitor tellus neque vulputate commodo odio.</p>
          <button>Get in touch</button>
        </div>
      </div>
      <div>
        <img src={Untitled} alt="Solar 2" loading="lazy" />
        {/* <p className="legend">Solar Power 2</p> */}
        <div className="placeholder">
          <h1>SUSTAINABLE ENERGY AND POWER MADE EASY</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Quis diam pretium viverra quam. Lectus aenean porttitor tellus neque vulputate commodo odio.</p>
          <button>Get in touch</button>
        </div>
      </div>
      <div>
        <img src={Untitled} alt="Solar 3" loading="lazy" className="image-carousel" />
        {/* <p className="legend">Sustainable Energy</p> */}
        <div className="placeholder">
          <h1>SUSTAINABLE ENERGY AND POWER MADE EASY</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Quis diam pretium viverra quam. Lectus aenean porttitor tellus neque vulputate commodo odio.</p>
          <button>Get in touch</button>
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
