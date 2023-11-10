// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content'; // Import the Content component
import './App.css'; // Import your global styles
import './styles/Content.css'; // Import the Content component styles

const App = () => {
  return (
    <>
      <Navbar />
      <Content /> {/* Include the Content component */}
    </>
  );
};

export default App;
