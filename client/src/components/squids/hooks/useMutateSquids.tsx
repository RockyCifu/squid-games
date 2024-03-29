import { AxiosError, AxiosResponse } from "axios";
import { useMutation, UseMutationResult } from "react-query";

import { ApiClient } from "../../../backend/ApiClient";
import { Squid } from "../../../models/Squid";

export const useMutateSquids = (): UseMutationResult<AxiosResponse, AxiosError> =>
  useMutation((values: Squid) => ApiClient.post("/squids", { squid: values }));
