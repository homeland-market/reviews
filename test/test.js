const mysql = require('mysql');
const mysqlConfig = require('../server/database/config');

describe('Retrieve review data from the database', () => {
  const db = mysql.createConnection(mysqlConfig);
  beforeAll(async (done) => {
    await db.connect((err) => {
      if (err) {
        done(err);
      } else {
        done();
      }
    });
  });
  afterAll(async (done) => {
    await db.end();
    done();
  });

  test('Should get comments for all product id entries', (done) => {
    let id = 0;
    const queryString = 'SELECT * FROM user_reviews WHERE url_id = ?';
    const promises = [];
    while (id < 100) {
      db.query(queryString, [id], (err, results) => {
        if (err) { done(err); }
        promises.push(results);
        if (promises.length === 100) {
          for (let i = 0; i < promises.length; i += 1) {
            expect.assertions(100);
            expect(promises[i][0].comment).toBeDefined();
          }
          done();
        }
      });
      id += 1;
    }
  });

  test('Should get names for all product id entries', (done) => {
    let id = 0;
    const queryString = 'SELECT * FROM user_reviews WHERE url_id = ?';
    const promises = [];
    while (id < 100) {
      db.query(queryString, [id], (err, results) => {
        if (err) { done(err); }
        promises.push(results);
        if (promises.length === 100) {
          for (let i = 0; i < promises.length; i += 1) {
            expect.assertions(100);
            expect(promises[i][0].name).toBeDefined();
          }
          done();
        }
      });
      id += 1;
    }
  });

  test('Should get ratings for all product id entries & should be between 1-5', (done) => {
    let productId = 0;
    const queryString = 'SELECT * FROM user_reviews WHERE url_id = ?';
    const promises = [];
    while (productId < 100) {
      db.query(queryString, [productId], (err, results) => {
        if (err) { done(err); }
        promises.push(results);
        if (promises.length === 100) {
          for (let i = 0; i < promises.length; i += 1) {
            expect.assertions(200);
            expect(promises[i][0].rating).toBeGreaterThanOrEqual(1);
            expect(promises[i][0].rating).toBeLessThan(6);
          }
          done();
        }
      });
      productId += 1;
    }
  });

  test('Should get helpful scores for all product id entries & should be between 0-15', (done) => {
    let productId = 0;
    const queryString = 'SELECT * FROM user_reviews WHERE url_id = ?';
    const promises = [];
    while (productId < 100) {
      db.query(queryString, [productId], (err, results) => {
        if (err) { done(err); }
        promises.push(results);
        if (promises.length === 100) {
          for (let i = 0; i < promises.length; i += 1) {
            expect.assertions(200);
            expect(promises[i][0].helpful).toBeGreaterThanOrEqual(0);
            expect(promises[i][0].helpful).toBeLessThan(16);
          }
          done();
        }
      });
      productId += 1;
    }
  });

  test('Should get all dates for product id entries & all dates should be in the past', (done) => {
    let productId = 0;
    const queryString = 'SELECT * FROM user_reviews WHERE url_id = ?';
    const promises = [];
    while (productId < 100) {
      db.query(queryString, [productId], (err, results) => {
        if (err) { done(err); }
        promises.push(results);
        if (promises.length === 100) {
          for (let i = 0; i < promises.length; i += 1) {
            expect.assertions(100);
            expect((new Date(promises[i][0].date)) < (new Date())).toBeTruthy();
          }
          done();
        }
      });
      productId += 1;
    }
  });

  test('Should get all locations for product id entries', (done) => {
    let productId = 0;
    const queryString = 'SELECT * FROM user_reviews WHERE url_id = ?';
    const promises = [];
    while (productId < 100) {
      db.query(queryString, [productId], (err, results) => {
        if (err) { done(err); }
        promises.push(results);
        if (promises.length === 100) {
          for (let i = 0; i < promises.length; i += 1) {
            expect.assertions(100);
            expect(promises[i][0].location).toBeDefined();
          }
          done();
        }
      });
      productId += 1;
    }
  });
});
