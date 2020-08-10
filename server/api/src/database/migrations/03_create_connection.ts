import Knex from 'knex';

export async function up(knex : Knex){
    return await knex.schema.createTable('connections', (table) =>{

        table.increments('id').primary();

        table.integer('user_id',11).unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())

    });
}

export async function down(knex : Knex){
   return knex.schema.dropTable('connections');
}