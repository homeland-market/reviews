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

const databaseInsertion = (data) => {
  const queryString = 'INSERT INTO reviews (url_id, name, location, date, comment, rating) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(queryString, data, (err, results) => {
    if (err) {
      return err;
    }
    return results;
  });
};

const reviewGenerator = () => {
  mocker()
    .schema('reviewsTemplate', reviewsTemplate, Math.floor(Math.random() * 100))
    .build()
    .then((info) => {
      info.reviewsTemplate.forEach((review) => {
        const databaseData = [review.url_id, review.name, review.location, review.date,
          review.comment, review.rating];
        return databaseInsertion(databaseData);
      });
    })
    .catch((err) => console.error(err));
};

const databaseSeeder = () => {
  let counter = (Math.floor(Math.random() * 35) + 5);
  const databaseEntries = [];
  while (counter > 0) {
    databaseEntries.push(reviewGenerator());
    counter -= 1;
  }
  Promise.all(databaseEntries).then(() => console.log('** reviews database seeded **'));
};

databaseSeeder();
