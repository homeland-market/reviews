import React from 'react';
import PropTypes from 'prop-types';

const totalReviewsAverageRating = (reviews) => {
  const reviewTotal = reviews.reduce((acc, review) => acc + (review.rating || null), 0);
  const reviewAverage = (reviewTotal / reviews.length).toFixed(1);
  return reviewAverage;
};

const totalReviews = (reviews) => `${reviews.length} Reviews`;

const ReviewAverageRating = ({ reviews }) => (
  <div>
    <div>{reviews.length ? totalReviewsAverageRating(reviews) : 0}</div>
    <div>{totalReviews(reviews)}</div>
  </div>
);

ReviewAverageRating.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    url_id: PropTypes.number,
    name: PropTypes.string,
    location: PropTypes.string,
    date: PropTypes.string,
    comment: PropTypes.string,
    rating: PropTypes.number,
    helpful: PropTypes.number,
    img: PropTypes.string,
  })).isRequired,
};

export default ReviewAverageRating;
