import React from "react";

export const SelectInput = ({ field, values, register }) => {
  const options = values.map((value) => (
    <option key={value} value={value}>
      {value}
    </option>
  ));

  return (
    <select
      id={field}
      {...register(field, {
        required: "* This entry is required",
      })}
    >
      <option value=""></option>
      {options}
    </select>
  );
};
