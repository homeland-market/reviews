const db = require('../database/index.js');

module.exports = {

  getAll: (id, callback) => {
    const queryString = 'SELECT * FROM user_reviews WHERE url_id = ?';
    db.query(queryString, [id], (error, results) => {
      if (error) {
        callback(error);
      } else {
        callback(null, results);
      }
    });
  },

  updateHelpful: (data, callback) => {
    const queryString = 'UPDATE user_reviews SET helpful = ? WHERE id = ?';
    db.query(queryString, data, (error, results) => {
      if (error) {
        callback(error);
      } else {
        callback(null, results);
      }
    });
  },

};
