import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <main className="about-main">
        <section className="about-section">
          <div className="container">
            <div className="about-card">
              <h2 className="about-title">Educate Empower Elevate</h2>
              <h4 className="about-tagline">About This Cause</h4>
              <p className="about-text">
                Raise and Learn is a nonprofit organization with a simple but powerful belief: education is the
                foundation for opportunity, dignity, and a better future. We strive to empower youth by creating access
                to quality learning environments, investing in school development, and expanding STEM education so
                every child can discover their potential and thrive in a rapidly changing world.
              </p>
              <p className="about-text">
                We also recognize that good health is essential to any child’s ability to learn and succeed. That is
                why Raise and Learn is equally committed to improving healthcare support. We aim to bring comfort,
                resources, and hope to those facing serious illnesses—especially cancer. By supporting cancer patients
                and funding care, we stand alongside families during some of their most difficult moments, while also
                working toward a future free from cancer.
              </p>
              <p className="about-text">
                Your generosity helps us build schools, strengthen education, improve healthcare access, and provide
                life-changing support to those who need it most. Together, we can raise opportunities, learn from
                challenges, and change lives.
              </p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="container">
            <h2 className="about-section-title">Meet the Team</h2>
            <div className="team-grid">
              <div className="team-card">
                <img
                  className="team-image"
                  src="/assets/images/team/minchu-rao.svg"
                  alt="Minchu Rao"
                  loading="lazy"
                />
                <div className="team-info">
                  <h3 className="team-name">Minchu Rao</h3>
                  <p className="team-title">Founding Member</p>
                  <p className="team-intro">
                    A student leader focused on transforming communities through learning and service.
                  </p>
                </div>
              </div>

              <div className="team-card">
                <img
                  className="team-image"
                  src="/assets/images/team/sanvi.png"
                  alt="Sanvi Bharadwaj"
                  loading="lazy"
                />
                <div className="team-info">
                  <h3 className="team-name">Sanvi Bharadwaj</h3>
                  <p className="team-title">Founding Member</p>
                  <p className="team-intro">
                    Passionate about expanding STEM opportunities and creating impact through education.
                  </p>
                </div>
              </div>

              <div className="team-card">
                <img 
                  className="team-image"
                  src="/assets/images/team/sathvik.png"
                  alt="Sathvik Bharadwaj"
                  loading="lazy"
                />
                <div className="team-info">
                  <h3 className="team-name">Sathvik Bharadwaj</h3>
                  <p className="team-title">Founding Member</p>
                  <p className="team-intro">
                    Brings fresh ideas and energy to help Raise &amp; Learn grow and serve more families.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
