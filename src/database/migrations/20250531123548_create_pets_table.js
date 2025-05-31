/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('pets', table => {
    table.increments('id').primary();
    table.string('nomeTutor').notNullable();
    table.string('contatoTutor').notNullable();
    table.string('nomePet').notNullable();
    table.string('especie').notNullable();
    table.string('raca').notNullable();
    table.date('dataEntrada').notNullable();
    table.date('dataSaida');
    table.integer('diariasAteAgora');
    table.integer('diariasTotaisPrevistas');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('pets');
};