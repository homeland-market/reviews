import React from 'react';
import PropTypes from 'prop-types';

const ShowLessButton = ({ resetReviewDisplayCount, reviewDisplayCount }) => {
  if (reviewDisplayCount > 3) {
    return (
      <button
        type="button"
        onClick={resetReviewDisplayCount}
        onKeyPress={resetReviewDisplayCount}
      >
        Show Less
      </button>
    );
  }
  return null;
};

ShowLessButton.propTypes = {
  resetReviewDisplayCount: PropTypes.func.isRequired,
  reviewDisplayCount: PropTypes.number.isRequired,
};

export default ShowLessButton;
