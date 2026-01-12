import React from 'react';
import ElectricBorder from './ElectricBorder';
import './EventCard.css';

const EventCard = ({ name, tagline, prize, image, onClick, className }) => {
  return (
    <ElectricBorder
      color="#bd0a23"
      speed={0.77}
      chaos={0.15}
      borderRadius={31}
      className={`glass-event-card ${className || ''}`}
      onClick={onClick}
    >

      {/* Card Content */}
      <div className="card-content-new">
        <div className="card-image-container">
          <img src={image} alt={name} className="card-main-image" />
        </div>

        <div className="card-info-container">
          <h3 className="card-event-title-stranger">{name}</h3>
          <p className="card-event-tagline-catchy">{tagline}</p>
        </div>

        <div className="card-footer-mini">
          <div className="prize-info-mini">
            <span className="prize-value-mini">{prize}</span>
          </div>
        </div>
      </div>
    </ElectricBorder>
  );
};

export default EventCard;