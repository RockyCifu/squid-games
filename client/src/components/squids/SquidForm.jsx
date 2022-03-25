import React from "react";

import { useForm } from "react-hook-form";
import { SelectInput } from "../common/SelectInput";

import "./styles/squidForm.pcss";

export const SquidForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      species: "",
      specialPower: "",
      experiencePoints: "",
    },
  });

  const min = {
    value: 1,
    message: "* Must be between 1 - 1000",
  };

  const max = {
    value: 1000,
    message: "* Must be between 1 - 1000",
  };

  const required = { value: true, message: "* This entry is required" };

  const onSubmit = (data) => console.log(JSON.stringify(data));

  // will fetch later from api endpoint
  const speciesArray = [
    "Cock-Eyed",
    "Humboldt",
    "Glass",
    "Bigfin",
    "Colossal",
    "Bush-Club",
    "Grimaldi Scaled",
    "Whiplash",
    "Market",
    "Japanese Flying",
  ];

  const powersArray = [
    "Cloning",
    "Super Speed",
    "Teleportation",
    "Shapeshifting",
    "Regeneration",
    "Invisibility",
    "Super Strength",
    "Telekinesis",
    "Elemental Control",
    "Telepathy",
  ];

  return (
    <form className="squid-form" onSubmit={handleSubmit(onSubmit)}>
      <h3 className="squid-form__title">Squid Entry Form</h3>
      <p className="squid-form__tag-line">
        Enter to compete in the most talked about battle royal in history!
      </p>

      <div className="squid-form__input-group">
        <label htmlFor="name">Name: </label>
        <input id="name" {...register("name", { required })} />
        {errors.name && <p className="squid-form__error-message">{errors.name.message}</p>}
      </div>

      <div className="squid-form__input-group">
        <label htmlFor="species">Species: </label>
        <SelectInput field="species" values={speciesArray} register={register} />
        {errors.species && <p className="squid-form__error-message">{errors.species.message}</p>}
      </div>

      <div className="squid-form__input-group">
        <label htmlFor="specialPower">Power: </label>
        <SelectInput field="specialPower" values={powersArray} register={register} />
        {errors.specialPower && (
          <p className="squid-form__error-message">{errors.specialPower.message}</p>
        )}
      </div>

      <div className="squid-form__input-group">
        <label htmlFor="experiencePoints">Experience: </label>
        <input
          id="experiencePoints"
          type="number"
          {...register("experiencePoints", {
            required,
            min,
            max,
          })}
        />
        {errors.experiencePoints && (
          <p className="squid-form__error-message">{errors.experiencePoints.message}</p>
        )}
      </div>

      <input className="squid-form__submit-btn" type="submit" />
    </form>
  );
};
