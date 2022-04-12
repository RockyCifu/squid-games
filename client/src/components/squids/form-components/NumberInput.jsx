import React from "react";

import { validations } from "../resources/validations";

const { required, experiencePointsMin, experiencePointsMax } = validations;

export const NumberInput = ({ field, register, labelText, error, serverError }) => (
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
    {serverError && <p className="squid-form__error-message">{serverError[0].message}</p>}
  </label>
);
