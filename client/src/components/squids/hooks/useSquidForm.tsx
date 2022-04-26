import { useState } from "react";

import { AxiosError } from "axios";
import { useForm, UseFormRegister, UseFormHandleSubmit, FieldValues } from "react-hook-form";
import { useQueryClient } from "react-query";

import { SquidError, SquidServerError } from "../resources/interfaces";
import { useMutateSquids } from "./useMutateSquids";
interface SquidForm {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onSubmit: (data: FormData) => void;
  errors: SquidError;
  serverError: SquidServerError;
}

export const useSquidForm = (): SquidForm => {
  const [serverError, setServerError] = useState<SquidServerError>({});

  const { mutate: createSquid } = useMutateSquids();

  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      name: null,
      species: null,
      specialPower: null,
      experiencePoints: null,
    },
  });

  const onSubmit = (data: FieldValues): void => {
    createSquid(data, {
      onSuccess: () => {
        queryClient.invalidateQueries();
        setServerError({});
        reset();
      },
      onError: (error: AxiosError) => {
        const { data } = error.response.data.error;
        setServerError(data);
      },
    });
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    serverError,
  };
};
