import { AxiosError, AxiosResponse } from "axios";
import { useMutation, UseMutationResult } from "react-query";

import { ApiClient } from "../../../backend/ApiClient";

interface Squid {
  name: string;
  species: string;
  specialPower: string;
  experiencePoints: number;
}

export const useMutateSquids = (): UseMutationResult<AxiosResponse, AxiosError> =>
  useMutation((values: Squid) => ApiClient.post("/squids", { squid: values }));
