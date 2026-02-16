import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/ui/Button';
import EventImageTemplate from '../components/ui/EventImageTemplate';
import { IMAGES } from '../constants/images';
import impactStatsData from '../data/impact-stats.json';
import storiesData from '../data/success-stories.json';
import newsData from '../data/news.json';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <Header />
      <main className="main">
        {/* Hero Section */}
        <section id="hero" className="hero">
          <div className="hero-background">
            <img
              src={IMAGES.mission.background}
              alt="Empowering Communities"
              className="hero-bg-image"
            />
          </div>
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">Empowering Communities Through Education</h1>
              <p className="hero-subtitle">
                Join us in creating lasting change through learning opportunities and community development. Together, we can build a brighter future for all.
              </p>
              <div className="hero-actions">
                <Button variant="primary" size="large">
                  Donate Now
                </Button>
                <Button variant="secondary" size="large">
                  Get Involved
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Overview */}
        <section className="mission-overview">
          <div className="container">
            <div className="mission-intro">
              <h2 className="section-title">Who We Are</h2>
              <p className="mission-text">
                Raise and Learn is dedicated to transforming lives through education and community empowerment.
                We believe that every individual deserves access to quality learning opportunities, regardless of
                their background or circumstances. Through our programs and initiatives, we create pathways to
                success and foster positive change in communities.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="impact-stats">
          <div className="container">
            <h2 className="section-title">Our Impact</h2>
            <div className="stats-grid">
              {impactStatsData.stats.map((stat) => (
                <div key={stat.id} className="stat-card">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest News */}
        <section className="latest-news">
          <div className="container">
            <h2 className="section-title">Latest News & Updates</h2>
            <div className="news-grid">
              {newsData.articles.map((article) => (
                <article key={article.id} className="news-card">
                  <div className="news-image" style={{ width: '100%', height: 'auto' }}>
                    {article.imageTemplate ? (
                      <EventImageTemplate
                        abbreviation={article.imageTemplate.abbreviation}
                        month={article.imageTemplate.month}
                        theme={article.imageTemplate.theme}
                        width={400}
                        height={250}
                        style={{ width: '100%', height: 'auto' }}
                      />
                    ) : (
                      <img src={IMAGES.events[article.image]} alt={article.title} />
                    )}
                  </div>
                  <div className="news-content">
                    <div className="news-meta">
                      <span className="news-date">{article.date}</span>
                      <span className="news-category">{article.category}</span>
                    </div>
                    <h3>{article.title}</h3>
                    <p>{article.excerpt}</p>
                    <Button
                      variant="text"
                      size="small"
                      onClick={() => navigate(`/news/${article.id}`)}
                    >
                      Read More →
                    </Button>
                  </div>
                </article>
              ))}
            </div>
            <div className="news-cta">
              <Button variant="outline" size="medium">View All News</Button>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="success-stories">
          <div className="container">
            <h2 className="section-title">Success Stories</h2>
            <div className="stories-grid">
              {storiesData.stories.map((story) => (
                <div key={story.id} className="story-card">
                  <div className="story-quote">
                    <p>"{story.quote}"</p>
                  </div>
                  <div className="story-author">
                    <div className="author-info">
                      <h4>{story.author}</h4>
                      <p>{story.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Make a Difference Today</h2>
              <p>
                Your support helps us continue our mission of empowering communities through education.
                Whether you donate, volunteer, or spread the word, every action counts.
              </p>
              <div className="cta-actions">
                <Button variant="primary" size="large">
                  Donate Now
                </Button>
                <Button variant="secondary" size="large">
                  Become a Volunteer
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="newsletter-section">
          <div className="container">
            <div className="newsletter-content">
              <h2>Stay Connected</h2>
              <p>Subscribe to our newsletter for updates on programs, events, and success stories.</p>
              <form className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="newsletter-input"
                  required
                />
                <Button variant="primary" size="medium" type="submit">
                  Subscribe
                </Button>
              </form>
              <p className="newsletter-privacy">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
