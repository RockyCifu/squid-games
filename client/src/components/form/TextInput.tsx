import React, { FC } from "react";

import { UseFormRegister, FieldValues } from "react-hook-form";

import { Validations } from "../squids/resources/interfaces";

interface Props {
  field: string;
  register: UseFormRegister<FieldValues>;
  labelText: string;
  error: { message?: string };
  serverError: Array<{ message?: string }>;
  classPrefix: string;
  validations: Validations;
}

export const TextInput: FC<Props> = ({
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
