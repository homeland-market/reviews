import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ReviewAverageRating from './ReviewsOverviewBody/ReviewAverageRating';
import IndividualStarRating from './ReviewsOverviewBody/IndividualStarRating';

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
  totalReviewsCount,
  reviewStarPercentages,
  reviewAverageScore,
  filterCondition,
  filterReviewsByStarRating,
  scrollToReviewsBody,
}) => (
  <section>
    <OverviewBodyContainer>
      <AverageScoreContainer>
        <ReviewAverageRating
          totalReviewsCount={totalReviewsCount}
          reviewAverageScore={reviewAverageScore}
        />
      </AverageScoreContainer>
      <StarRatingContainer>
        {stars.map((rating) => (
          <section key={rating}>
            <IndividualStarRating
              rating={rating}
              reviews={reviews}
              reviewStarPercentages={reviewStarPercentages[rating]}
              filterCondition={filterCondition}
              filterReviewsByStarRating={filterReviewsByStarRating}
              scrollToReviewsBody={scrollToReviewsBody}
            />
          </section>
        ))}
      </StarRatingContainer>
    </OverviewBodyContainer>
  </section>
);

ReviewsOverview.defaultProps = {
  reviews: [{
    id: 2,
    url_id: 2,
    name: 'Yu-Lin',
    location: 'California',
    date: '2020-20-20T20:20:20.000Z',
    comment: 'Reviews are fun',
    rating: 2,
    helpful: 2,
    img: 'https://bit.ly/3kMfzKt',
    imgmedium: 'https://bit.ly/3kMfzKt',
  }],
  totalReviewsCount: 0,
  reviewStarPercentages: {
    1: '20',
    2: '20',
    3: '20',
    4: '20',
    5: '20',
  },
  reviewAverageScore: '2.2',
  filterCondition: 0,
};

ReviewsOverview.propTypes = {

  reviews: PropTypes.oneOfType([
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
      imgmedium: PropTypes.string,
    }),
    PropTypes.array),
  ]),
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
  ]),
  filterReviewsByStarRating: PropTypes.func.isRequired,
  scrollToReviewsBody: PropTypes.func.isRequired,
};

export default ReviewsOverview;
