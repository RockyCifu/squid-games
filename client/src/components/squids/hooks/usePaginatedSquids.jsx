import React from "react";

import { useParams } from "react-router-dom";

import { SquidPaginationList } from "../SquidPaginationList";
import { useSquids } from "./useSquids";

export const usePaginatedSquids = (limit) => {
  const { page } = useParams();
  const currentPage = parseInt(page || "1", 10);

  const { data, isError, error, isLoading } = useSquids(currentPage, limit);
  const numPages = data?.pages || 1;

  if (isError) {
    if (error?.request?.status === 404) {
      // render a PageNotFound component
      alert("page not found");
    }
  }

  return {
    squids: data?.squids || [],
    paginationLinkList: <SquidPaginationList numPages={numPages} currentPage={currentPage} />,
    isLoading,
  };
};
