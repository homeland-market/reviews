import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import RatingDateComment from './ReviewsDisplayBody/RatingDateComment';
import CustomerImage from './ReviewsDisplayBody/CustomerImage';
import NameAndLocation from './ReviewsDisplayBody/NameAndLocation';
import HelpfulButton from './ReviewsDisplayBody/HelpfulButton';

const ReviewsDisplayContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  display: relative;
  margin-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
`;

const RatingDateCommentContainer = styled.div`
  grid-area: reviewDetails;
`;

const CustomerImageContainer = styled.div`
  grid-area: reviewPhotos;
`;

const NameAndLocationContainer = styled.div`
  grid-area: customerInfo;
  margin-bottom: 12px;
`;

const HelpfulButtonContainer = styled.div`
  align-self: center;
  display: block;
  grid-area: helpfulButton;
  justify-self: left;
`;

const ProductReviewDivider = styled.hr`
  background-color: #d9d8db;
  border: 0;
  display: block;
  height: 1px;
  margin: 0;
  margin-block-end: 0.5em;
  margin-block-start: 0.5em;
  margin-inline-end: auto;
  margin-inline-start: auto;
  overflow: hidden;
`;

const ReviewsDisplay = ({
  reviewDisplayCount,
  filteredReviews,
  filterCondition,
}) => {
  const reviewsToRender = filteredReviews.slice(0, reviewDisplayCount);
  const totalAmountOfReviews = reviewsToRender.length;
  return (
    <section>
      <ReviewsDisplayContainer>
        {reviewsToRender.map((review, index) => (
          <div key={review.id}>
            <ProductReviewGrid>
              <RatingDateCommentContainer>
                <RatingDateComment
                  review={review}
                  filterCondition={filterCondition}
                />
              </RatingDateCommentContainer>
              <CustomerImageContainer>
                <CustomerImage
                  review={review}
                />
              </CustomerImageContainer>
              <NameAndLocationContainer>
                <NameAndLocation
                  review={review}
                />
              </NameAndLocationContainer>
              <HelpfulButtonContainer>
                <HelpfulButton
                  review={review}
                />
              </HelpfulButtonContainer>
            </ProductReviewGrid>
            {index < (totalAmountOfReviews - 1) && <ProductReviewDivider />}
          </div>
        ))}
      </ReviewsDisplayContainer>
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
    imgmedium: 'https://bit.ly/3kMfzKt',
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
      imgmedium: PropTypes.string,
    }),
    PropTypes.array),
  ]),
  filterCondition: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default ReviewsDisplay;
