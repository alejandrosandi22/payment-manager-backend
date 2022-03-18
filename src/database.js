const { Pool } = require('pg');
const { db } = require('./config');

const pool = new Pool({
  user: "ogvarvylmytqwp",
  password: "50417bce2dfe67ac16f0f58b1457c4240a66f7c491f84166eb32557c5ab35f4c",
  host: "ec2-3-222-204-187.compute-1.amazonaws.com",
  port: 5432,
  database: "d333561j6gk3r2"
})

module.exports = pool;