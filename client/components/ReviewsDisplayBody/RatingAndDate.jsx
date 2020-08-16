import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';

import { highlightAllMatchingCommentText, ProductUserComments } from '../../lib/ReviewFiltering';

const StarRatingAndDateJustifySpace = styled.div`
  display: flex;
  margin-bottom: 12px;
  flex-wrap: wrap;
  flex-direction: row;
  min-width: 0;
  justify-content: space-between;
`;

const ReviewStarWrapper = styled.div`
  display: block;
  line-height: 1;
  font-size: 14px;
`;

const ReviewStarStars = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  background-repeat: no-repeat;
  background-size: cover;
  width: 7em;
  height: 1em;
`;

const ReviewDateWrapper = styled.p`
  font-size: 13px;
  margin: 0;
  padding: 0;
`;

const ProductReviewCommentsWrapper = styled.div`
  display: block;
`;

const parseDate = (date) => {
  const splitDate = date.substring(0, date.indexOf('T')).split('-');
  const month = splitDate[1];
  const day = splitDate[2];
  const year = splitDate[0];
  return `${month}/${day}/${year}`;
};

const renderComment = ({ review: { comment, id } }, filterCondition) => {
  if (!filterCondition || typeof filterCondition === 'number') {
    return <ProductUserComments>{comment}</ProductUserComments>;
  }
  return highlightAllMatchingCommentText(comment, id, filterCondition);
};

const RatingAndDate = ({ review, review: { rating, date }, filterCondition }) => (
  <div>
    <StarRatingAndDateJustifySpace>
      <ReviewStarWrapper>
        <ReviewStarStars>
          <StarRatings
            rating={rating}
            starDimension="20px"
            starSpacing="0"
            starRatedColor="#f6b71d"
            starEmptyColor="#d9d8db"
            svgIconPath="M6.64 10.94L3.7 12.48c-.97.52-1.6.05-1.43-1.04l.56-3.26-2.36-2.3c-.8-.78-.55-1.54.54-1.7L4.3 3.7 5.75.76c.5-1 1.28-1 1.77 0L9 3.7l3.26.48c1.1.16 1.34.92.55 1.7l-2.36 2.3.56 3.26c.2 1.1-.46 1.56-1.44 1.04l-2.92-1.54z"
            svgIconViewBox="0 0 20 13"
          />
        </ReviewStarStars>
      </ReviewStarWrapper>
      <ReviewDateWrapper>
        {parseDate(date)}
      </ReviewDateWrapper>
    </StarRatingAndDateJustifySpace>

    <ProductReviewCommentsWrapper>
      {renderComment({ review }, filterCondition)}
    </ProductReviewCommentsWrapper>
  </div>
);

RatingAndDate.propTypes = {
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

export default RatingAndDate;
