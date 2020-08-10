import React from 'react';
import PropTypes from 'prop-types';

const averageRating = (reviews) => (reviews.reduce((acc, review) => acc + (review.rating || 0), 0)
  / reviews.length).toFixed(1);

const reviewScoreTotals = (reviews, score) => reviews.reduce((acc, review) => acc
  + (review.rating === score ? 1 : 0), 0);

const ReviewsOverview = ({ reviews }) => (
  <section>
    <h1>Reviews Overview</h1>
    <div>
      {reviews.length ? averageRating(reviews) : 0}
    </div>
    <div>
      {reviews.length}
      {' '}
      Reviews
    </div>
    <div>
      5
      {' '}
      {reviewScoreTotals(reviews, 5)}
    </div>
    <div>
      4
      {' '}
      {reviewScoreTotals(reviews, 4)}
    </div>
    <div>
      3
      {' '}
      {reviewScoreTotals(reviews, 3)}
    </div>
    <div>
      2
      {' '}
      {reviewScoreTotals(reviews, 2)}
    </div>
    <div>
      1
      {' '}
      {reviewScoreTotals(reviews, 1)}
    </div>
  </section>
);

ReviewsOverview.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ReviewsOverview;
