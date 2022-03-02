import { useQuery } from "react-query";

import { ApiClient } from "../../../backend/ApiClient";

export const useSquids = (page, limit) =>
  useQuery(["squids", page], () =>
    ApiClient.get("/squids", { params: { page, limit } }).then((res) => res.data)
  );
