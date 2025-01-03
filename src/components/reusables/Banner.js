import React from 'react'
import './Banner.css'
const Banner = ({ backgroundImage, title, description, buttonText }) => {
  return (
    <div
      className="finance-banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="finance-banner-content">
        <p className="finance-banner-service">Our Service</p>
        <h2 className="finance-banner-title">{title}</h2>
        <p className="finance-banner-description">{description}</p>
        <button className="finance-banner-btn">{buttonText}</button>
      </div>
    </div>
  )
}

export default Banner
