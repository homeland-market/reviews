import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import HeaderAndLink from './ReviewsOverviewBody/HeaderAndLink';
import ReviewAverageRating from './ReviewsOverviewBody/ReviewAverageRating';
import IndividualStarRating from './ReviewsOverviewBody/IndividualStarRating';

const OverviewWrapper = styled.div`
  display: block;
`;

const OverviewBodyContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-bottom: 28px;
  padding-top: 28px;
`;

const AverageScoreContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
`;

const StarRatingContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const stars = [5, 4, 3, 2, 1];

const ReviewsOverview = ({
  reviews,
  reviewAverageScore,
  reviewStarPercentages,
  filterReviewsByStarRating,
  filterCondition,
  totalReviewsCount,
}) => (
  <OverviewWrapper>
    <HeaderAndLink />
    <OverviewBodyContainer>
      <AverageScoreContainer>
        <ReviewAverageRating
          totalReviewsCount={totalReviewsCount}
          reviewAverageScore={reviewAverageScore}
        />
      </AverageScoreContainer>
      <StarRatingContainer>
        {stars.map((score) => (
          <section key={score}>
            <IndividualStarRating
              score={score}
              reviews={reviews}
              reviewStarPercentages={reviewStarPercentages[score]}
              filterCondition={filterCondition}
              filterReviewsByStarRating={filterReviewsByStarRating}
            />
          </section>
        ))}
      </StarRatingContainer>
    </OverviewBodyContainer>
  </OverviewWrapper>
);

ReviewsOverview.defaultProps = {
  reviews: {
    id: 2,
    url_id: 2,
    name: 'Yu-Lin',
    location: 'California',
    date: '2020-20-20T20:20:20.000Z',
    comment: 'Reviews are fun',
    rating: 2,
    helpful: 2,
    img: 'https://bit.ly/3kMfzKt',
  },
  reviewStarPercentages: {
    1: '20',
    2: '20',
    3: '20',
    4: '20',
    5: '20',
  },
  totalReviewsCount: 222,
  reviewAverageScore: '2.2',
};

ReviewsOverview.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    url_id: PropTypes.number,
    name: PropTypes.string,
    location: PropTypes.string,
    date: PropTypes.string,
    comment: PropTypes.string,
    rating: PropTypes.number,
    helpful: PropTypes.number,
    img: PropTypes.string,
  })),
  totalReviewsCount: PropTypes.number,
  reviewStarPercentages: PropTypes.shape({
    1: PropTypes.string,
    2: PropTypes.string,
    3: PropTypes.string,
    4: PropTypes.string,
    5: PropTypes.string,
  }),
  reviewAverageScore: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  filterCondition: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  filterReviewsByStarRating: PropTypes.func.isRequired,
};

export default ReviewsOverview;
