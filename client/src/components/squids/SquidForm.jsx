import React from "react";

import { useForm } from "react-hook-form";

export const SquidForm = () => {
  const { register, handleSubmit } = useForm();

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

  const speciesOptions = speciesArray.map((species) => (
    <option key={species} value={species}>
      {species} Squid
    </option>
  ));

  const powersCheckboxes = powersArray.map((power) => (
    <label htmlFor={power} key={power}>
      Special Power
      <input id={power} type="radio" {...register("specialPower")} /> {power}
    </label>
  ));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">
        Name
        <input id="name" {...register("name", { required: "Please enter a name." })} />
      </label>

      <label htmlFor="species">
        <select id="species" {...register("species", {})}>
          <option value="">Select...</option>
          {speciesOptions}
        </select>
      </label>

      {powersCheckboxes}

      <label htmlFor="experiencePoints">
        <input id="experiencePoints" {...register("experiencePoints")} />
      </label>

      <input type="submit" />
    </form>
  );
};
