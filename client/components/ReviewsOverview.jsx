import React from 'react';
import PropTypes from 'prop-types';

const ReviewsOverview = {

  reviewScores: [5, 4, 3, 2, 1],

  totalReviewsAverageRating(reviews) {
    return (reviews.reduce((acc, review) => acc + (review.rating || null), 0)
      / reviews.length).toFixed(1);
  },

  individualReviewScoreTotals(reviews, score) {
    return reviews.reduce((acc, review) => acc + (review.rating === score ? 1 : 0), 0);
  },

  reviewsOverviewRender({ reviews, filterReviews }) {
    return (
      <section>
        <h1>REVIEWS OVERVIEW</h1>
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
            <button
              key={score}
              type="button"
              onClick={() => filterReviews('rating', score)}
              onKeyPress={() => filterReviews('raiting', score)}
            >
              <div>
                {score}
                {' '}
                {ReviewsOverview.individualReviewScoreTotals(reviews, score)}
              </div>
            </button>
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
