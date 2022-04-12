import React from "react";

import { validations } from "../resources/validations";

export const SelectInput = ({ field, values, register, labelText, error, serverError }) => {
  const options = values.map((value) => (
    <option key={value} value={value}>
      {value}
    </option>
  ));

  return (
    <label className="squid-form__input-group" htmlFor={field}>
      <span>{`${labelText}: `}</span>
      <select id={field} {...register(field, { required: validations.required })}>
        <option value="" aria-label="Blank Value" />
        {options}
      </select>
      {error && <p className="squid-form__error-message">{error.message}</p>}
      {serverError && <p className="squid-form__error-message">{serverError[0].message}</p>}
    </label>
  );
};
