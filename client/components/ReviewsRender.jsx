import React from 'react';

const ReviewsRender = (reviews) => (

  <div>
    {console.log(reviews)}
    {reviews.reviews.map((review) => (
      <div key={review.id}>
        <p>{review.name}</p>
        <p>{review.location}</p>
        <p>{review.date}</p>
        <p>{review.comment}</p>
        <p>{review.rating}</p>
        {review.img === null ? null : <p><img src={review.img} alt={review.id} /></p>}
      </div>
    ))}

  </div>
);

export default ReviewsRender;
