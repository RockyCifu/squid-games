import React from "react";

import { validations } from "../resources/validations";

export const TextInput = ({ field, register, labelText, error, serverError }) => (
  <label className="squid-form__input-group" htmlFor={field}>
    <span>{`${labelText}: `}</span>
    <input id={field} {...register(field, { required: validations.required })} />
    {error && <p className="squid-form__error-message">{error.message}</p>}
    {serverError && (
      <p className="squid-form__error-message">{`${field}: ${serverError[0].message}`}</p>
    )}
  </label>
);
