import React, { useState, useRef } from 'react';
import '../styles/Card.scss'; // Make sure to import your CSS file

const Card = ({ dataImage, title, content }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const cardStyle = {
    transform: `perspective(800px) translateY(${hovered ? '-11px' : '0'})`,
    transition: 'transform 0.3s ease-in-out',
    boxShadow: hovered
      ? 'rgba(128, 128, 128, 0.2) 0 0 17px 5px, rgba(128, 128, 128, 1) 0 0 0 1px, rgba(255, 255, 255, 0.2) 0 30px 60px 0, inset #333 0 0 0 5px, inset white 0 0 0 6px'
      : 'none',
  };
  


  const cardBgStyle = {
    opacity: hovered ? '0.8' : '0.5',
    transition: hovered
      ? '1s cubic-bezier(0.445, 0.05, 0.55, 0.5), opacity 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95)'
      : '1s cubic-bezier(0.445, 0.05, 0.55, 0.5), opacity 5s cubic-bezier(0.445, 0.05, 0.55, 0.95)',
    pointerEvents: 'none',
  };

  const cardInfoStyle = {
    transform: `translateY(${hovered ? '0%' : '40%'})`,
    transition: hovered ? '0.3s 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)' : 'none',
  };

  const titleStyle = {
    textShadow: 'rgba(0, 0, 0, 0.5) 0 10px 10px',
  };

  const pStyle = {
    opacity: hovered ? '1' : '0',
    textShadow: 'rgba(0, 0, 0, 1) 0 2px 3px',
    transition: hovered ? '0.6s 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)' : 'none',
  };

  return (
    <div
      className="card-wrap"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={cardStyle}
    >
      <div className="card">
        <div className="card-bg" style={{ ...cardBgStyle, backgroundImage: `url(${dataImage})` }}></div>
        <div className="card-info" style={cardInfoStyle}>
          <h2 style={titleStyle}>{title}</h2>
          <p style={pStyle}>{content}</p>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    
    <>
    <section id='Cards'>
      <div class="startup-heading">StartUp Terminology</div>
    <div className="container">
          <Card
              dataImage={require('../assets/b2b.jpg')}
              title="Business-to-Business"
              content="B2B involves businesses selling products or services directly to other businesses rather than individual consumers" />
          <Card
              dataImage={require('../assets/incubator.jpg')}
              title="Startup Incubation"
              content="Incubation is a support process where startups receive mentorship, resources, and infrastructure to foster their early-stage development." />
          <Card
              dataImage={require('../assets/angel.jpg')}
              title="Angel Investors"
              content="Angel investors are individuals who provide financial support and guidance to startups in exchange for equity in the company." />
          <Card
              dataImage={require('../assets/exit.jpg')}
              title="Exit Strategy"
              content="Exit strategy outlines a plan for entrepreneurs or investors to exit a business, typically through selling the company or going public." />
          {/* Repeat the Card component for other cards */}
      </div>
      </section>
      </>
  );
};

export default App;

