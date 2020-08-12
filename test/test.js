const mysql = require('mysql');
const mysqlConfig = require('../server/database/config');

const db = mysql.createConnection(mysqlConfig);

beforeEach(async (done) => {
  await db.connect((err) => {
    if (err) {
      done(err);
    } else {
      done();
    }
  });
});

afterEach(async (done) => {
  await db.destroy();
  done();
});

describe('Database interactions', () => {
  test('Should get review comments for all product id', async (done) => {
    let id = 0;
    const queryString = 'SELECT * FROM user_reviews WHERE url_id = ?';
    const promises = [];
    while (id < 100) {
      db.query(queryString, [id], (err, results) => {
        promises.push(results);
        if (promises.length === 100) {
          for (let i = 0; i < promises.length; i += 1) {
            expect(promises[i][0].comment).toBeDefined();
          }
          done();
        }
      });
      id += 1;
    }
  });
});
