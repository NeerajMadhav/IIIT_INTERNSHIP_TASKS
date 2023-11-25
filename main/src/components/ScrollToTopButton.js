import React, { useState, useEffect } from 'react';
import '../styles/ScrollToTopButton.css'; // Adjust the path based on your project structure

const ScrollToTopButton = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a
      href="#top"
      className={`back-to-top ${isScrolling ? 'active' : ''}`}
      onClick={handleScrollToTop}
    >
      <span className="vertical-text">↑</span>
    </a>
  );
};

export default ScrollToTopButton;
