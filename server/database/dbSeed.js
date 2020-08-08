/* eslint-disable no-console */
const mocker = require('mocker-data-generator').default;
const db = require('./index.js');

// mock data template for review data
const reviewsTemplate = {
  url_id: {
    faker: 'random.number({"min": 0, "max": 99})',
  },
  name: {
    faker: 'name.firstName',
  },
  location: {
    faker: 'address.state',
  },
  date: {
    faker: 'date.past',
  },
  comment: {
    faker: 'lorem.paragraph',
  },
  rating: {
    faker: 'random.number({"min": 1, "max": 5})',
  },
};

const databaseInsertion = (data) => new Promise((resolve, reject) => {
  const queryString = 'INSERT INTO user_reviews (url_id, name, location, date, comment, rating) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(queryString, data, (err, success) => {
    if (err) {
      reject(err);
    } else {
      resolve(success);
    }
  });
});

const reviewGenerator = () => mocker()
  .schema('reviewsTemplate', reviewsTemplate, Math.floor(Math.random() * 100))
  .build()
  .then((info) => {
    const insertionPromises = [];
    info.reviewsTemplate.forEach((review) => {
      const databaseData = [review.url_id, review.name, review.location, review.date,
        review.comment, review.rating];
      insertionPromises.push(databaseInsertion(databaseData));
    });
    return Promise.all(insertionPromises)
      .catch((err) => console.error(err));
  });

const databaseSeeder = () => {
  let counter = (Math.floor(Math.random() * 15) + 5);
  const databaseEntries = [];
  while (counter > 0) {
    databaseEntries.push(reviewGenerator());
    counter -= 1;
  }
  return Promise.all(databaseEntries)
    .then(() => console.log('🚀🚀 reviews database seeded!'))
    .catch((err) => console.error(err));
};

databaseSeeder();
