import React from 'react';
import PropTypes from 'prop-types';
import HelpfulButton from './HelpfulButton';

class ReviewsRender extends React.Component {
  constructor(props) {
    super(props);
    this.filterConditionExtractor = this.filterConditionExtractor.bind(this);
    this.highlightAllMatchingCommentText = this.highlightAllMatchingCommentText.bind(this);
  }

  filterConditionExtractor(reviewComment) {
    const { filterCondition } = this.props;
    const trimmedfilterConditionIgnoreCase = filterCondition.trim().toLowerCase();
    const extractedMatches = [];

    const extractAllInstances = (text) => {
      const textIgnoreCase = text.toLowerCase();
      const startOffilterCondition = textIgnoreCase.indexOf(trimmedfilterConditionIgnoreCase);
      const endOffilterCondition = startOffilterCondition + trimmedfilterConditionIgnoreCase.length;
      if (startOffilterCondition === -1) { return extractedMatches; }
      extractedMatches.push(text.substring(startOffilterCondition, endOffilterCondition));
      return extractAllInstances(text.slice(startOffilterCondition + 1));
    };

    extractAllInstances(reviewComment);
    return extractedMatches;
  }

  highlightAllMatchingCommentText(review) {
    const { filterCondition } = this.props;
    const filterConditionMatches = [];
    const arrayOfElements = [];
    const splitReviewText = review.comment.split(new RegExp(filterCondition, 'ig'));
    filterConditionMatches.push(...this.filterConditionExtractor(review.comment));
    splitReviewText.forEach((scentence, index) => {
      arrayOfElements.push(
        <span key={`${review.id}-${Math.random()}`}>
          {scentence}
          <mark>{filterConditionMatches[index]}</mark>
        </span>,
      );
    });
    return <p>{arrayOfElements}</p>;
  }

  render() {
    const {
      reviewDisplayCount,
      seeMoreReviews,
      resetReviewDisplayCount,
      filteredReviews,
      filterCondition,
    } = this.props;
    return (
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
              {filterCondition === '' || typeof filterCondition === 'number' ? <p>{review.comment}</p> : this.highlightAllMatchingCommentText(review)}
              <p>{review.rating}</p>
              <HelpfulButton review={review} />
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
  }
}

ReviewsRender.propTypes = {
  seeMoreReviews: PropTypes.func.isRequired,
  resetReviewDisplayCount: PropTypes.func.isRequired,
  reviewDisplayCount: PropTypes.number.isRequired,
  filteredReviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterCondition: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default ReviewsRender;
