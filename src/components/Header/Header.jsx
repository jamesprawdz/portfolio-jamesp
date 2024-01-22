// src/components/Header/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../../assets/IMG_6527.JPEG'; // Import the image

const Header = () => {
  return (
    <header>
      <div className="header-branding">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={profileImage} alt="James Prawdzik" className="profile-image" />
          <div className="header-title">
            <h1>James Prawdzik</h1>
            <p>Software Engineer</p>
          </div>
        </Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
