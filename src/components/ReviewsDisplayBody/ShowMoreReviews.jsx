import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ShowMoreReviewsWrap = styled.button`
  color: #7f187f;
  background-color: transparent;
  display: inline-block;
  transition-duration: .25s;
  transition-timing-function: cubic-bezier(.65,.05,.36,1);
  transition-property: background-color,transform,color,border-color;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;

const DownArrowSVGContainer = styled.svg`
  width: 28px;
  height: 28px;
  display: inline-block;
  fill: #7f187f;
  vertical-align: middle;
  pointer-events: none;
  overflow: hidden;
`;

const DownArrowSVGPath = styled.path`
  d: path("M19.2 11.3c-.4-.4-1-.4-1.4-.1L14
  14.7l-3.8-3.4c-.4-.4-1-.3-1.4.1-.4.4-.3 1
  .1 1.4l4.5 4c.2.2.4.3.7.3s.5-.1.7-.3l4.5-4c.3-.4.3-1.1-.1-1.5z")
`;

const showMoreReviewsNumber = (filteredReviewsLength, reviewDisplayCount) => {
  const remainingReviewAmount = filteredReviewsLength - reviewDisplayCount;
  const showAmount = remainingReviewAmount >= 10 ? 10 : remainingReviewAmount;
  return `Show ${showAmount} More Reviews`;
};

const ShowMoreReviews = ({ increaseReviewDisplayCount, reviewDisplayCount, filteredReviews }) => {
  const filteredReviewsLength = filteredReviews.length;
  if (reviewDisplayCount < filteredReviewsLength) {
    return (
      <ShowMoreReviewsWrap type="button" onClick={increaseReviewDisplayCount} onKeyPress={increaseReviewDisplayCount}>
        {showMoreReviewsNumber(filteredReviewsLength, reviewDisplayCount)}
        <DownArrowSVGContainer
          viewBox="0 0 28 28"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <DownArrowSVGPath />
        </DownArrowSVGContainer>
      </ShowMoreReviewsWrap>
    );
  }
  return null;
};

ShowMoreReviews.propTypes = {
  increaseReviewDisplayCount: PropTypes.func.isRequired,
  reviewDisplayCount: PropTypes.number.isRequired,
  filteredReviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShowMoreReviews;
