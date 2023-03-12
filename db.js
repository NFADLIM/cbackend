const mysql = require('mysql');

const db = mysql.createPool({

  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_DBNAME || 'cbackend'

});

exports.db = db;