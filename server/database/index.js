const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const dbConnection = mysql.createConnection(mysqlConfig);

dbConnection.connect((err) => {
  if (err) {
    console.log(`Error: unable to connect to the unfair_reviews database.\n${err}`);
  } else {
    console.log('** unfair_reviews database connected **');
  }
});

module.exports = dbConnection;
