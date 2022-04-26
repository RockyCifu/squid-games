import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "react-query";

import { ApiClient } from "../../../backend/ApiClient";
import { Squid } from "../../../models/Squid";

export const useFetchSquid = (id: string): UseQueryResult<Squid, AxiosError> =>
  useQuery(["squid", id], () => ApiClient.get(`/squids/${id}`).then((res) => res.data.squid));
