import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (sectionId) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // We're on home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navigateToPage = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <h1 className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          Raise & Learn
        </h1>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <button onClick={() => handleNavigation('mission')} className="nav-link">
                Home
              </button>
            </li>
            <li className="nav-item">
              <button onClick={() => navigateToPage('/recent-events')} className="nav-link">
                Recent Events
              </button>
            </li>
            <li className="nav-item">
              <button onClick={() => handleNavigation('upcoming-events')} className="nav-link">
                Upcoming Events
              </button>
            </li>
            <li className="nav-item">
              <button onClick={() => handleNavigation('testimonials')} className="nav-link">
                Reviews
              </button>
            </li>
            <li className="nav-item">
              <button onClick={() => navigateToPage('/about')} className="nav-link">
                About
              </button>
            </li>
          </ul>
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-nav-list">
            <li><button onClick={() => handleNavigation('mission')} className="mobile-nav-link">Home</button></li>
            <li><button onClick={() => navigateToPage('/recent-events')} className="mobile-nav-link">Recent Events</button></li>
            <li><button onClick={() => handleNavigation('upcoming-events')} className="mobile-nav-link">Upcoming Events</button></li>
            <li><button onClick={() => handleNavigation('testimonials')} className="mobile-nav-link">Reviews</button></li>
            <li><button onClick={() => navigateToPage('/about')} className="mobile-nav-link">About</button></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
