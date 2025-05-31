const knex = require('knex');

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './database/hotel-pets.sqlite3'  
  },
  useNullAsDefault: true
});

module.exports = db;
