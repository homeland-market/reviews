import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ShowMoreReviews from './ReviewsShowMoreOrLessBody/ShowMoreReviews';
import ShowLessReviews from './ReviewsShowMoreOrLessBody/ShowLessReviews';

const ShowMoreAndLessContainer = styled.div`
  background-color: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 24px;
  text-align: center;
`;

const ReviewsShowMoreOrLess = ({
  reviewDisplayCount,
  filteredReviewsLength,
  increaseReviewDisplayCount,
  resetReviewDisplayCount,
}) => (
  <section>
    <ShowMoreAndLessContainer>
      <ShowMoreReviews
        reviewDisplayCount={reviewDisplayCount}
        filteredReviewsLength={filteredReviewsLength}
        increaseReviewDisplayCount={increaseReviewDisplayCount}
      />
      <ShowLessReviews
        reviewDisplayCount={reviewDisplayCount}
        filteredReviewsLength={filteredReviewsLength}
        resetReviewDisplayCount={resetReviewDisplayCount}
      />
    </ShowMoreAndLessContainer>
  </section>
);

ReviewsShowMoreOrLess.defaultProps = {
  reviewDisplayCount: 3,
  filteredReviewsLength: 0,
};

ReviewsShowMoreOrLess.propTypes = {
  reviewDisplayCount: PropTypes.number,
  filteredReviewsLength: PropTypes.number,
  increaseReviewDisplayCount: PropTypes.func.isRequired,
  resetReviewDisplayCount: PropTypes.func.isRequired,
};

export default ReviewsShowMoreOrLess;
