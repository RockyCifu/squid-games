import React, { FC } from "react";

import { Link } from "react-router-dom";
import "./styles/navbar.pcss";

export const Navbar: FC = () => (
  <div className="navbar">
    <div className="navbar__container">
      <p className="navbar__title">Squid Games</p>
      <ul className="navbar__link-list">
        <li className="navbar__link">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar__link">
          <Link to="/">About</Link>
        </li>
        <li className="navbar__link">
          <Link to="/">Donate</Link>
        </li>
      </ul>
    </div>
  </div>
);
