const { Pool, Client } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_USE,
  password: process.env.DB_PASS
});

module.exports = pool;
