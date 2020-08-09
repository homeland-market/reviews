import React from 'react';
import PropTypes from 'prop-types';

const ReviewsRender = ({ reviewCount, reviews, seeMoreReviews }) => (
  <section>
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
    <button type="button" onClick={seeMoreReviews} onKeyPress={seeMoreReviews}>SEE MORE REVIEWS</button>
  </section>
);

ReviewsRender.propTypes = {
  reviewCount: PropTypes.number.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  seeMoreReviews: PropTypes.func.isRequired,
};

export default ReviewsRender;
