import React, { FC } from "react";

import { format, parseISO } from "date-fns";
import { useParams, Redirect } from "react-router-dom";

import { useSquidShow } from "./hooks/useSquidShow";

export const SquidShow: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { squid, horoscope, error, isError, isLoading } = useSquidShow(id);

  if (isError && error?.request?.status === 404) {
    return <Redirect to="/404" />;
  }

  const imagePath = `/images/${squid?.species.toLowerCase().replace(" ", "-")}-squid.png`;

  return isLoading ? (
    <h2>Please wait while we fetch your squid...</h2>
  ) : (
    <div className="squid-show">
      <div className="squid-show__image-container">
        <img className="squid-show__image" src={imagePath} alt={squid.species} />
      </div>
      <dl className="squid-show__info-container">
        <div className="squid-show__info-row">
          <dt className="squid-show__label">Name: </dt>
          <dd>{squid.name}</dd>
        </div>
        <div className="squid-show__info-row">
          <dt className="squid-show__label">Species: </dt>
          <dd>{squid.species}</dd>
        </div>
        <div className="squid-show__info-row">
          <dt className="squid-show__label">Power: </dt>
          <dd>{squid.specialPower}</dd>
        </div>
        <div className="squid-show__info-row">
          <dt className="squid-show__label">Experience: </dt>
          <dd>{squid.experiencePoints}</dd>
        </div>
        {squid.birthday && (
          <div className="squid-show__info-row">
            <dt className="squid-show__label">Birthday: </dt>
            <dd>{format(parseISO(squid.birthday), "MMMM dd, yyyy")}</dd>
          </div>
        )}
        {horoscope && (
          <div className="squid-show__info-row">
            <dt className="squid-show__label">Astrological Sign: </dt>
            <dd>{horoscope}</dd>
          </div>
        )}
      </dl>
    </div>
  );
};
