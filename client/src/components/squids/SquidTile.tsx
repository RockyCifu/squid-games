import React, { FC } from "react";
import "./styles/squidTile.pcss";

import { Link } from "react-router-dom";

import { Squid } from "../../models/Squid";

export const SquidTile: FC<{ squid: Squid }> = ({ squid }) => {
  const imagePath = `/images/${squid.species.toLowerCase().replace(" ", "-")}-squid.png`;

  return (
    <Link to={`/squids/${squid.id}`}>
      <li className="squid-card">
        <div className="squid-card__image-container">
          <img className="squid-card__image" src={imagePath} alt={squid.species} />
        </div>
        <dl className="squid-card__info-container">
          <div className="squid-card__info-row">
            <dt className="squid-card__label">Name: </dt>
            <dd>{squid.name}</dd>
          </div>
          <div className="squid-card__info-row">
            <dt className="squid-card__label">Species: </dt>
            <dd>{squid.species}</dd>
          </div>
          <div className="squid-card__info-row">
            <dt className="squid-card__label">Power: </dt>
            <dd>{squid.specialPower}</dd>
          </div>
          <div className="squid-card__info-row">
            <dt className="squid-card__label">Experience: </dt>
            <dd>{squid.experiencePoints}</dd>
          </div>
        </dl>
      </li>
    </Link>
  );
};
