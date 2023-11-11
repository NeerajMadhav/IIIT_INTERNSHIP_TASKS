// App.js

import React from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Card from './components/Card'; // Assuming the Card component is in the same directory
import './App.css'; // Import your global styles
import './styles/Content.css'; // Import the Content component styles

const App = () => {
  return (
    <>
      <Navbar />
      <Content />
      <Card/>
    </>
  );
};

export default App;
