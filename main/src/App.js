// App.js

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Card from './components/Card';
import Table from './components/Table';
import Footer from './components/Footer';
import Pie from './components/PieChart';
import StartupForm from './components/Form';
import ScrollToTopButton from './components/ScrollToTopButton';
import './App.css';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className={`app ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <Content />
      <Card />
      <Table />
      <Pie />
      <StartupForm />
      <Footer />
      <ScrollToTopButton /> 
    </div>
  );
}

export default App;
