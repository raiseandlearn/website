import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RecentEventsPage = () => {
  return (
    <div className="recent-events-page">
      <Header />
      <main className="main container">
        <h1 className="section-title">Recent Events</h1>
        <p>Here you can find all our recent events and activities!</p>
        {/* Add more content or event listings here as needed */}
      </main>
      <Footer />
    </div>
  );
};

export default RecentEventsPage;
