import React, { FC } from "react";

import { AxiosError } from "axios";

import { validations } from "../resources/validations";

interface Squid {
  name: string;
  species: string;
  specialPower: string;
  experiencePoints: number;
}

export const TextInput: FC<{
  field: string;
  register: unknown;
  labelText: string;
  error: FieldError;
}> = ({ field, register, labelText, error, serverError }) => (
  <label className="squid-form__input-group" htmlFor={field}>
    <span>{`${labelText}: `}</span>
    <input id={field} {...register(field, { required: validations.required })} />
    {error && <p className="squid-form__error-message">{error.message}</p>}
    {serverError && (
      <p className="squid-form__error-message">{`${field}: ${serverError[0].message}`}</p>
    )}
  </label>
);
