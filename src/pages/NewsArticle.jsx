import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/ui/Button';
import EventImageTemplate from '../components/ui/EventImageTemplate';
import { IMAGES } from '../constants/images';
import newsData from '../data/news.json';
import './NewsArticle.css';

const NewsArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the article by ID
  const article = newsData.articles.find(a => a.id === parseInt(id));

  // If article not found, show error
  if (!article) {
    return (
      <div className="news-article-page">
        <Header />
        <main className="article-main">
          <div className="article-container">
            <div className="not-found">
              <h1>Article Not Found</h1>
              <p>Sorry, we couldn't find the article you're looking for.</p>
              <Button variant="primary" size="medium" onClick={() => navigate('/')}>
                Back to Home
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="news-article-page">
      <Header />

      <main className="article-main">
        <div className="article-container">

          {/* Breadcrumb */}
          <nav className="breadcrumb">
            <button onClick={() => navigate('/')} className="breadcrumb-link">Home</button>
            <span className="breadcrumb-separator">/</span>
            <button onClick={() => navigate('/')} className="breadcrumb-link">News</button>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Article</span>
          </nav>

          {/* Title Section */}
          <header className="article-header">
            <h1 className="article-title">{article.title}</h1>

            <div className="article-meta">
              <span className="meta-category">{article.category}</span>
              <span className="meta-divider">•</span>
              <span className="meta-date">{article.date}</span>
              <span className="meta-divider">•</span>
              <span className="meta-time">{article.readTime}</span>
              {article.author && (
                <>
                  <span className="meta-divider">•</span>
                  <span className="meta-author">By {article.author}</span>
                </>
              )}
            </div>
          </header>

          {/* Highlights Section */}
          {article.highlights && article.highlights.length > 0 && (
            <section className="highlights-section">
              <h2 className="highlights-title">Key Highlights</h2>
              <ul className="highlights-list">
                {article.highlights.map((highlight, index) => (
                  <li key={index} className="highlight-item">{highlight}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Featured Image */}
          {article.imageTemplate ? (
            <div className="article-image-wrapper">
              <EventImageTemplate
                abbreviation={article.imageTemplate.abbreviation}
                month={article.imageTemplate.month}
                theme={article.imageTemplate.theme}
                width={800}
                height={400}
                className="article-image"
              />
            </div>
          ) : article.image ? (
            <div className="article-image-wrapper">
              <img
                src={IMAGES.events[article.image]}
                alt={article.title}
                className="article-image"
              />
            </div>
          ) : null}

          {/* Content Section */}
          <article className="article-content">
            {/* Excerpt */}
            {article.excerpt && (
              <p className="article-excerpt">{article.excerpt}</p>
            )}

            {/* Body Paragraphs */}
            <div className="article-body">
              {article.content.map((paragraph, index) => (
                <p key={index} className="body-paragraph">{paragraph}</p>
              ))}
            </div>
          </article>

          {/* Back Button */}
          <div className="article-footer">
            <Button
              variant="secondary"
              size="medium"
              onClick={() => navigate('/')}
            >
              ← Back to All News
            </Button>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewsArticle;
