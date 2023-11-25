import React from 'react';
import Table from './Table';
import '../styles/Table.css'; // Import the CSS file

const App = () => {
  const startupData = [
    { rank: 1, name: 'CRED', founded: 2018, sector: 'Fintech', valuation: '$6.8', description: 'Exclusive rewards and cashback platform for high-spending individuals', website: 'https://cred.club/customer-care' },
    { rank: 2, name: 'PharmEasy', founded: 2013, sector: 'E-commerce', valuation: '$4.6', description: 'Online pharmacy platform for medicines, healthcare products, and diagnostic services', website: 'https://pharmeasy.in/' },
    { rank: 3, name: 'Digit Insurance', founded: 2017, sector: 'Insurtech', valuation: '$4.4', description: 'Digital health insurance platform offering personalized plans and hassle-free claims', website: 'https://www.godigit.com/' },
    { rank: 4, name: 'Meesho', founded: 2015, sector: 'E-commerce', valuation: '$4.2', description: 'Social commerce platform enabling micro-entrepreneurs to sell products directly to consumers', website: 'https://www.meesho.com/' },
    { rank: 5, name: 'Groww', founded: 2016, sector: 'Fintech', valuation: '$4.0', description: 'Zero-commission investment platform for stocks, mutual funds, and ETFs', website: 'https://groww.in/' },
    { rank: 6, name: 'Nykaa', founded: 2012, sector: 'E-commerce', valuation: '$3.6', description: 'Online beauty and wellness retailer offering a wide range of products and expert advice', website: 'https://www.nykaa.com/' },
    { rank: 7, name: 'Udaan', founded: 2016, sector: 'E-commerce', valuation: '$3.4', description: 'B2B e-commerce platform connecting businesses with manufacturers, wholesalers, and retailers', website: 'https://udaan.com/' },
    { rank: 8, name: 'Dream11', founded: 2009, sector: 'Sports Tech', valuation: '$3.2', description: 'Online fantasy sports platform enabling users to create virtual teams and compete for prizes', website: 'https://www.dream11.com/' },

  ];

  return (
    <section id="Table">
    <div>
      <h1>Leading Indian Startups</h1>
      <table className="fixed_headers">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Startup Name</th>
            <th>Founded</th>
            <th>Sector</th>
            <th>Valuation</th>
            <th>Description</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {startupData.map((startup) => (
            <tr key={startup.rank}>
              <td>{startup.rank}</td>
              <td>{startup.name}</td>
              <td>{startup.founded}</td>
              <td>{startup.sector}</td>
              <td>{startup.valuation}</td>
              <td>{startup.description}</td>
              <td>
                <a
                  href={startup.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {startup.website}
                  
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4></h4>
    </div>
    </section>
  );
};

export default App;