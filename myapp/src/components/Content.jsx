// src/components/Content.js
import React from 'react';
import '../styles/Content.css';
import workspaceImage from '../assets/workspace.jpg'; // Import the image

const Content = () => {
  return (
    <div className="content">
      <div className="content__image">
        <img src={workspaceImage} alt="Startup Workspace" />
      </div>
      <div className="content__text">
        <h2>What is StartUp?</h2>
        <p className="content__description">
          <span className="content__highlight">A startup</span> is a newly established business that aims to bring innovative products, services, or solutions to the market.
          Typically characterized by a dynamic and fast-paced environment, startups often operate with limited resources and focus on scalability.
          They are driven by a vision to address a specific market need and have the potential for rapid growth.
        </p>
      </div>
    </div>
  );
}

export default Content;
