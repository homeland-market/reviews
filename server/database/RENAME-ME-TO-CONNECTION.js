const mysql = require('mysql');

// Add your MySQL user and password info here
// Don't forget to rename the file 'connection.js'
const db = mysql.createConnection({
  user: 'USERNAME-HERE',
  password: 'PASSWORD-HERE',
  database: 'reviews',
});

db.connect((err) => (err));

module.exports = db;
