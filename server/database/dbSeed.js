/* eslint-disable no-console */
const mocker = require('mocker-data-generator').default;
const db = require('./index');

// mock data template for review data
const reviewGenerator = {
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
  raiting: {
    faker: 'random.number({"min": 1, "max": 5})',
  },
};

// generates a random number of data enteries(0 - 100) a random number of times ((5 - 35))
const seeder = () => {
  let counter = (Math.floor(Math.random() * 35) + 5);
  const promises = [];
  while (counter > 0) {
    promises.push(mocker()
      .schema('reviewGenerator', reviewGenerator, Math.floor(Math.random() * 100))
      .build()
      .then((info) => {
        info.reviewGenerator.forEach((review) => {
          const singleReviewArguments = [review.url_id, review.name, review.location, review.date,
            review.comment, review.raiting];
          const queryString = 'INSERT INTO reviews (url_id, name, location, date, comment, raiting) VALUES (?, ?, ?, ?, ?, ?)';
          db.query(queryString, singleReviewArguments, (err) => {
            if (err) {
              console.error(err);
            }
          });
        });
      })
      .catch((error) => console.error(error)));
    counter -= 1;
  }
  Promise.all(promises).then(() => console.log('** reviews database seeded **'));
};

seeder();
