import React from 'react';
import PropTypes from 'prop-types';

const filterConditionExtractor = (comment, filterCondition) => {
  const filterConditionIgnoreCase = filterCondition.toLowerCase();
  const extractedMatches = [];

  const extractAllInstances = (text) => {
    const textIgnoreCase = text.toLowerCase();
    const startIndex = textIgnoreCase.indexOf(filterConditionIgnoreCase);
    const endIndex = startIndex + filterConditionIgnoreCase.length;
    if (startIndex === -1) { return extractedMatches; }
    extractedMatches.push(text.substring(startIndex, endIndex));
    return extractAllInstances(text.slice(startIndex + 1));
  };

  extractAllInstances(comment);
  return extractedMatches;
};

const highlightAllMatchingCommentText = (comment, id, filterCondition) => {
  const filterConditionMatches = [];
  const arrayOfElements = [];
  const splitReviewText = comment.split(new RegExp(filterCondition, 'ig'));
  filterConditionMatches.push(...filterConditionExtractor(comment, filterCondition));
  splitReviewText.forEach((scentence, index) => {
    arrayOfElements.push(
      <span key={`${id}-${Math.random()}`}>
        {scentence}
        <mark>{filterConditionMatches[index]}</mark>
      </span>,
    );
  });
  return <div>{arrayOfElements}</div>;
};

const ReviewComment = ({ review: { comment, id }, filterCondition }) => {
  if (!filterCondition || typeof filterCondition === 'number') {
    return <div>{comment}</div>;
  }
  return highlightAllMatchingCommentText(comment, id, filterCondition);
};

ReviewComment.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number,
    url_id: PropTypes.number,
    name: PropTypes.string,
    location: PropTypes.string,
    date: PropTypes.string,
    comment: PropTypes.string,
    rating: PropTypes.number,
    helpful: PropTypes.number,
    img: PropTypes.string,
  }).isRequired,
  filterCondition: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default ReviewComment;
