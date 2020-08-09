import React from 'react';
import PropTypes from 'prop-types';

const ReviewsRender = ({ reviewCount, reviews, seeMoreReviews, resetReviewCount }) => (
  <section>
    <p>
      Showing 1-
      {reviewCount > reviews.length ? reviews.length : reviewCount}
      {' '}
      of
      {' '}
      {reviews.length}
      {' '}
      reviews.
    </p>
    <div>
      {reviews.slice(0, reviewCount).map((review) => (
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
    {reviewCount < reviews.length ? (
      <button type="button" onClick={seeMoreReviews} onKeyPress={seeMoreReviews}>
        Show
        {' '}
        {reviews.length - reviewCount >= 10 ? 10 : reviews.length - reviewCount}
        {' '}
        More Reviews
      </button>
    ) : null}
    {reviewCount > 3 ? (
      <button type="button" onClick={resetReviewCount} onKeyPress={resetReviewCount}>
        Show Less
      </button>
    ) : null}
  </section>
);

ReviewsRender.propTypes = {
  reviewCount: PropTypes.number.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  seeMoreReviews: PropTypes.func.isRequired,
  resetReviewCount: PropTypes.func.isRequired,
};

export default ReviewsRender;
