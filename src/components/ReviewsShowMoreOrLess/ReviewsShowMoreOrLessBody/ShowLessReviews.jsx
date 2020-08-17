import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ShowMoreOrLessButton } from '../../../assets/styles';
import { UpArrowSVG, UpArrowSVGPath } from '../../../assets/svg';

const ShowMoreAndLessDivider = styled.div`
  background: #615c65;
  border-radius: 0;
  display: flex;
  height: 28px;
  justify-content: center;
  margin-left: 16px;
  margin-right: 16px;
  text-align: center;
  width: 1px;
`;

const ShowLessReviews = ({
  reviewDisplayCount,
  filteredReviewsLength,
  resetReviewDisplayCount,
}) => {
  if (reviewDisplayCount > 3) {
    return (
      <ShowMoreOrLessButton
        type="button"
        onClick={resetReviewDisplayCount}
        onKeyPress={resetReviewDisplayCount}
      >
        {reviewDisplayCount < filteredReviewsLength.length && <ShowMoreAndLessDivider />}
        Show Less
        <UpArrowSVG
          viewBox="0 0 28 28"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <UpArrowSVGPath />
        </UpArrowSVG>
      </ShowMoreOrLessButton>
    );
  }
  return null;
};

ShowLessReviews.defaultProps = {
  reviewDisplayCount: 3,
  filteredReviewsLength: 0,
};

ShowLessReviews.propTypes = {
  reviewDisplayCount: PropTypes.number,
  filteredReviewsLength: PropTypes.number,
  resetReviewDisplayCount: PropTypes.func.isRequired,
};

export default ShowLessReviews;
