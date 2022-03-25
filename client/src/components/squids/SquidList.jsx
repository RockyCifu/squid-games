import React from "react";

import { Redirect } from "react-router-dom";

import { usePaginatedSquids } from "./hooks/usePaginatedSquids";
import { SquidForm } from "./SquidForm";
import { SquidTile } from "./SquidTile";

import "./styles/squidList.pcss";

export const SquidList = () => {
  const { squids, paginationLinkList, isLoading, isError, error } = usePaginatedSquids(6);

  if (isError && error?.request?.status === 404) {
    return <Redirect to="/404" />;
  }

  const squidTiles = squids?.map((squid) => <SquidTile key={squid.id} squid={squid} />);

  return (
    <>
      <h1 className="squid-section-title">Players</h1>
      {isLoading ? <p>Loading...</p> : <ul className="squid-list">{squidTiles}</ul>}
      {paginationLinkList}
      <SquidForm />
    </>
  );
};
