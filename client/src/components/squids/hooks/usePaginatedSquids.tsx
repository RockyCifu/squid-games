import React, { ReactElement } from "react";

import { AxiosError } from "axios";
import { useParams } from "react-router-dom";

import { Squid } from "../../../models/Squid";
import { SquidPaginationList } from "../SquidPaginationList";
import { useSquids } from "./useSquids";

interface PaginatedSquids {
  squids: Array<Squid> | [];
  paginationLinkList: ReactElement;
  isLoading: boolean;
  isError: boolean;
  error: AxiosError;
}

export const usePaginatedSquids = (limit: number): PaginatedSquids => {
  const { page } = useParams<{ page: string }>();
  const currentPage = parseInt(page || "1", 10);

  const { data, isError, error, isLoading } = useSquids(currentPage, limit);
  const numPages = data?.pages || 1;

  return {
    squids: data?.squids || [],
    paginationLinkList: <SquidPaginationList numPages={numPages} currentPage={currentPage} />,
    isLoading,
    isError,
    error,
  };
};
