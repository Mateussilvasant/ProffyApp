import Knex from 'knex';

export const connection = Knex({
    client : "mysql",
    version: '5.7',
    connection : {
        host : "127.0.0.1",
        user : "root",
        password : "pass123",
        database : "proffyapp"
    },
    useNullAsDefault: true
});

