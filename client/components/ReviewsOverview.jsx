import React from 'react';
import PropTypes from 'prop-types';

import ReviewAverageRating from './ReviewsOverviewBody/ReviewAverageRating';
import RatingScoreButton from './ReviewsOverviewBody/RatingScoreButton';

const ReviewsOverview = ({ reviews, filterReviews }) => {
  const reviewScores = [5, 4, 3, 2, 1];
  return (
    <section>
      <h1>REVIEWS OVERVIEW</h1>
      <ReviewAverageRating reviews={reviews} />
      {reviewScores.map((score) => (
        <div key={score}>
          <RatingScoreButton reviews={reviews} score={score} filterReviews={filterReviews} />
        </div>
      ))}
    </section>
  );
};

ReviewsOverview.propTypes = {
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
  filterReviews: PropTypes.func.isRequired,
};

export default ReviewsOverview;
