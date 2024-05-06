import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="home">
      <nav className="nav-bar">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/create-article" className="nav-item-link">
              Articles
            </a>
          </li>
          <li className="nav-item">
            <a href="/result" className="nav-item-link">
              Result
            </a>
          </li>
        </ul>
      </nav>
      <div className="hero-container">
        <h1 className="hero-title">Law Article Portal</h1>
        <p>Your one stop for all Law articles</p>
      </div>
    </div>
  );
};

export default App;
