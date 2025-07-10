import React, { useRef } from 'react';
import { IMAGES } from '../../constants/images';
import './UpcomingEvents.css';

const UpcomingEvents = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -150, // Card width + gap (120px + 30px)
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 150, // Card width + gap (120px + 30px)
        behavior: 'smooth'
      });
    }
  };

  const upcomingEvents = [
    {
      id: 1,
      image: IMAGES.events.event1,
      title: 'Future Leaders Workshop',
      subtitle: 'Developing leadership skills and confidence',
      date: '2025-07-25'
    },
    {
      id: 2,
      image: IMAGES.events.event2,
      title: 'STEM Innovation Fair',
      subtitle: 'Explore cutting-edge technology and innovation',
      date: '2025-08-10'
    }
    
  ];

  return (
    <section id="upcoming-events" className="upcoming-events">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Upcoming Events</h2>
          <div className="section-content">
            
            <div className="scroll-controls-container">
              <div className="scroll-controls">
                <button 
                  className="scroll-button scroll-left" 
                  onClick={scrollLeft}
                  aria-label="Scroll left"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15,18 9,12 15,6"></polyline>
                  </svg>
                </button>
                <button 
                  className="scroll-button scroll-right" 
                  onClick={scrollRight}
                  aria-label="Scroll right"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9,18 15,12 9,6"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="events-container">
          <div className="events-grid" ref={scrollContainerRef}>
            {upcomingEvents.map(event => (
              <div key={event.id} className="event-card">
                <div className="event-image">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    onError={(e) => {
                      e.target.style.background = '#f0f0f0';
                      e.target.style.display = 'flex';
                      e.target.style.alignItems = 'center';
                      e.target.style.justifyContent = 'center';
                      e.target.innerHTML = '<span style="color: #666; font-size: 14px;">Image not available</span>';
                    }}
                  />
                </div>
                <div className="event-content">
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-subtitle">{event.subtitle}</p>
                  <div className="event-date">
                    {new Date(event.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
