const { Pool } = require('pg');
const { db } = require('./config');

console.log(db)


const pool = new Pool({
  user: db.user,
  password: db.password,
  host: db.host,
  port: db.port,
  database: db.database
})

module.exports = pool;