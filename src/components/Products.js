import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Products.css'; 
import solarPanelImg from '../assets/solar1.png'; 
import solarGlassImg from '../assets/solar2.png'; 
import solarCellsImg from '../assets/solar3.png'; 

const Products = () => {
  const navigate = useNavigate(); // useNavigate hook

  const products = [
    {
      id: 1,
      title: 'Solar Panel',
      description: 'Solar panels are the primary components of any solar energy system.',
      image: solarPanelImg,
    },
    {
      id: 2,
      title: 'Solar Glass',
      description: 'Solar panels are usually covered by tempered solar glass.',
      image: solarGlassImg,
    },
    {
      id: 3,
      title: 'Solar Cells',
      description: 'TOPCon Solar Cells feature advanced passivation technology.',
      image: solarCellsImg,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <div>→</div>,
    prevArrow: <div>←</div>,
  };

  const handleViewMoreClick = () => {
    navigate('/products'); // Navigate to the product details page
  };

  return (
    <div className="products-section">
      <div className="products-header">
        <p className="highlighted-text">Best Quality</p>
        <h2>Products</h2>
      </div>

      <Slider {...settings} className="products-slider">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <div className="product-info">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </Slider>

      <div className="view-more-button">
        <button onClick={handleViewMoreClick}>View More</button> {/* Button triggers navigation */}
      </div>
    </div>
  );
};

export default Products;
