import React, { FC } from "react";

import { FieldValues, UseFormRegister } from "react-hook-form";

import { validations } from "../resources/validations";

interface Props {
  field: string;
  register: UseFormRegister<FieldValues>;
  labelText: string;
  error: { message?: string };
  serverError: Array<{ message: string }>;
}

export const TextInput: FC<Props> = ({ field, register, labelText, error, serverError }) => (
  <label className="squid-form__input-group" htmlFor={field}>
    <span>{`${labelText}: `}</span>
    <input id={field} {...register(field, { required: validations.required })} />
    {error && <p className="squid-form__error-message">{error.message}</p>}
    {serverError && (
      <p className="squid-form__error-message">{`${field}: ${serverError[0].message}`}</p>
    )}
  </label>
);
