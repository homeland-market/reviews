import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ReviewsBody from './ReviewsBody/ReviewsBody';
import ShowMoreReviews from './ShowMoreReviews';
import ShowLessReviews from './ShowLessReviews';

const ReviewsDisplayContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  display: block;
  margin-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
`;

const ShowMoreAndLessContainer = styled.div`
  background-color: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 24px;
  text-align: center;
`;

const ReviewsDisplay = ({
  reviewDisplayCount,
  filteredReviews,
  filterCondition,
  increaseReviewDisplayCount,
  resetReviewDisplayCount,
}) => {
  const reviewsToRender = filteredReviews.slice(0, reviewDisplayCount);
  return (
    <section>
      <ReviewsDisplayContainer>
        {filteredReviews.length > 0 && (
        <ReviewsBody
          reviewsToRender={reviewsToRender}
          filterCondition={filterCondition}
        />
        )}
      </ReviewsDisplayContainer>
      <ShowMoreAndLessContainer>
        <ShowMoreReviews
          increaseReviewDisplayCount={increaseReviewDisplayCount}
          reviewDisplayCount={reviewDisplayCount}
          filteredReviews={filteredReviews}
        />
        <ShowLessReviews
          resetReviewDisplayCount={resetReviewDisplayCount}
          reviewDisplayCount={reviewDisplayCount}
          filteredReviews={filteredReviews}
        />
      </ShowMoreAndLessContainer>
    </section>
  );
};

ReviewsDisplay.defaultProps = {
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
  filterCondition: 0,
};

ReviewsDisplay.propTypes = {
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
  filterCondition: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  increaseReviewDisplayCount: PropTypes.func.isRequired,
  resetReviewDisplayCount: PropTypes.func.isRequired,
};

export default ReviewsDisplay;
