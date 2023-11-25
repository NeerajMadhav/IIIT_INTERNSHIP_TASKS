// Navbar.js

import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = ({ toggleSidebar }) => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Ensure the search input is focused when the sidebar is closed
  useEffect(() => {
    if (!searchInput.trim()) {
      document.getElementById('searchInput').focus();
    }
  }, [toggleSidebar, searchInput]);

  const handleSearch = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);

    // If there's no input, reset search results
    if (!inputValue.trim()) {
      setSearchResults([]);
      return;
    }

    // Get all text content of the page
    const pageText = document.body.innerText;

    // Create a regular expression to match the search input
    const regex = new RegExp(inputValue, 'gi');

    // Find all matches in the page text
    const matches = pageText.match(regex);

    // Update search results
    setSearchResults(matches || []);
  };

  const handleClear = () => {
    setSearchInput('');
    setSearchResults([]);
  };

  return (
    <div className="navbar">
      <button className="menu-btn" onClick={toggleSidebar}>
        &#9776;
      </button>
      <div className="navbar__logo">StartUp</div>
      <div className="navbar__spacer"></div>
      <div className="navbar__search">
        <input
          id="searchInput"
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={handleSearch}
        />
        {searchInput && (
          <button className="clear-button" onClick={handleClear}>
            ✖
          </button>
        )}
        {searchResults.length > 0 && (
          <div className="search-results">
            <ul>
              {searchResults.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
