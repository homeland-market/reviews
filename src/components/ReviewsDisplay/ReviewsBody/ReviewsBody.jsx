import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import NameAndLocation from './ReviewsBodyContent/NameAndLocation';
import RatingDateComment from './ReviewsBodyContent/RatingDateComment';
import HelpfulButton from './ReviewsBodyContent/HelpfulButton';
import CustomerImage from './ReviewsBodyContent/CustomerImage';

const ProductReviewGrid = styled.article`
  display: grid;
  grid-template-areas:
      "customerInfo reviewDetails helpfulButton"
      "reviewPhotos reviewDetails helpfulButton";
  grid-template-columns: 216px minmax(350px,3fr) minmax(150px,1fr);
  grid-template-rows: auto minmax(auto,1fr);
  column-gap: 10%;
  align-items: start;
  padding-top: 24px;
  padding-bottom: 24px;
`;

const ProductReviewDivider = styled.hr`
  height: 1px;
  border: 0;
  margin: 0;
  background-color: #d9d8db;
  display: block;
  unicode-bidi: isolate;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  margin-inline-start: auto;
  margin-inline-end: auto;
  overflow: hidden;
`;

const ProductReviewsCustomerInfo = styled.div`
  grid-area: customerInfo;
  margin-bottom: 12px;
`;

const ProductReviewsReviewDetails = styled.div`
  grid-area: reviewDetails;
`;

const ProductReviewsHelpfulButton = styled.div`
  grid-area: helpfulButton;
  align-self: center;
  justify-self: left;
  display: block;
`;

const ProductReviewsReviewPhotos = styled.div`
  grid-area: reviewPhotos;
`;

const ReviewsBody = ({ reviewsToRender, filterCondition }) => {
  let counter = 0;
  const totalAmountOfReviews = reviewsToRender.length;
  const elements = [];
  while (counter < totalAmountOfReviews) {
    const review = reviewsToRender[counter];
    elements.push(
      <div key={review.id}>
        <ProductReviewGrid>
          <ProductReviewsReviewDetails>
            <RatingDateComment review={review} filterCondition={filterCondition} />
          </ProductReviewsReviewDetails>
          <ProductReviewsReviewPhotos>
            <CustomerImage review={review} />
          </ProductReviewsReviewPhotos>
          <ProductReviewsCustomerInfo>
            <NameAndLocation review={review} />
          </ProductReviewsCustomerInfo>
          <ProductReviewsHelpfulButton>
            <HelpfulButton review={review} />
          </ProductReviewsHelpfulButton>
        </ProductReviewGrid>
        {counter < totalAmountOfReviews - 1 && <ProductReviewDivider />}
      </div>,
    );
    counter += 1;
  }
  return <div>{elements}</div>;
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
    }),
    PropTypes.array),
  ]),
  filterCondition: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default ReviewsBody;
