//import * as knex from 'knex';

/*module.exports = require('knex')({
    client: 'pg',
    version:'9.3',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : '12345678+',
      database : 'trabalho'
    }
  });


  const conn = knex({
    client: 'pg',
    version:'9.3',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : '12345678+',
      database : 'trabalho'
  });*/

  //module.exports = knex;
  //nest
  export namespace Knex {
    export const config = {
      client: 'pg',
      version:'9.3',
      connection: {
        host : '127.0.0.1',
        user : 'postgres',
        password : '12345678+',
        database : 'trabalho',
      migrations: {
        tableName: 'KnexMigrations',
      },
    }
    }
  }