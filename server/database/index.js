/* eslint-disable no-console */
const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const dbConnection = mysql.createConnection(mysqlConfig);

dbConnection.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('🚀🚀 reviews database connected!');
  }
});

module.exports = dbConnection;
