import { AxiosError } from "axios";

import { Squid } from "../../../models/Squid";
import { useFetchSquid } from "./useFetchSquid";
import { useHoroscope } from "./useHoroscope";

interface SquidShow {
  squid: Squid;
  horoscope: string;
  error: AxiosError;
  isError: boolean;
  isLoading: boolean;
}

export const useSquidShow = (id: string): SquidShow => {
  const { data: squid, isLoading, isError, error } = useFetchSquid(id);
  const horoscope = useHoroscope(squid ? squid.birthday : null);
  return { squid, horoscope, error, isError, isLoading };
};
