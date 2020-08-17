import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ShowLessReviews from './ReviewsShowMoreOrLessBody/ShowLessReviews';
import ShowMoreReviews from './ReviewsShowMoreOrLessBody/ShowMoreReviews';

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
  filteredReviews,
  increaseReviewDisplayCount,
  resetReviewDisplayCount,
}) => (
  <section>
    <ShowMoreAndLessContainer>
      <ShowMoreReviews
        reviewDisplayCount={reviewDisplayCount}
        filteredReviews={filteredReviews}
        increaseReviewDisplayCount={increaseReviewDisplayCount}
      />
      <ShowLessReviews
        reviewDisplayCount={reviewDisplayCount}
        filteredReviews={filteredReviews}
        resetReviewDisplayCount={resetReviewDisplayCount}
      />
    </ShowMoreAndLessContainer>
  </section>
);

ReviewsShowMoreOrLess.defaultProps = {
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

ReviewsShowMoreOrLess.propTypes = {
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
  resetReviewDisplayCount: PropTypes.func.isRequired,
};

export default ReviewsShowMoreOrLess;
