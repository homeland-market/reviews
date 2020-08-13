import axios from 'axios';

export const updateHelpfulCount = (helpful, id) => {
  const { pathname } = window.location;
  axios.put(`/api/reviews/helpful${pathname}`, { helpful, id })
    .catch((err) => console.error(err));
};

export const getAllReviews = (callback) => {
  const { pathname } = window.location;
  if (pathname !== '/') {
    axios.get(`/api/reviews${pathname}`)
      .then((reviews) => {
        callback(reviews.data);
      })
      .catch((err) => console.error(err));
  }
};
