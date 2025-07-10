import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <Header />
      <main className="main">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">About Raise & Learn</h1>
              <p className="hero-subtitle">
                Transforming communities by empowering children through education, creativity, and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="about-mission">
          <div className="container">
            <div className="mission-grid">
              <div className="mission-text">
                <h2 className="section-title">Our Mission</h2>
                <p className="mission-description">
                  At Raise & Learn, we believe every child deserves access to quality education and opportunities 
                  to explore their potential. We create engaging learning experiences that foster creativity, 
                  critical thinking, and confidence in young minds.Through innovative programs, community partnerships, and dedicated mentorship, we're building 
                  a brighter future where every child can thrive and contribute meaningfully to society.
                </p>
              </div>
              
            </div>
          </div>
        </section>

        

        {/* Team Section */}
        <section className="about-team">
          <div className="container">
            <div className="team-header">
              <h2 className="section-title">Our Team</h2>
            </div>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-avatar">
                  <div className="avatar-placeholder">JS</div>
                </div>
                <h3 className="member-name">Minchu Rao</h3>
                <p className="member-role">Executive Director</p>
                <p className="member-bio">
                  A high schooler who want to transform lives through learning.
                </p>
              </div>
              <div className="team-member">
                <div className="member-avatar">
                  <div className="avatar-placeholder">MD</div>
                </div>
                <h3 className="member-name">Sanvi Bharadwaj</h3>
                <p className="member-role">Executive Director</p>
                <p className="member-bio">
                  A high schooler who want to raise funds for steam programs.
                </p>
              </div>
              <div className="team-member">
                <div className="member-avatar">
                  <div className="avatar-placeholder">SJ</div>
                </div>
                <h3 className="member-name">Sathvik Bharadwaj</h3>
                <p className="member-role">Secretery</p>
                <p className="member-bio">
                  A middle schooler who is gives incredible ideas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="about-contact">
          <div className="container">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-grid">
              <div className="contact-info">
                <h3>Connect With Us</h3>
                <p>Ready to learn more about our programs or get involved?</p>
                <div className="contact-details">
                  <div className="contact-item">
                    <strong>Email:</strong> info@raiseandlearn.org
                  </div>
                  <div className="contact-item">
                    <strong>Phone:</strong> (555) 123-4567
                  </div>
                  <div className="contact-item">
                    <strong>Address:</strong> 123 Learning Street, Education City, EC 12345
                  </div>
                </div>
              </div>
              <div className="contact-form">
                <h3>Send Us a Message</h3>
                <form className="form">
                  <div className="form-group">
                    <input type="text" placeholder="Your Name" className="form-input" />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="Your Email" className="form-input" />
                  </div>
                  <div className="form-group">
                    <textarea placeholder="Your Message" className="form-textarea" rows="5"></textarea>
                  </div>
                  <button type="submit" className="submit-button">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
