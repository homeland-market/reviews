import React from 'react';
import PropTypes from 'prop-types';

const ReviewsOverview = {

  reviewScores: [5, 4, 3, 2, 1],

  totalReviewsAverageRating(reviews) {
    return (reviews.reduce((acc, review) => acc + (review.rating || 0), 0)
    / reviews.length).toFixed(1);
  },

  individualReviewScoreTotals(reviews, score) {
    return reviews.reduce((acc, review) => acc + (review.rating === score ? 1 : 0), 0);
  },

  reviewsOverviewRender({ reviews, filterReviews }) {
    return (
      <section>
        <h1>Reviews Overview</h1>
        <div>
          {reviews.length ? ReviewsOverview.totalReviewsAverageRating(reviews) : 0}
        </div>
        <div>
          {reviews.length}
          {' '}
          Reviews
        </div>
        <div>
          {ReviewsOverview.reviewScores.map((score) => (
            <div key={score} onClick={() => filterReviews('rating', score)}>
              {score}
              {' '}
              {ReviewsOverview.individualReviewScoreTotals(reviews, score)}
            </div>
          ))}
        </div>
      </section>
    );
  },
};

ReviewsOverview.reviewsOverviewRender.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterReviews: PropTypes.func.isRequired,
};

export default ReviewsOverview.reviewsOverviewRender;
