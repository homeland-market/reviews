import React from 'react';
import PropTypes from 'prop-types';

const textSlicer = (text, filterCondition) => {
  const results = [];
  const findAllInstances = (word) => {
    const lowerCaseWord = word.toLowerCase();
    const lowerFilterCondition = filterCondition.toLowerCase();
    if (lowerCaseWord.indexOf(lowerFilterCondition) === -1) {
      return results;
    }
    results.push(
      word.substring(lowerCaseWord.indexOf(lowerFilterCondition),
        lowerCaseWord.indexOf(lowerFilterCondition) + filterCondition.length),
    );
    return findAllInstances(lowerCaseWord.slice(lowerCaseWord.indexOf(lowerFilterCondition) + 1));
  };
  findAllInstances(text);
  return results;
};

const textHighlighter = (review, filterCondition) => {
  if (filterCondition === '' || typeof filterCondition === 'number') {
    return (
      <p>{review.comment}</p>
    );
  }
  const trimmedCondition = filterCondition.trim();
  const matches = [];
  const domElements = [];
  const arrayOfMatchingInstances = [review.comment].filter((word) => word.toLowerCase()
    .includes(trimmedCondition.toLowerCase()));
  const arrayOfNoneMatchingInstances = review.comment.split(new RegExp(trimmedCondition, 'ig'));

  arrayOfMatchingInstances.forEach((word) => matches.push(...textSlicer(word, trimmedCondition)));

  for (let i = 0; i < arrayOfNoneMatchingInstances.length; i += 1) {
    if (i === arrayOfNoneMatchingInstances.length - 1) {
      domElements.push(<span key={i}>{arrayOfNoneMatchingInstances[i]}</span>);
    } else {
      domElements.push(
        <span key={i}>
          {arrayOfNoneMatchingInstances[i]}
          <mark>{matches[i]}</mark>
        </span>,
      );
    }
  }
  return (
    <p key={review.id}>
      {domElements}
    </p>
  );
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
          {textHighlighter(review, filterCondition)}
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
