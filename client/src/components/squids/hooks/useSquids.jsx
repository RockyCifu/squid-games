import { useQuery } from "react-query";

import { ApiClient } from "../../../backend/ApiClient";

export const useSquids = () =>
  useQuery("squids", () => ApiClient.get("/squids").then((res) => res.data));
