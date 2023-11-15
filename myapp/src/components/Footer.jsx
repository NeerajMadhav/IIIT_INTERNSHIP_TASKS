import React from 'react';
import '../styles/Footer.css';
import git from '../assets/git1.png';
import telegram from '../assets/mail1.png';
import link from '../assets/link1.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logo">
          {/* Remove the unnecessary row names */}
        </div>
        <div className="footer__links">
          <ul className="footer__menu">
            <li className="footer__item">
              <a href="https://www.linkedin.com/" className="footer__link">
                <img src={link} alt=" LinkedIn" />
                {/* LinkedIn */}
              </a>
            </li>
            <li className="footer__item">
              <a href="https://github.com/" className="footer__link">
                <img src={git} alt=" GitHub" />
                {/* GitHub */}
              </a>
            </li>
            <li className="footer__item">
              <a href="https://t.me/" className="footer__link">
                <img src={telegram} alt=" Telegram" />
                {/* Telegram */}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <center><p>&copy; 2023 Your Website. All rights reserved.</p></center>
      </div>
    </footer>
  );
};

export default Footer;
