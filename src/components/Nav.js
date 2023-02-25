import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="nav-bar">
    <div className="nav-brand">Bookstore CMS</div>
    <ul className="nav-links">
      <li><Link to="/">BOOKS</Link></li>
      <li><Link to="/categories">CATEGORIES</Link></li>
    </ul>
    <button className="icon-button" type="button">
      <span className="material-icons">person</span>
    </button>
  </nav>
);

export default Nav;
