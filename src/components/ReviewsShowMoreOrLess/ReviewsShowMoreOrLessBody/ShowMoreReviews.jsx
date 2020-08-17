import React from 'react';
import PropTypes from 'prop-types';

import { Parse } from '../../../lib/FilterSortCalcParse';

import { ShowMoreOrLessButton } from '../../../assets/styles';
import { DownArrowSVG, DownArrowSVGPath } from '../../../assets/svg';

const ShowMoreReviews = ({
  increaseReviewDisplayCount,
  reviewDisplayCount,
  filteredReviewsLength,
}) => {
  if (reviewDisplayCount < filteredReviewsLength) {
    return (
      <ShowMoreOrLessButton
        type="button"
        onClick={increaseReviewDisplayCount}
        onKeyPress={increaseReviewDisplayCount}
      >
        {Parse.showMoreReviewsNumber(filteredReviewsLength, reviewDisplayCount)}
        <DownArrowSVG
          viewBox="0 0 28 28"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path d={DownArrowSVGPath} />
        </DownArrowSVG>
      </ShowMoreOrLessButton>
    );
  }
  return null;
};

ShowMoreReviews.defaultProps = {
  reviewDisplayCount: 3,
  filteredReviewsLength: 0,
};

ShowMoreReviews.propTypes = {
  reviewDisplayCount: PropTypes.number,
  filteredReviewsLength: PropTypes.number,
  increaseReviewDisplayCount: PropTypes.func.isRequired,
};

export default ShowMoreReviews;
