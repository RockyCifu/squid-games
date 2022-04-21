import { useState } from "react";

import { useForm } from "react-hook-form";
import { useQueryClient } from "react-query";

import { useMutateSquids } from "./useMutateSquids";

const defaultValues = {
  name: "",
  species: "",
  specialPower: "",
  experiencePoints: "",
};

export const useSquidForm = () => {
  const [serverError, setServerError] = useState({});

  const { mutate: createSquid } = useMutateSquids();

  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues });

  const onSubmit = (data) => {
    createSquid(data, {
      onSuccess: () => {
        queryClient.invalidateQueries();
        setServerError({});
        reset();
      },
      onError: (error) => {
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
