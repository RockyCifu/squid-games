import React from "react";

import { Link } from "react-router-dom";
import "./styles/navbar.pcss";

export const Navbar = () => (
  <div className="navbar">
    <div className="navbar__container">
      <p className="navbar__title">SQUID GAMES</p>
      <ul className="navbar__link-list">
        <li className="navbar__link">
          <Link to="/">HOME</Link>
        </li>
        <li className="navbar__link">
          <Link to="/">ABOUT</Link>
        </li>
        <li className="navbar__link">
          <Link to="/">DONATE</Link>
        </li>
      </ul>
    </div>
  </div>
);
