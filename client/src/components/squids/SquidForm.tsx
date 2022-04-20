import React, { FC } from "react";

import { NumberInput } from "./form-components/NumberInput";
import { SelectInput } from "./form-components/SelectInput";
import { TextInput } from "./form-components/TextInput";
import { useSquidForm } from "./hooks/useSquidForm";
import { powersArray } from "./resources/powers";
import { speciesArray } from "./resources/species";

import "./styles/squidForm.pcss";

export const SquidForm: FC = () => {
  const { register, handleSubmit, onSubmit, errors, serverError } = useSquidForm();

  return (
    <form className="squid-form" onSubmit={handleSubmit(onSubmit)}>
      <h3 className="squid-form__title">Entry Form</h3>
      <p className="squid-form__tag-line">Enter the most talked about battle royal in history!</p>

      <TextInput
        field="name"
        register={register}
        labelText="Name"
        error={errors.name}
        serverError={serverError.name}
      />

      <SelectInput
        field="species"
        values={speciesArray}
        register={register}
        labelText="Species"
        error={errors.species}
        serverError={serverError.species}
      />

      <SelectInput
        field="specialPower"
        values={powersArray}
        register={register}
        labelText="Special Power"
        error={errors.specialPower}
        serverError={serverError.specialPower}
      />

      <NumberInput
        field="experiencePoints"
        register={register}
        labelText="Experience"
        error={errors.experiencePoints}
        serverError={serverError.experiencePoints}
      />

      <input className="squid-form__submit-btn" type="submit" />
    </form>
  );
};
