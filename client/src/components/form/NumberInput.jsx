import React from "react";

export const NumberInput = ({
  field,
  register,
  labelText,
  error,
  serverError,
  classPrefix,
  validations,
}) => {
  return (
    <label className={`${classPrefix}__input-group`} htmlFor={field}>
      <span>{`${labelText}: `}</span>
      <input
        id={field}
        type="number"
        {...register(field, {
          required: validations.required,
          min: validations.min,
          max: validations.max,
        })}
      />
      {error && <p className={`${classPrefix}__error-message`}>{error.message}</p>}
      {serverError && (
        <p className={`${classPrefix}__error-message`}>{`${field}: ${serverError[0].message}`}</p>
      )}
    </label>
  );
};
