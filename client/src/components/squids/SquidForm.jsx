import React from "react";

import { NumberInput } from "../form/NumberInput";
import { SelectInput } from "../form/SelectInput";
import { TextInput } from "../form/TextInput";
import { useSquidForm } from "./hooks/useSquidForm";
import { powersArray } from "./resources/powers";
import { speciesArray } from "./resources/species";

import "./styles/squidForm.pcss";

import { validations } from "./resources/validations";

export const SquidForm = () => {
  const { register, handleSubmit, onSubmit, errors, serverError } = useSquidForm();

  return (
    <form className="squid-form" onSubmit={handleSubmit(onSubmit)}>
      <h3 className="squid-form__title">Entry Form</h3>
      <p className="squid-form__tag-line">Enter the most talked about battle royal in history!</p>

      <TextInput
        id="name"
        field="name"
        register={register}
        labelText="Name"
        error={errors.name}
        serverError={serverError.name}
        classPrefix={"squid-form"}
        validations={validations}
      />

      <SelectInput
        id="species"
        field="species"
        values={speciesArray}
        register={register}
        labelText="Species"
        error={errors.species}
        serverError={serverError.species}
        classPrefix={"squid-form"}
        validations={validations}
      />

      <SelectInput
        id="specialPower"
        field="specialPower"
        values={powersArray}
        register={register}
        labelText="Special Power"
        error={errors.specialPower}
        serverError={serverError.specialPower}
        classPrefix={"squid-form"}
        validations={validations}
      />

      <NumberInput
        field="experiencePoints"
        register={register}
        labelText="Experience"
        error={errors.experiencePoints}
        serverError={serverError.experiencePoints}
        classPrefix={"squid-form"}
        validations={validations}
      />

      <input className="squid-form__submit-btn" type="submit" />
    </form>
  );
};
