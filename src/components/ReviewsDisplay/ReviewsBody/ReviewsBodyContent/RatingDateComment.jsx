import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';

import { Parse } from '../../../../lib/FilterSortCalcParse';
import { SearchText } from '../../../../lib/SearchText';

import { fiveStarsSVGPath } from '../../../../assets/svg';

const StarRatingDateCommentJustifySpace = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 12px;
  min-width: 0;
`;

const ReviewStarContainer = styled.div`
  font-size: 14px;
  line-height: 1;
`;

const ReviewStars = styled.div`
  display: inline-block;
  height: 1em;
  position: relative;
  vertical-align: middle;
  width: 7em;
`;

const ReviewDateContainer = styled.p`
  font-size: 13px;
  margin: 0;
  padding: 0;
`;

const ProductReviewCommentsContainer = styled.div`
  padding-top: 8px;
`;

const RatingDateComment = ({
  review,
  review: { rating, date },
  filterCondition,
}) => (
  <div>
    <StarRatingDateCommentJustifySpace>
      <ReviewStarContainer>
        <ReviewStars>
          <StarRatings
            rating={rating}
            starDimension="20px"
            starSpacing="0"
            starRatedColor="#f6b71d"
            starEmptyColor="#d9d8db"
            svgIconPath={fiveStarsSVGPath}
            svgIconViewBox="0 0 20 13"
          />
        </ReviewStars>
      </ReviewStarContainer>
      <ReviewDateContainer>
        {Parse.parseDate(date)}
      </ReviewDateContainer>
    </StarRatingDateCommentJustifySpace>
    <ProductReviewCommentsContainer>
      {SearchText.renderComment({ review }, filterCondition)}
    </ProductReviewCommentsContainer>
  </div>
);

RatingDateComment.defaultProps = {
  review: {
    id: 2,
    url_id: 2,
    name: 'Yu-Lin',
    location: 'California',
    date: '2020-20-20T20:20:20.000Z',
    comment: 'Reviews are fun',
    rating: 2,
    helpful: 2,
    img: 'https://bit.ly/3kMfzKt',
  },
  filterCondition: 0,
};

RatingDateComment.propTypes = {
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
  }),
  filterCondition: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default RatingDateComment;
