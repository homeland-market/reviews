/* eslint-disable no-console */
const mysql = require('mysql');
const Promise = require('bluebird');
const mysqlConfig = require('./config.js');
const createTables = require('./createDatabaseTables.js');
const databaseSeeder = require('./dbSeed.js');

const database = 'reviews';
const connection = mysql.createConnection(mysqlConfig);

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log('\x1b[33m', '🆅', '\x1b[37m', `${database} database connected!`))
  .then(() => db.queryAsync(`DROP DATABASE IF EXISTS ${database}`))
  .then(() => db.queryAsync(`CREATE DATABASE IF NOT EXISTS ${database}`))
  .then(() => db.queryAsync(`USE ${database}`))
  .then(() => createTables(db))
  .then(() => databaseSeeder());

module.exports = db;
