import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EventDescription.css';

const EventDescription = () => {
    const { category, eventId } = useParams();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('description');

    // Hardcoded data for demonstration based on Image 2
    // In a real app, this would be fetched based on category and eventId
    const eventDetails = {
        title: 'PLASMA PULL',
        description: 'Gear up for a thrilling robotic spectacle where mighty bots face off in a tug-of-war battle! Watch as these cool machines flex their muscles and go head-to-head in a test of strength. It\'s a fun-filled day for all ages with exciting clashes, cheers, and high-tech action',
        stages: 'Stage 1: Bot Inspection\nStage 2: Qualifying Rounds\nStage 3: Finals',
        contacts: 'John Doe: +91 9876543210\nJane Smith: +91 8765432109',
        prizes: '1,00,000*',
        image: '/images/plasma-pull.jpg' // Placeholder or user provided
    };

    const tabs = [
        { id: 'description', label: 'DESCRIPTION' },
        { id: 'stages', label: 'STAGES AND TIMELINES' },
        { id: 'contacts', label: 'CONTACTS' }
    ];

    const handleClose = () => {
        navigate(-1);
    };

    return (
        <div className="event-desc-overlay">
            <div className="event-desc-card">
                {/* Close Button */}
                <button className="close-btn" onClick={handleClose}>
                    X
                </button>

                <div className="event-desc-layout">
                    {/* Left Column */}
                    <div className="event-desc-left">
                        <h1 className="event-desc-title">{eventDetails.title}</h1>

                        <div className="event-tabs">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        <div className="tab-content">
                            {activeTab === 'description' && <p>{eventDetails.description}</p>}
                            {activeTab === 'stages' && <p style={{ whiteSpace: 'pre-line' }}>{eventDetails.stages}</p>}
                            {activeTab === 'contacts' && <p style={{ whiteSpace: 'pre-line' }}>{eventDetails.contacts}</p>}
                        </div>

                        <div className="event-desc-footer">
                            <div className="prize-worth">
                                <span className="prize-worth-label">PRIZES WORTH</span>
                                <div className="prize-worth-value">
                                    <span className="currency">RS.</span> {eventDetails.prizes}
                                </div>
                            </div>

                            <div className="event-actions">
                                <button className="btn-stylized register-btn">
                                    REGISTER
                                </button>
                                <button className="btn-stylized problem-btn">
                                    PROBLEM STATEMENT
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="event-desc-right">
                        <div className="event-media-container">
                            <img src={eventDetails.image} alt={eventDetails.title} className="event-media" />
                            <div className="media-overlay"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDescription;
