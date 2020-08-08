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

const databaseRawDataInserion = (data) => new Promise((resolve, reject) => {
  const queryString = 'INSERT INTO user_reviews (url_id, name, location, date, comment, rating) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(queryString, data, (err, success) => {
    if (err) {
      reject(err);
    } else {
      resolve(success);
    }
  });
});

const reviewGenerator = (moonId, singleMoonEntry) => mocker()
  .schema('reviewsTemplate', reviewsTemplate, singleMoonEntry || Math.floor(Math.random() * 100))
  .build()
  .then((info) => {
    const insertionPromises = [];
    info.reviewsTemplate.forEach((review) => {
      const databaseData = [moonId || review.url_id,
        review.name, review.location, review.date, review.comment, review.rating];

      insertionPromises.push(databaseRawDataInserion(databaseData));
    });
    return Promise.all(insertionPromises)
      .catch((err) => console.error(err));
  });

const databaseImageInsertion = (moonIndex, moonImageIndex) => new Promise((resolve, reject) => {
  const randomIdIndex = Math.floor(Math.random() * 99) + 1; // 1 - 99
  const randomImgIndex = Math.floor(Math.random() * 50) + 5; // 5 - 50
  const imageURL = `https://hrr47-reviews.s3-us-west-1.amazonaws.com/${moonImageIndex || randomImgIndex}.jpg`;
  const queryString = 'update user_reviews set img = "?" where url_id = ? and img is NULL order by rand() limit 1';
  db.query(queryString, [imageURL, moonIndex || randomIdIndex],
    (err, success) => {
      if (err) {
        reject(err);
      } else {
        resolve(success);
      }
    });
});

const promiseCompiler = (counter, func, arg1, arg2) => {
  const promiseArray = [];
  let loopCounter = counter;
  while (loopCounter > 0) {
    promiseArray.push(func(arg1, arg2));
    loopCounter -= 1;
  }
  return promiseArray;
};

const databaseSeeder = () => {
  const mainReviewCounter = Math.floor(Math.random() * 25) + 10;
  return Promise.all(promiseCompiler(mainReviewCounter, reviewGenerator))
    .then(() => console.log('🚀🚀 review database seeded!'))
    .then(() => {
      const imageCounter = Math.floor(Math.random() * 300) + 100;
      return Promise.all(promiseCompiler(imageCounter, databaseImageInsertion))
        .then(() => console.log('🚀🚀 review images seeded!'))
        .catch((err) => console.error(err));
    })
    .then(() => {
      const moonReviewsCount = 25;
      return Promise.all(promiseCompiler(moonReviewsCount, reviewGenerator, '0', 1))
        .then(() => console.log('🌜🌜 moon reviews seeded!'))
        .catch((err) => console.error(err));
    })
    .then(() => {
      let moonImageCount = 5;
      const moonImagesPromises = [];
      while (moonImageCount > 0) {
        moonImagesPromises.push(databaseImageInsertion('0', moonImageCount));
        moonImageCount -= 1;
      }
      return Promise.all(moonImagesPromises)
        .then(() => console.log('🌜🌜 moon images seeded!'))
        .catch((err) => console.error(err));
    })
    .catch((err) => console.error(err));
};

databaseSeeder();
