import React from 'react';
import styled from 'styled-components';

const SearchHighlight = styled.mark`
  background-color: #e6d3e4;
  font-weight: 700;
  padding-top: 4px;
  padding-bottom: 4px;
`;

export const ProductUserComments = styled.div`
  margin-bottom: 12px;
  color: #615c65;
  flex-direction: row;
  display: block;
`;

export const filterConditionExtractor = (comment, filterCondition) => {
  const extractedMatches = [];

  const extractAllInstances = (text) => {
    const textIgnoreCase = text.toLowerCase();
    const startIndex = textIgnoreCase.indexOf(filterCondition);
    const endIndex = startIndex + filterCondition.length;
    if (startIndex === -1) { return extractedMatches; }
    extractedMatches.push(text.substring(startIndex, endIndex));
    return extractAllInstances(text.slice(startIndex + 1));
  };

  extractAllInstances(comment);
  return extractedMatches;
};

export const highlightAllMatchingCommentText = (comment, id, filterCondition) => {
  const filterConditionMatches = [];
  const arrayOfElements = [];
  const splitReviewText = comment.split(new RegExp(filterCondition, 'ig'));
  filterConditionMatches.push(...filterConditionExtractor(comment, filterCondition));
  splitReviewText.forEach((scentence, index) => {
    arrayOfElements.push(
      <span key={`${id}-${Math.random()}`}>
        {scentence}
        <SearchHighlight>{filterConditionMatches[index]}</SearchHighlight>
      </span>,
    );
  });
  return <ProductUserComments>{arrayOfElements}</ProductUserComments>;
};

export const getStartPercentagesFills = (reviews) => {
  let reviewStars = 5;
  const starPercentages = {};
  const reviewTotal = reviews.length;
  const filter = (starNumber) => reviews.reduce((acc, review) => acc
    + (review.rating === starNumber ? 1 : 0), 0);
  while (reviewStars > 0) {
    const starTotals = filter(reviewStars);
    if (starTotals === 0) {
      starPercentages[reviewStars] = '0';
    } else {
      starPercentages[reviewStars] = ((starTotals / reviewTotal) * 100).toFixed(1);
    }
    reviewStars -= 1;
  }
  return starPercentages;
};

export const getTotalReviewAverageScore = (reviews) => {
  const reviewTotal = reviews.reduce((acc, review) => acc + (review.rating || null), 0);
  const totalReviewAverage = (reviewTotal / reviews.length).toFixed(1);
  return totalReviewAverage;
};
