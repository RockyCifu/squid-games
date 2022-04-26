const Model = require("./Model");

class Squid extends Model {
  static get tableName() {
    return "squids";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "experiencePoints", "species", "specialPower"],
      properties: {
        id: { type: "integer" },
        name: { type: "string", minLength: 1, maxLength: 255 },
        experiencePoints: { type: "number", minimum: 1, maximum: 1000 },
        species: { type: "string", minLength: 1, maxLength: 255 },
        specialPower: { type: "string", minLength: 1, maxLength: 255 },
      },
    };
  }
}

module.exports = Squid;
