import React from "react";
import "./styles/squidList.pcss";

import { useSquids } from "./hooks/useSquids";
import { SquidTile } from "./SquidTile";

export const SquidList = () => {
  const { data, isLoading } = useSquids();

  const squidTiles = data?.squids.map((squid) => <SquidTile key={squid.id} squid={squid} />);

  return (
    <>
      <h1 className="squid-section-title">Players</h1>
      {isLoading ? <p>Loading...</p> : <ul className="squid-list">{squidTiles}</ul>}
    </>
  );
};
