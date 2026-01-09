import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EventCard from '../../components/EventCard';
import './events.css';

const NonTech = () => {
  const navigate = useNavigate();
  const events = [
    {
      name: 'Bigboss',
      tagline: 'Strategy, Survival & Social Dynamics In The Ultimate Reality Challenge',
      prize: 'Rs. 60,000 *',
      image: '/assets/images/Biggboss.jpeg'
    },
    {
      name: 'Neuro Quest',
      tagline: 'Test Your Mind, Challenge Your Logic & Decode The Mysteries',
      prize: 'Rs. 45,000 *',
      image: '/assets/images/events-bg.png'
    },
    {
      name: 'Connections',
      tagline: 'Link The Clues, Find Patterns & Master The Art Of Association',
      prize: 'Rs. 35,000 *',
      image: '/assets/images/events-bg.png'
    },
    {
      name: 'Murder Mystery',
      tagline: 'Unravel Secrets, Follow Clues & Solve The Enigma',
      prize: 'Rs. 50,000 *',
      image: '/assets/images/events-bg.png'
    },
    {
      name: 'IPL Auction',
      tagline: 'Bid Smart, Build Teams & Dominate The Cricket Empire',
      prize: 'Rs. 55,000 *',
      image: '/assets/images/events-bg.png'
    },
    {
      name: 'Treasure Hunt',
      tagline: 'Navigate The Unknown, Crack Codes & Discover Hidden Treasures',
      prize: 'Rs. 40,000 *',
      image: '/assets/images/events-bg.png'
    },
    {
      name: 'Open Talent',
      tagline: 'Showcase Your Skills, Dazzle The Crowd & Shine On Stage',
      prize: 'Rs. 45,000 *',
      image: '/assets/images/events-bg.png'
    },
    {
      name: 'Rapid Chess',
      tagline: 'Think Fast, Move Faster & Checkmate Your Opponents',
      prize: 'Rs. 30,000 *',
      image: '/assets/images/events-bg.png'
    },
    {
      name: 'E-sports',
      tagline: 'Battle In Virtual Arenas, Prove Your Gaming Supremacy',
      prize: 'Rs. 70,000 *',
      image: '/assets/images/events-bg.png'
    }
  ];

  const handleEventClick = (eventName) => {
    const eventId = eventName.toLowerCase().replace(/\s+/g, '-');
    navigate(`/events/non-tech/${eventId}`);
  };

  return (
    <div className="events-container">
      <div className="breadcrumb">
        <Link to="/events">Events</Link>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">Non-Technical</span>
      </div>

      <div className="event-list-container">
        <div className="event-list-header">
          <h1 className="event-list-title">NON-TECH EVENTS</h1>
          <p className="event-list-description">Think. Play. Survive.</p>
        </div>

        <div className="event-grid">
          {events.map((event, index) => (
            <EventCard
              key={index}
              name={event.name}
              tagline={event.tagline}
              prize={event.prize}
              image={event.image}
              onClick={() => handleEventClick(event.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NonTech;