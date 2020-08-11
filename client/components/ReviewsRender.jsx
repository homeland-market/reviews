import React from 'react';
import PropTypes from 'prop-types';

const ReviewsRender = ({
  reviewDisplayCount,
  seeMoreReviews,
  resetReviewDisplayCount,
  filteredReviews,
}) => (
  <section>
    <h1>
      REVIEWS RENDER
    </h1>
    <div>
      {filteredReviews.slice(0, reviewDisplayCount).map((review) => (
        <div key={review.id}>
          <p>{review.name}</p>
          <p>{review.location}</p>
          <p>{review.date.substring(0, review.date.indexOf('T'))}</p>
          <p>{review.comment}</p>
          <p>{review.rating}</p>
          <p>{review.helpful}</p>
          {review.img === null ? null : <p><img src={review.img} alt={review.id} /></p>}
        </div>
      ))}
    </div>
    {reviewDisplayCount < filteredReviews.length ? (
      <button type="button" onClick={seeMoreReviews} onKeyPress={seeMoreReviews}>
        Show
        {' '}
        {filteredReviews.length - reviewDisplayCount >= 10 ? 10
          : filteredReviews.length - reviewDisplayCount}
        {' '}
        More Reviews
      </button>
    ) : null}
    {reviewDisplayCount > 3 ? (
      <button
        type="button"
        onClick={resetReviewDisplayCount}
        onKeyPress={resetReviewDisplayCount}
      >
        Show Less
      </button>
    ) : null}
  </section>
);

ReviewsRender.propTypes = {
  seeMoreReviews: PropTypes.func.isRequired,
  resetReviewDisplayCount: PropTypes.func.isRequired,
  reviewDisplayCount: PropTypes.number.isRequired,
  filteredReviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ReviewsRender;
