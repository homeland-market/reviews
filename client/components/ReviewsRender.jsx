import React from 'react';
import PropTypes from 'prop-types';

const searchTermExtractor = (reviewComment, searchTerm) => {
  const extractedMatches = [];

  const extractAllInstances = (text) => {
    const textIgnoreCase = text.toLowerCase();
    const startOfSearchTerm = textIgnoreCase.indexOf(searchTerm);
    const endOfSearchTerm = startOfSearchTerm + searchTerm.length;
    if (startOfSearchTerm === -1) { return extractedMatches; }
    extractedMatches.push(text.substring(startOfSearchTerm, endOfSearchTerm));
    return extractAllInstances(text.slice(startOfSearchTerm + 1));
  };

  extractAllInstances(reviewComment);
  return extractedMatches;
};

const highlightAllMatchingCommentText = (review, searchTerm) => {
  const searchTermMatches = [];
  const arrayOfElements = [];
  const trimmedSearchTermIgnoreCase = searchTerm.trim().toLowerCase();
  const splitReviewText = review.comment.split(new RegExp(trimmedSearchTermIgnoreCase, 'ig'));
  searchTermMatches.push(...searchTermExtractor(review.comment, trimmedSearchTermIgnoreCase));
  splitReviewText.forEach((scentence, index) => {
    arrayOfElements.push(
      <span key={`${review.id}-${Math.random()}`}>
        {scentence}
        <mark>{searchTermMatches[index]}</mark>
      </span>,
    );
  });
  return <p>{arrayOfElements}</p>;
};

const ReviewsRender = ({
  reviewDisplayCount,
  seeMoreReviews,
  resetReviewDisplayCount,
  filteredReviews,
  filterCondition,
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
          {filterCondition === '' || typeof filterCondition === 'number' ? <p>{review.comment}</p> : highlightAllMatchingCommentText(review, filterCondition)}
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
  filterCondition: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default ReviewsRender;
