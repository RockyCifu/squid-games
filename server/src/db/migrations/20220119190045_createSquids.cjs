/**
 * @typedef {import("knex")} Knex
 */

const tableName = "squids";

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable(tableName, (table) => {
    table.bigIncrements("id");
    table.string("name").notNullable();
    table.string("species").notNullable();
    table.string("specialPower");
    table.integer("experiencePoints").notNullable().defaultTo(0);
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
  });
};

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  return knex.schema.dropTableIfExists(tableName);
};
