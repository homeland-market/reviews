/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
const mocker = require('mocker-data-generator').default;
const db = require('./index.js');

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
  helpful: {
    faker: 'random.number({"min": 0, "max": 20})',
  },
};

const weightedRand = (weightRules) => {
  let i; let j; const table = [];
  for (i in weightRules) {
    for (j = 0; j < weightRules[i] * 10; j++) {
      table.push(i);
    }
  }
  return table[Math.floor(Math.random() * table.length)];
};

// inserts raw review data into the database
const databaseRawDataInserion = (data) => new Promise((resolve, reject) => {
  const queryString = 'INSERT INTO user_reviews (url_id, name, location, date, comment, rating, helpful) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(queryString, data, (err, success) => {
    if (err) {
      reject(err);
    } else {
      resolve(success);
    }
  });
});

// generates raw review data
const reviewGenerator = (moonId, singleMoonEntry) => mocker()
  .schema('reviewsTemplate', reviewsTemplate, singleMoonEntry || Math.floor(Math.random() * 100))
  .build()
  .then((info) => {
    const insertionPromises = [];
    info.reviewsTemplate.forEach((review) => {
      const databaseData = [moonId || review.url_id, review.name, review.location, review.date,
        review.comment, review.rating, review.helpful];
      insertionPromises.push(databaseRawDataInserion(databaseData));
    });
    return Promise.all(insertionPromises)
      .catch((err) => console.error(err));
  });

const moonReviewGenerator = (moonId, singleMoonEntry) => mocker()
  .schema('reviewsTemplate', reviewsTemplate, singleMoonEntry || Math.floor(Math.random() * 100))
  .build()
  .then((info) => {
    const insertionPromises = [];
    info.reviewsTemplate.forEach((review) => {
      review.rating = weightedRand({ 1: 0.0005, 2: 0.005, 3: 0.1, 4: 0.3, 5: 0.95 });
      const databaseData = [moonId || review.url_id, review.name, review.location, review.date,
        review.comment, review.rating, review.helpful];
      insertionPromises.push(databaseRawDataInserion(databaseData));
    });
    return Promise.all(insertionPromises)
      .catch((err) => console.error(err));
  });

// inserts img url's into the datatabase
const databaseImageInsertion = (moonIndex, moonImageIndex) => new Promise((resolve, reject) => {
  const randomIdIndex = Math.floor(Math.random() * 99) + 1;
  const randomImgIndex = Math.floor(Math.random() * 46) + 5;
  const imageURL = `https://hrr47-reviews.s3-us-west-1.amazonaws.com/small_images/${moonImageIndex || randomImgIndex}.jpg`;
  const queryString = 'update user_reviews set img = ? where url_id = ? and img is NULL order by rand() limit 1';
  db.query(queryString, [imageURL, moonIndex || randomIdIndex],
    (err, success) => {
      if (err) {
        reject(err);
      } else {
        resolve(success);
      }
    });
});

// helper function to compile promises in databaseSeeder()
const promiseCompiler = (counter, func, arg1, arg2) => {
  const promiseArray = [];
  let loopCounter = counter;
  while (loopCounter > 0) {
    promiseArray.push(func(arg1, arg2 === 'loop' ? loopCounter : arg2));
    loopCounter -= 1;
  }
  return promiseArray;
};

// main database seed function
const databaseSeeder = () => {
  const mainReviewCounter = Math.floor(Math.random() * 100) + 40;
  return Promise.all(promiseCompiler(mainReviewCounter, reviewGenerator))
    .then(() => console.log('🚀🚀 review database seeded!'))
    .then(() => {
      const imageCounter = Math.floor(Math.random() * 600) + 300;
      return Promise.all(promiseCompiler(imageCounter, databaseImageInsertion))
        .then(() => console.log('🚀🚀 review images seeded!'))
        .catch((err) => console.error(err));
    })
    .then(() => {
      const moonReviewWeighted = 500;
      return Promise.all(promiseCompiler(moonReviewWeighted, moonReviewGenerator, '0', 1))
        .then(() => console.log('🌜🌜 moon weighted reviews seeded!'))
        .catch((err) => console.error(err));
    })
    .then(() => {
      let counter = 10;
      const imagePromises = [];
      while (counter > 0) {
        const moonImageCount = 5;
        imagePromises.push(promiseCompiler(moonImageCount, databaseImageInsertion, '0', 'loop'));
        counter -= 1;
      }
      return Promise.all(imagePromises)
        .then(() => console.log('🌜🌜 moon images seeded!'))
        .catch((err) => console.error(err));
    })
    .catch((err) => console.error(err));
};

databaseSeeder();
