import React from 'react';
import PropTypes from 'prop-types';

const ReviewsRender = ({ reviewCount, reviews }) => (

  <div>
    {console.log(reviewCount)}
    {console.log(reviews)}
    {reviews.map((review) => (
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
);

ReviewsRender.propTypes = {
  reviewCount: PropTypes.number.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ReviewsRender;
