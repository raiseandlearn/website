import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import EventImageTemplate from '../components/ui/EventImageTemplate';
import HeroCarousel from '../components/ui/HeroCarousel';
import { IMAGES } from '../constants/images';
import impactStatsData from '../data/impact-stats.json';
import storiesData from '../data/success-stories.json';
import newsData from '../data/news.json';
import './Home.css';

const HERO_CAROUSEL_IMAGES = [
  '/assets/images/carousel/1.jpeg',
  '/assets/images/carousel/2.jpeg',
  '/assets/images/carousel/3.jpeg',
  '/assets/images/carousel/4.jpeg',
  '/assets/images/carousel/5.jpeg',
  '/assets/images/carousel/6.jpeg',
  '/assets/images/carousel/7.jpeg',
  '/assets/images/carousel/8.jpeg',
  '/assets/images/carousel/9.jpeg',
  '/assets/images/carousel/10.jpeg',
  '/assets/images/carousel/11.jpeg',
  '/assets/images/carousel/12.jpeg',
  '/assets/images/carousel/13.jpeg',
  '/assets/images/carousel/14.jpeg',
  '/assets/images/carousel/15.jpeg',
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <main className="main">
        {/* Hero Section */}
        <section id="hero" className="hero">
          <div className="hero-background">
            <HeroCarousel
              images={HERO_CAROUSEL_IMAGES}
              // fallbackSrc={IMAGES.mission.background}
              intervalMs={2000}
            />
          </div>
          <div className="container">
            <div className="hero-content">
            <h1 className="hero-title">Empowering Communities Through Education & Healthcare</h1>
            <p className="hero-subtitle">
              Join us in expanding access to education and supporting healthcare initiatives. Together, we empower minds, uplift families, and build a healthier, brighter future.
            </p>
              <div className="hero-actions">
                <Button variant="secondary" size="large" onClick={() => navigate('/contact')}>
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
              <h2 className="section-title">We are Raise and Learn</h2>
              <div className="mission-columns">
                <div className="mission-column">
                  <div className="mission-icon" aria-hidden="true">
                    <img
                      src="/assets/images/open_book.png"
                      alt="Education"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '/assets/images/open-book.svg';
                      }}
                    />
                  </div>
                  <p className="mission-text">
                    Raise and Learn - Educate Empower Elevate, is a nonprofit organization with a simple but powerful belief: education is the foundation for opportunity, dignity, and a better future. We strive to empower youth by creating access to quality learning environments, investing in school development, and expanding STEM education so every child can discover their potential and thrive in a rapidly changing world.
                  </p>
                </div>

                <div className="mission-column">
                  <div className="mission-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 21s-7-4.4-9.3-9.2C.9 7.7 3.2 4.8 6.5 4.8c1.8 0 3.4.9 4.5 2.4 1.1-1.5 2.7-2.4 4.5-2.4 3.3 0 5.6 2.9 3.8 7C19 16.6 12 21 12 21Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11 10h2v2h2v2h-2v2h-2v-2H9v-2h2v-2Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="mission-text">
                    We also recognize that good health is essential to any child’s ability to learn and succeed. That is why Raise and Learn is equally committed to improving healthcare support. We aim to bring comfort, resources, and hope to those facing serious illnesses—especially cancer. By supporting cancer patients and funding care, we stand alongside families during some of their most difficult moments, while also working toward a future free from cancer.
                  </p>
                </div>

                <div className="mission-column">
                  <div className="mission-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 7.2c.9-1.3 2.3-2 3.7-2 2.6 0 4.3 2.2 3.1 5-1.6 3.5-6.8 6.8-6.8 6.8S8.8 13.7 7.2 10.2c-1.2-2.8.5-5 3.1-5 1.4 0 2.8.7 3.7 2Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.5 14.5h6.2c.7 0 1.3.2 1.8.6l1 .8c.4.3.9.5 1.4.5H20c.9 0 1.6.7 1.6 1.6v0c0 .9-.7 1.6-1.6 1.6h-7.5c-.6 0-1.2-.2-1.7-.6l-1.1-.9c-.4-.3-.9-.5-1.4-.5H3.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="mission-text">
                    Your generosity helps us build schools, strengthen education, improve healthcare access, and provide life-changing support to those who need it most. Together, we can raise opportunities, learn from challenges, and change lives.
                  </p>
                </div>
              </div>
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

        Success Stories
        {/* <section className="success-stories">
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
        </section> */}

        {/* Call to Action */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Make a Difference Today</h2>
              <p>
                Your support helps us continue our mission of empowering communities through education.
                Whether you donate, volunteer, or spread the word, every action counts.
              </p>
              {/* <div className="cta-actions">
                <Button variant="primary" size="large">
                  Donate Now
                </Button>
                <Button variant="secondary" size="large">
                  Become a Volunteer
                </Button>
              </div> */}
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
    </div>
  );
};

export default Home;
