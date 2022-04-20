import React, { FC } from "react";

import { UseFormRegister, FieldValues } from "react-hook-form";

import { validations } from "../resources/validations";

const { required, experiencePointsMin, experiencePointsMax } = validations;

interface Props {
  field: string;
  register: UseFormRegister<FieldValues>;
  labelText: string;
  error: { message?: string };
  serverError: Array<{ message: string }>;
}

export const NumberInput: FC<Props> = ({ field, register, labelText, error, serverError }) => (
  <label className="squid-form__input-group" htmlFor={field}>
    <span>{`${labelText}: `}</span>
    <input
      id={field}
      type="number"
      {...register(field, {
        required,
        min: experiencePointsMin,
        max: experiencePointsMax,
      })}
    />
    {error && <p className="squid-form__error-message">{error.message}</p>}
    {serverError && (
      <p className="squid-form__error-message">{`${field}: ${serverError[0].message}`}</p>
    )}
  </label>
);
