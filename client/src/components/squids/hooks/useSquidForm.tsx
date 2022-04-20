import { useState } from "react";

import { AxiosError } from "axios";
import {
  useForm,
  UseFormRegister,
  UseFormHandleSubmit,
  FieldError,
  FieldValues,
} from "react-hook-form";
import { useQueryClient } from "react-query";

import { useMutateSquids } from "./useMutateSquids";

type FormData = {
  name: string;
  species: string;
  specialPower: string;
  experiencePoints: number;
};

interface SquidForm {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onSubmit: (data: FormData) => void;
  errors: {
    name?: FieldError;
    species?: FieldError;
    specialPower?: FieldError;
    experiencePoints?: FieldError;
  };
  serverError: {
    name?: Array<{ message: string }>;
    species?: Array<{ message: string }>;
    specialPower?: Array<{ message: string }>;
    experiencePoints?: Array<{ message: string }>;
  };
}

export const useSquidForm = (): SquidForm => {
  const [serverError, setServerError] = useState<{
    name?: Array<{ message: string }>;
    species?: Array<{ message: string }>;
    specialPower?: Array<{ message: string }>;
    experiencePoints?: Array<{ message: string }>;
  }>({});

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
