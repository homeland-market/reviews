import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ReviewAverageRating from './ReviewsOverviewBody/ReviewAverageRating';
import RatingScoreButton from './ReviewsOverviewBody/RatingScoreButton';

const OverviewFullWrapper = styled.div`
`;

const OverviewContainer = styled.div`
  display: grid;
  grid-template-rows: 100px 2fr;
`;

const RaitingsAndReviewsContainer = styled.div`
  grid-row: 1;
  padding-bottom: 16px;
  padding-top: 16px;
  background-color: #f4f4f5;
`;

const OverviewBodyContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row: 2;
  background-color: #fff;
  border-radius: 8px;
  padding: 24px;
`;

const ReviewsAverageContainer = styled.div`
  display: flex;
  grid-column: 1;
  justify-content: space-evenly;
  align-items: center;
`;

const ReviewsScoresContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  flex-direction: column;
  grid-column: 2;
  justify-content: space-evenly;
  align-items: center;
`;

const ReviewStarSpecificBlock = styled.div`
`;

const ReviewsOverview = ({ reviews, reviewPercentages, filterReviews }) => {
  const reviewScores = [5, 4, 3, 2, 1];
  return (
    <OverviewFullWrapper>
      <OverviewContainer>
        <RaitingsAndReviewsContainer>
          <h1>Ratings & Reviews</h1>
        </RaitingsAndReviewsContainer>
        <OverviewBodyContainer>
          <ReviewsAverageContainer>
            <ReviewAverageRating reviews={reviews} />
          </ReviewsAverageContainer>

          <ReviewsScoresContainer>
            {reviewScores.map((score) => (
              <ReviewStarSpecificBlock key={score}>
                <RatingScoreButton
                  reviews={reviews}
                  reviewPercentages={reviewPercentages[score]}
                  filterReviews={filterReviews}
                  score={score}
                />
              </ReviewStarSpecificBlock>
            ))}
          </ReviewsScoresContainer>

        </OverviewBodyContainer>
      </OverviewContainer>
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
  reviewPercentages: PropTypes.shape({
    1: PropTypes.string,
    2: PropTypes.string,
    3: PropTypes.string,
    4: PropTypes.string,
    5: PropTypes.string,
  }).isRequired,
  filterReviews: PropTypes.func.isRequired,
};

export default ReviewsOverview;
