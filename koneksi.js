const promise = require('bluebird');

const options = {
    promiseLib: promise
}

const pgp = require('pg-promise')(options);
const connectionString = 'postgres://postgres:fadli@localhost:5432/belcrud';
const db = pgp(connectionString);

module.exports = {
    db
}