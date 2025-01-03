import React from 'react';
import './ProductSection.css'; // Custom CSS

// Main Product Section Component
const ProductSection = () => {
  return (
    <div className="product-container">
      {/* Product Info Section */}
      <div className="product-info1">
        <div className="product-image">
          <img src={require('../assets/solar-panel.png')} alt="Solar Panel" className="main-image" />
          <div className="product-thumbnails">
            <img src={require('../assets/solar-panel-thumb1.png')} alt="Thumbnail 1" className="thumbnail" />
            <img src={require('../assets/solar-panel-thumb2.png')} alt="Thumbnail 2" className="thumbnail" />
            <img src={require('../assets/solar-panel-thumb3.png')} alt="Thumbnail 3" className="thumbnail" />
          </div>
        </div>
        <div className="product-details">
          <h1>Solar Panel <span className="stars">★★★★☆</span></h1>
          <p className="product-description">
            Solar panels are the primary components used in solar energy systems to convert sunlight into electricity...
          </p>
          <button className="request-button">REQUEST</button>
          <div className="about-item">
            <h3>ABOUT THIS ITEM</h3>
            <p><strong>Technology Types:</strong> TOPCon Solar Panels...</p>
            <p><strong>Monocrystalline PERC:</strong> Advanced PERC cell technology...</p>
            <p><strong>Usage:</strong> Solar panels are used across residential, commercial...</p>
          </div>
        </div>
      </div>

      {/* Recommended Products Section */}
      <div className="recommended-products">
        <h2>Recommended Products</h2>
        <div className="recommended-grid">
          <div className="recommended-item">
            <img src={require('../assets/solar-glass.png')} alt="Solar Glass" />
            <h3>Solar Glass</h3>
            <p>Solar glass is usually covered by tempered solar glass...</p>
          </div>
          <div className="recommended-item">
            <img src={require('../assets/solar-cells.png')} alt="Solar Cells" />
            <h3>Solar Cells</h3>
            <p>TOPCon Solar Cells feature advanced passivation...</p>
          </div>
          <div className="recommended-item">
            <img src={require('../assets/solar-backsheet.png')} alt="Solar Backsheet" />
            <h3>Solar Backsheet</h3>
            <p>The backsheet is the outermost layer on the backside...</p>
          </div>
          <div className="recommended-item">
            <img src={require('../assets/solar-eva.png')} alt="Solar EVA" />
            <h3>Solar EVA</h3>
            <p>EVA is a critical encapsulant material used...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
