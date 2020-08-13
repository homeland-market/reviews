import React from 'react';
import PropTypes from 'prop-types';

import ReviewName from './RenderReviewsBody/ReviewName';
import ReviewLocation from './RenderReviewsBody/ReviewLocation';
import ReviewDate from './RenderReviewsBody/ReviewDate';
import ReviewComment from './RenderReviewsBody/ReviewComment';
import ReviewRating from './RenderReviewsBody/ReviewRating';
import HelpfulButton from './RenderReviewsBody/HelpfulButton';
import ReviewImage from './RenderReviewsBody/ReviewImage';
import ShowMoreButton from './RenderReviewsBody/ShowMoreButton';
import ShowLessButton from './RenderReviewsBody/ShowLessButton';

const RenderReviews = (props) => {
  const {
    seeMoreReviews,
    resetReviewDisplayCount,
    reviewDisplayCount,
    filteredReviews,
    filterCondition,
  } = props;
  const reviewsToRender = filteredReviews.slice(0, reviewDisplayCount);
  return (
    <section>
      <h1>
        REVIEWS RENDER
      </h1>
      <div>
        {reviewsToRender.map((review) => (
          <div key={review.id}>
            <ReviewName review={review} />
            <ReviewLocation review={review} />
            <ReviewDate review={review} />
            <ReviewComment review={review} filterCondition={filterCondition} />
            <ReviewRating review={review} />
            <HelpfulButton review={review} />
            <ReviewImage review={review} />
          </div>
        ))}
      </div>
      <div>
        <ShowMoreButton
          seeMoreReviews={seeMoreReviews}
          reviewDisplayCount={reviewDisplayCount}
          filteredReviews={filteredReviews}
        />
        <ShowLessButton
          resetReviewDisplayCount={resetReviewDisplayCount}
          reviewDisplayCount={reviewDisplayCount}
        />
      </div>
    </section>
  );
};

RenderReviews.propTypes = {
  seeMoreReviews: PropTypes.func.isRequired,
  resetReviewDisplayCount: PropTypes.func.isRequired,
  reviewDisplayCount: PropTypes.number.isRequired,
  filteredReviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterCondition: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default RenderReviews;
