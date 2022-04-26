import React, { FC } from "react";

import { UseFormRegister, FieldValues } from "react-hook-form";

import { Validations } from "../squids/resources/interfaces";

interface Props {
  field: string;
  values: Array<string>;
  register: UseFormRegister<FieldValues>;
  labelText: string;
  error: { message?: string };
  serverError: Array<{ message?: string }>;
  classPrefix: string;
  validations: Validations;
}

export const SelectInput: FC<Props> = ({
  field,
  values,
  register,
  labelText,
  error,
  serverError,
  classPrefix,
  validations,
}) => {
  const options = values.map((value) => (
    <option key={value} value={value}>
      {value}
    </option>
  ));

  return (
    <label className={`${classPrefix}__input-group`} htmlFor={field}>
      <span>{`${labelText}: `}</span>
      <select id={field} {...register(field, { required: validations.required })}>
        <option value="" aria-label="Blank Value" />
        {options}
      </select>
      {error && <p className={`${classPrefix}__error-message`}>{error.message}</p>}
      {serverError && (
        <p className={`${classPrefix}__error-message`}>{`${field}: ${serverError[0].message}`}</p>
      )}
    </label>
  );
};
