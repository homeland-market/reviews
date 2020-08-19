import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import RatingDateComment from './ReviewsDisplayBodyContent/RatingDateComment';
import CustomerImage from './ReviewsDisplayBodyContent/CustomerImage';
import NameAndLocation from './ReviewsDisplayBodyContent/NameAndLocation';
import HelpfulButton from './ReviewsDisplayBodyContent/HelpfulButton';

const ProductReviewGrid = styled.article`
  align-items: start;
  column-gap: 10%;
  display: grid;
  grid-template-areas:
      "customerInfo reviewDetails helpfulButton"
      "reviewPhotos reviewDetails helpfulButton";
  grid-template-columns: 216px minmax(350px,3fr) minmax(150px,1fr);
  grid-template-rows: auto minmax(auto,1fr);
  padding-bottom: 24px;
  padding-top: 24px;
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

const ReviewsBody = ({ reviewsToRender, filterCondition }) => {
  const totalAmountOfReviews = reviewsToRender.length;
  return reviewsToRender.map((review, index) => (
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
  ));
};

ReviewsBody.defaultProps = {
  reviewsToRender: [{
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

ReviewsBody.propTypes = {
  reviewsToRender: PropTypes.oneOfType([
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

export default ReviewsBody;
