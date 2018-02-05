import React from 'react';
import './header.css';

function Header() {
  return (
    <header className="header-container">
      <div className="container">
        <div className="resources-header d-flex justify-content-between">
          <div>
            <img className="app-logo" src="./img/logo.png" alt="" />
            <span className="app-name"> SaveLinks </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
