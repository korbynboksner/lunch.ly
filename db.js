/** Database for lunchly */

const pg = require("pg");

const db = new pg.Client({
    user: "korb",
    password: "123",
    host: "localhost",
    port: 5432,
    database: "lunchly"


});

db.connect();

module.exports = db;
