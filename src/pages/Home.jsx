import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/ui/Button';
import RecentEvents from '../components/sections/RecentEvents';
import UpcomingEvents from '../components/sections/UpcomingEvents';
import { IMAGES } from '../constants/images';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main className="main">
        {/* Mission Section */}
        <section id="mission" className="mission">
          <div className="mission-background">
            <img 
              src={IMAGES.mission.background} 
              alt="Learning Journey Background" 
              className="mission-bg-image"
            />
          </div>
          <div className="container">
            <div className="mission-content">
              <h1 className="mission-title">Transforming community by Empowering Kids</h1>
              <p className="mission-subtitle">
                Join hands to create a brighter future for our children.
              </p>
              <div className="mission-actions">
                <Button variant="primary" size="large">
                  Register Today
                </Button>
                <Button variant="secondary" size="large">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Recent Events Section */}
        <RecentEvents />
        
        {/* Upcoming Events Section */}
        <UpcomingEvents />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
