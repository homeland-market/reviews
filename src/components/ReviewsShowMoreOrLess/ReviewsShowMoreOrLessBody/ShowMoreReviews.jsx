import React from 'react';
import PropTypes from 'prop-types';

import { Parse } from '../../../lib/FilterSortCalcParse';

import { ShowMoreOrLessButton } from '../../../assets/styles';
import { DownArrowSVG, DownArrowSVGPath } from '../../../assets/svg';

const ShowMoreReviews = ({ increaseReviewDisplayCount, reviewDisplayCount, filteredReviews }) => {
  const filteredReviewsLength = filteredReviews.length;
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
          <DownArrowSVGPath />
        </DownArrowSVG>
      </ShowMoreOrLessButton>
    );
  }
  return null;
};

ShowMoreReviews.defaultProps = {
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

ShowMoreReviews.propTypes = {
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
  increaseReviewDisplayCount: PropTypes.func.isRequired,
};

export default ShowMoreReviews;
