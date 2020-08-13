import React from 'react';
import PropTypes from 'prop-types';

const ShowMoreButton = ({ seeMoreReviews, reviewDisplayCount, filteredReviews }) => {
  if (reviewDisplayCount < filteredReviews.length) {
    return (
      <button type="button" onClick={seeMoreReviews} onKeyPress={seeMoreReviews}>
        Show
        {' '}
        {filteredReviews.length - reviewDisplayCount >= 10 ? 10
          : filteredReviews.length - reviewDisplayCount}
        {' '}
        More Reviews
      </button>
    );
  }
  return null;
};

ShowMoreButton.propTypes = {
  seeMoreReviews: PropTypes.func.isRequired,
  reviewDisplayCount: PropTypes.number.isRequired,
  filteredReviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShowMoreButton;
