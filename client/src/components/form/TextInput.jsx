import React from "react";

export const TextInput = ({
  field,
  register,
  labelText,
  error,
  serverError,
  classPrefix,
  validations,
}) => (
  <label className={`${classPrefix}__input-group`} htmlFor={field}>
    <span>{`${labelText}: `}</span>
    <input id={field} {...register(field, { required: validations.required })} />
    {error && <p className={`${classPrefix}__error-message`}>{error.message}</p>}
    {serverError && (
      <p className={`${classPrefix}__error-message`}>{`${field}: ${serverError[0].message}`}</p>
    )}
  </label>
);
