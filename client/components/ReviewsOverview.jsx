import React from 'react';
import PropTypes from 'prop-types';

const ReviewsOverview = {

  reviewScores: [5, 4, 3, 2, 1],

  averageRating(reviews) {
    return (reviews.reduce((acc, review) => acc + (review.rating || 0), 0)
    / reviews.length).toFixed(1);
  },

  reviewScoreTotals(reviews, score) {
    return reviews.reduce((acc, review) => acc + (review.rating === score ? 1 : 0), 0);
  },

  ReviewsOverviewRender({ reviews }) {
    return (
      <section>
        <h1>Reviews Overview</h1>
        <div>
          {reviews.length ? ReviewsOverview.averageRating(reviews) : 0}
        </div>
        <div>
          {reviews.length}
          {' '}
          Reviews
        </div>
        <div>
          {ReviewsOverview.reviewScores.map((score) => (
            <div key={score}>
              {score}
              {' '}
              {ReviewsOverview.reviewScoreTotals(reviews, score)}
            </div>
          ))}
        </div>
      </section>
    );
  },
};

ReviewsOverview.ReviewsOverviewRender.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ReviewsOverview.ReviewsOverviewRender;
