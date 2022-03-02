import React from "react";

import "./styles/squidList.pcss";

import { usePaginatedSquids } from "./hooks/usePaginatedSquids";
import { SquidForm } from "./SquidForm";
import { SquidTile } from "./SquidTile";

export const SquidList = () => {
  const { squids, paginationLinkList, isLoading } = usePaginatedSquids(10);

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
