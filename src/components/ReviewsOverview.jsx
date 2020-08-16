import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ReviewAverageRating from './ReviewsOverviewBody/ReviewAverageRating';
import RatingScoreButton from './ReviewsOverviewBody/RatingScoreButton';

const OverviewFullWrapper = styled.div`
  display: block;
`;

const RaitingsAndReviewsContainer = styled.div`
  background-color: #f4f4f5;
  padding: 12px 0;
`;

const GuidelinesLink = styled.a`
  color: #7f187f;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`;

const OverviewBodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  grid-template-columns: 1fr 1fr;
  background-color: #fff;
  border-radius: 8px;
  padding-top: 28px;
  padding-bottom: 28px;
`;

const ReviewsAverageContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ReviewsScoresContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const ReviewStarSpecificBlock = styled.div`
`;

const ReviewsOverview = ({
  reviews,
  reviewAverageScore,
  reviewStarPercentages,
  filterReviewsByStarRating,
  filterCondition,
  totalReviews,
}) => {
  const reviewScores = [5, 4, 3, 2, 1];
  return (
    <OverviewFullWrapper>
      <RaitingsAndReviewsContainer>
        <h1>Ratings & Reviews</h1>
        <span>Our </span>
        <GuidelinesLink href="https://www.wayfair.com/help/article/wayfair_community_guidelines/EF7AA706-3B1D-423C-8A06-4A7BFEF194F5" target="_blank" rel="noopener noreferrer">
          Community Guidelines
        </GuidelinesLink>
        <span> help customers write honest reviews.</span>
      </RaitingsAndReviewsContainer>
      <OverviewBodyContainer>
        <ReviewsAverageContainer>
          <ReviewAverageRating
            reviewAverageScore={reviewAverageScore}
            totalReviews={totalReviews}
          />
        </ReviewsAverageContainer>
        <ReviewsScoresContainer>
          {reviewScores.map((score) => (
            <ReviewStarSpecificBlock key={score}>
              <RatingScoreButton
                reviews={reviews}
                reviewStarPercentages={reviewStarPercentages[score]}
                filterReviewsByStarRating={filterReviewsByStarRating}
                score={score}
                filterCondition={filterCondition}
              />
            </ReviewStarSpecificBlock>
          ))}
        </ReviewsScoresContainer>
      </OverviewBodyContainer>
    </OverviewFullWrapper>
  );
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
  })).isRequired,
  totalReviews: PropTypes.number.isRequired,
  reviewAverageScore: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  reviewStarPercentages: PropTypes.shape({
    1: PropTypes.string,
    2: PropTypes.string,
    3: PropTypes.string,
    4: PropTypes.string,
    5: PropTypes.string,
  }),
  filterReviewsByStarRating: PropTypes.func.isRequired,
  filterCondition: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

ReviewsOverview.defaultProps = {
  reviewStarPercentages: {},
};

export default ReviewsOverview;
