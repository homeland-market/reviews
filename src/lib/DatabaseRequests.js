/* eslint-disable no-console */
import axios from 'axios';

const localhost = 'http://localhost:5004';
const ec2 = 'http://13.57.49.21:5004';

const productIdExtract = () => window.location.pathname.split('/')[2];

export const updateHelpfulCount = (helpful, id) => {
  axios.put(`${ec2}/api/reviews/helpful/${productIdExtract()}`, { helpful, id })
    .catch((err) => console.error(err));
};

export const getAllReviews = (callback) => {
  axios.get(`${ec2}/api/reviews/${productIdExtract()}`)
    .then((reviews) => {
      callback(reviews.data);
    })
    .catch((err) => console.error(err));
};
