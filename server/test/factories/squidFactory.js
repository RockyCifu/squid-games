import faker from "faker";
import { Factory } from "rosie";

import { Squid } from "../../src/models/index.js";

const species = [
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

const powers = [
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

const getRandom = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

Factory.define("Squid", Squid).attrs({
  name: () => faker.name.firstName(),
  species: () => getRandom(species),
  specialPower: () => getRandom(powers),
  experiencePoints: () => Math.floor(Math.random() * 1000 + 1),
});

export { Factory };
