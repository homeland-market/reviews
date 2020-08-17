import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';

import { FiveStarsSVGPath } from '../../../assets/svg';

const AverageRatingScoreWrapper = styled.div`
  text-align: center;
`;

const AverageScoreContainer = styled.span`
  font-size: 3.85rem;
`;

const TotalReviewCountContainer = styled.div`
  font-weight: 700;
  margin-top: 6px;
`;

const ReviewAverageRating = ({ totalReviewsCount, reviewAverageScore }) => (
  <AverageRatingScoreWrapper>
    <AverageScoreContainer>
      {reviewAverageScore}
    </AverageScoreContainer>
    <section>
      <StarRatings
        rating={Number(reviewAverageScore)}
        starDimension="45px"
        starSpacing="0"
        starRatedColor="#f6b71d"
        starEmptyColor="#d9d8db"
        svgIconPath={FiveStarsSVGPath}
        svgIconViewBox="0 0 20 13"
      />
    </section>
    <TotalReviewCountContainer>
      {`${totalReviewsCount} Reviews`}
    </TotalReviewCountContainer>
  </AverageRatingScoreWrapper>
);

ReviewAverageRating.defaultProps = {
  totalReviewsCount: 2,
  reviewAverageScore: '2.2',
};

ReviewAverageRating.propTypes = {
  totalReviewsCount: PropTypes.number,
  reviewAverageScore: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default ReviewAverageRating;
