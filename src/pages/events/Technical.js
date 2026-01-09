import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EventCard from '../../components/EventCard';
import './events.css';

const Technical = () => {
  const navigate = useNavigate();
  const events = [
    {
      name: 'Paper Presentation',
      tagline: 'Present Your Research & Ideas To The World Of Innovation',
      prize: '₹ 50,000 *',
      image: '/assets/images/paperpresentation.jpg'
    },
    {
      name: 'Hackathon',
      tagline: 'Code Through The Night, Build The Future In 24 Hours',
      prize: '₹ 1,00,000 *',
      image: '/assets/images/Hackathon.jpeg'
    },
    {
      name: 'Project Expo',
      tagline: 'Showcase Your Innovation & Engineering Excellence',
      prize: '₹ 75,000 *',
      image: '/assets/images/ProjectExpo.jpeg'
    },
    {
      name: 'Web Design',
      tagline: 'Craft Digital Experiences That Captivate & Connect',
      prize: '₹ 40,000 *',
      image: '/assets/images/WebDesign.jpeg'
    },
    {
      name: 'Poster Design',
      tagline: 'Transform Ideas Into Visual Masterpieces',
      prize: '₹ 25,000 *',
      image: '/assets/images/events-bg.png'
    },
    {
      name: 'Worst UI',
      tagline: 'Create The Most Hilariously Terrible User Interface',
      prize: '₹ 30,000 *',
      image: '/assets/images/WorstUI.jpeg'
    },
    {
      name: 'RRR',
      tagline: 'React, Respond & Resolve: The Ultimate Tech Quiz',
      prize: '₹ 35,000 *',
      image: '/assets/images/RRR.jpeg'
    }
  ];

  const handleEventClick = (eventName) => {
    // Navigate using a URL-friendly version of the name
    const eventId = eventName.toLowerCase().replace(/\s+/g, '-');
    navigate(`/events/technical/${eventId}`);
  };

  return (
    <div className="events-container">
      <div className="breadcrumb">
        <Link to="/events">Events</Link>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">Technical</span>
      </div>

      <div className="event-list-container">
        <div className="event-list-header">
          <h1 className="event-list-title">TECHNICAL EVENTS</h1>
          <p className="event-list-description">Innovate. Build. Compete.</p>
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

export default Technical;