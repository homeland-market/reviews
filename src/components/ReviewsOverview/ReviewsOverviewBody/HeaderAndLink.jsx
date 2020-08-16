import React from 'react';
import styled from 'styled-components';

const RatingsAndReviewsContainer = styled.div`
  padding: 12px 0;
`;

const GuidelinesLink = styled.a`
  color: #7f187f;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;

const HeaderAndLink = () => (
  <RatingsAndReviewsContainer>
    <h1>Ratings & Reviews</h1>
    <span>Our </span>
    <GuidelinesLink href="https://bit.ly/3kSiQIb" target="_blank">
      Community Guidelines
    </GuidelinesLink>
    <span> help customers write honest reviews.</span>
  </RatingsAndReviewsContainer>
);

export default HeaderAndLink;
