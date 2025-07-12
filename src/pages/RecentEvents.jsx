import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Events.css';

const EventsPage = () => {
  return (
    <div className="events-page">
      <Header />
      <main className="main container">
        <h1 className="section-title">Events</h1>
        <p>Here you can find all our events and activities!</p>
        {/* Event Log Section */}
        <section className="event-log-section">
          <h2 className="event-log-title">Event Log</h2>
          <ul className="event-log-list">
            <li className="event-log-item">You can write a log of completed events here!</li>
            {/* Add more event log entries as needed */}
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EventsPage;
