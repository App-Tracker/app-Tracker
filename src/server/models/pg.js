// User info stored in table users

const { Pool } = require('pg');

const URI = process.env.PG_URI;

const pool = new Pool({
  connectionString: URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
