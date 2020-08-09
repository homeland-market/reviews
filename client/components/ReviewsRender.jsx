import React from 'react';
import PropTypes from 'prop-types';

const ReviewsRender = ({
  reviewDisplayCount,
  reviews,
  seeMoreReviews,
  resetReviewDisplayCount,
}) => (
  <section>
    <p>
      Showing 1-
      {reviewDisplayCount > reviews.length ? reviews.length : reviewDisplayCount}
      {' '}
      of
      {' '}
      {reviews.length}
      {' '}
      reviews.
    </p>
    <div>
      {reviews.slice(0, reviewDisplayCount).map((review) => (
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
    {reviewDisplayCount < reviews.length ? (
      <button type="button" onClick={seeMoreReviews} onKeyPress={seeMoreReviews}>
        Show
        {' '}
        {reviews.length - reviewDisplayCount >= 10 ? 10 : reviews.length - reviewDisplayCount}
        {' '}
        More Reviews
      </button>
    ) : null}
    {reviewDisplayCount > 3 ? (
      <button type="button" onClick={resetReviewDisplayCount} onKeyPress={resetReviewDisplayCount}>
        Show Less
      </button>
    ) : null}
  </section>
);

ReviewsRender.propTypes = {
  reviewDisplayCount: PropTypes.number.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  seeMoreReviews: PropTypes.func.isRequired,
  resetReviewDisplayCount: PropTypes.func.isRequired,
};

export default ReviewsRender;
