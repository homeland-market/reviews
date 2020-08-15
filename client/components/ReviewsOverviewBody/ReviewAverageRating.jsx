import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';

const RatingBlock = styled.div`
  text-align: center;
  font-weight: 500;
`;

const RatingAverageBlock = styled.span`
  font-size: 3.85rem;
`;

const TotalReviewsBlock = styled.div`
  font-weight: 700;
  margin-top: 6px;
`;

const ReviewAverageRating = ({ reviews, reviewAverage }) => (
  <RatingBlock>
    <RatingAverageBlock>
      {reviewAverage}
    </RatingAverageBlock>
    <div className="ReviewStartsWrapper">
      <StarRatings
        rating={Number(reviewAverage)}
        starDimension="45px"
        starSpacing="0"
        starRatedColor="#f6b71d"
        starEmptyColor="#d9d8db"
        svgIconPath="M6.64 10.94L3.7 12.48c-.97.52-1.6.05-1.43-1.04l.56-3.26-2.36-2.3c-.8-.78-.55-1.54.54-1.7L4.3 3.7 5.75.76c.5-1 1.28-1 1.77 0L9 3.7l3.26.48c1.1.16 1.34.92.55 1.7l-2.36 2.3.56 3.26c.2 1.1-.46 1.56-1.44 1.04l-2.92-1.54z"
        svgIconViewBox="0 0 20 13"
      />
    </div>
    <TotalReviewsBlock>
      {`${reviews.length} Reviews`}
    </TotalReviewsBlock>
  </RatingBlock>
);

ReviewAverageRating.propTypes = {
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
  reviewAverage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default ReviewAverageRating;
