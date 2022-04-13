import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "react-query";

import { ApiClient } from "../../../backend/ApiClient";

interface Squid {
  name: string;
  species: string;
  specialPower: string;
  experiencePoints: number;
}
interface ResponseObject {
  squids: Squid[];
  pages: number;
}

export const useSquids = (
  page: number,
  limit: number
): UseQueryResult<ResponseObject, AxiosError> =>
  useQuery(["squids", page], () =>
    ApiClient.get("/squids", { params: { page, limit } }).then((res) => res.data)
  );
