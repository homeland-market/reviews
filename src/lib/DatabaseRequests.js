import axios from 'axios';

const productIdExtract = () => window.location.pathname.split('/')[2];

export const updateHelpfulCount = (helpful, id) => {
  axios.put(`/api/reviews/helpful/${productIdExtract()}`, { helpful, id })
    .catch((err) => console.error(err));
};

export const getAllReviews = (callback) => {
    axios.get(`/api/reviews/${productIdExtract()}`)
      .then((reviews) => {
        callback(reviews.data);
      })
      .catch((err) => console.error(err));
};
