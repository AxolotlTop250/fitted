const { Pool } = require('pg');

//insert your elephantSQL instance URI
const PG_URI = 'postgres://icbizdqt:rLRhVqt9yuv2P2lnsD77Bto7IShV2Rcl@rajje.db.elephantsql.com/icbizdqt';

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};