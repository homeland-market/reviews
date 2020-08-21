import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RatingsAndReviewsWrapper = styled.div`
  padding: 12px 0;
`;

const GuidelinesLink = styled.a`
  color: #7f187f;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;

const ReviewsHeader = () => (
  <RatingsAndReviewsWrapper>
    <h1>Ratings & Reviews</h1>
    <span>Our </span>
    <GuidelinesLink href="https://bit.ly/3kSiQIb" target="_blank">
      Community Guidelines
    </GuidelinesLink>
    <span> help customers write honest reviews.</span>
  </RatingsAndReviewsWrapper>
);

export default ReviewsHeader;
