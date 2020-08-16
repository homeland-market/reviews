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

export const SearchText = {

  filterConditionExtractor(comment, filterCondition) {
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
  },

  highlightAllMatchingCommentText(comment, id, filterCondition) {
    const filterConditionMatches = [];
    const arrayOfElements = [];
    const splitReviewText = comment.split(new RegExp(filterCondition, 'ig'));
    filterConditionMatches.push(...SearchText.filterConditionExtractor(comment, filterCondition));
    splitReviewText.forEach((scentence, index) => {
      arrayOfElements.push(
        <span key={`${id}-${Math.random()}`}>
          {scentence}
          <SearchHighlight>{filterConditionMatches[index]}</SearchHighlight>
        </span>,
      );
    });
    return <ProductUserComments>{arrayOfElements}</ProductUserComments>;
  },

};
