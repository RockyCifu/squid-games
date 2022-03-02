import React, { useState } from "react";

import "./styles/squidList.pcss";

import { usePaginationList } from "./hooks/usePaginationList";
import { useSquids } from "./hooks/useSquids";
import { SquidTile } from "./SquidTile";

export const SquidList = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useSquids(page, 10);

  const numPages = data?.pages || 1;
  const paginationList = usePaginationList(numPages, page, setPage);
  const squidTiles = data?.squids?.map((squid) => <SquidTile key={squid.id} squid={squid} />);

  return (
    <>
      <h1 className="squid-section-title">Players</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ul className="squid-list">{squidTiles}</ul>
          <ul className="pagination-list">{paginationList}</ul>
        </>
      )}
    </>
  );
};
