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

const ShowLessReviews = ({ reviewDisplayCount, filteredReviews, resetReviewDisplayCount }) => {
  if (reviewDisplayCount > 3) {
    return (
      <ShowMoreOrLessButton
        type="button"
        onClick={resetReviewDisplayCount}
        onKeyPress={resetReviewDisplayCount}
      >
        {reviewDisplayCount < filteredReviews.length && <ShowMoreAndLessDivider />}
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
  filteredReviews: [{
    id: 2,
    url_id: 2,
    name: 'Yu-Lin',
    location: 'California',
    date: '2020-20-20T20:20:20.000Z',
    comment: 'Reviews are fun',
    rating: 2,
    helpful: 2,
    img: 'https://bit.ly/3kMfzKt',
  }],
};

ShowLessReviews.propTypes = {
  reviewDisplayCount: PropTypes.number,
  filteredReviews: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      url_id: PropTypes.number,
      name: PropTypes.string,
      location: PropTypes.string,
      date: PropTypes.string,
      comment: PropTypes.string,
      rating: PropTypes.number,
      helpful: PropTypes.number,
      img: PropTypes.string,
    }),
    PropTypes.array),
  ]),
  resetReviewDisplayCount: PropTypes.func.isRequired,
};

export default ShowLessReviews;
