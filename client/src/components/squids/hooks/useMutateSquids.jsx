import { useMutation } from "react-query";

import { ApiClient } from "../../../backend/ApiClient";

export const useMutateSquids = () =>
  useMutation((values) => ApiClient.post("/squids", { squid: values }));
