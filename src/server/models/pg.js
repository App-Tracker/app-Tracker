// User info stored in table users

const { Pool } = require('pg');

const myURI =
  'postgres://gcuggcel:qaXg6iKVoFuNmdzTvya64ldEtUepD799@drona.db.elephantsql.com:5432/gcuggcel';

const URI = process.env.PG_URI || myURI;

const pool = new Pool({
  connectionString: URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
