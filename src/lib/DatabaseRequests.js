/* eslint-disable no-console */
import axios from 'axios';

const ec2 = 'http://13.57.49.21:5004';
const localhost = 'http://localhost:5004';

const productIdExtract = () => window.location.pathname.split('/')[2];

export const updateHelpfulCount = (helpful, id) => {
  axios.put(`${localhost}/api/reviews/helpful/${productIdExtract()}`, { helpful, id })
    .catch((err) => console.error(err));
};

export const getAllReviews = (callback) => {
  axios.get(`${localhost}/api/reviews/${productIdExtract()}`)
    .then((reviews) => {
      callback(reviews.data);
    })
    .catch((err) => console.error(err));
};
