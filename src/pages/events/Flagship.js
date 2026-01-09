import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EventCard from '../../components/EventCard';
import './events.css';

const Flagship = () => {
  const navigate = useNavigate();
  const flagshipEvent = {
    name: 'GPTATHON',
    tagline: 'The Ultimate Challenge: Where Legends Are Made',
    prize: 'Rs. 2,00,000 *',
    image: '/assets/images/events-bg.png'
  };

  const handleClick = () => {
    const eventId = flagshipEvent.name.toLowerCase().replace(/\s+/g, '-');
    navigate(`/events/flagship/${eventId}`);
  };

  return (
    <div className="events-container">
      <div className="breadcrumb">
        <Link to="/events">Events</Link>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">Flagship</span>
      </div>

      <div className="event-list-container">
        <div className="event-list-header">
          <h1 className="event-list-title">FLAGSHIP EVENT</h1>
          <p className="event-list-description">The Main Gate.</p>
        </div>

        {/* Single Flagship Card - Centered and Larger */}
        <div className="flagship-card-container">
          <EventCard
            name={flagshipEvent.name}
            tagline={flagshipEvent.tagline}
            prize={flagshipEvent.prize}
            image={flagshipEvent.image}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Flagship;