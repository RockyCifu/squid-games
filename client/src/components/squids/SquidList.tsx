import React, { FC } from "react";

import { Redirect } from "react-router-dom";

import { usePaginatedSquids } from "./hooks/usePaginatedSquids";
import { Squid } from "./resources/interfaces";
import { SquidForm } from "./SquidForm";
import { SquidTile } from "./SquidTile";

import "./styles/squidList.pcss";

export const SquidList: FC = () => {
  const { squids, paginationLinkList, isLoading, isError, error } = usePaginatedSquids(3);

  if (isError && error?.request?.status === 404) {
    return <Redirect to="/404" />;
  }

  const squidTiles = squids?.map((squid: Squid) => <SquidTile key={squid.id} squid={squid} />);

  return (
    <div className="squid-container">
      <div className="squid-section">
        <h1 className="squid-section__title">Active Squids</h1>
        <p className="squid-section__tag-line">Are you ready to rumble with these guys?!</p>

        {isLoading ? (
          <p className="squid-section__squid-list">Loading...</p>
        ) : (
          <ul className="squid-section__squid-list">{squidTiles}</ul>
        )}
        {paginationLinkList}
      </div>
      <SquidForm />
    </div>
  );
};
