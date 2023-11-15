// App.js

import React from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Card from './components/Card';
import Table from './components/Table'; 
import Footer from './components/Footer';
import './styles/Content.css'; 
import './App.css';
import PieChartPage from './components/PieChart';

const App = () => {
  return (
    <>
      <Navbar />
      <Content />
      <Card/>
      <Table/>
      <Footer/>
    </>
  );
};

export default App;
