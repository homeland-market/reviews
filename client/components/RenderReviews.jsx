import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ReviewNameAndLocation from './RenderReviewsBody/ReviewNameAndLocation';
import ReviewDetails from './RenderReviewsBody/ReviewDetails';
import HelpfulButton from './RenderReviewsBody/HelpfulButton';
import ReviewImage from './RenderReviewsBody/ReviewImage';
import ShowMoreButton from './RenderReviewsBody/ShowMoreButton';
import ShowLessButton from './RenderReviewsBody/ShowLessButton';

const RenderReviewsContainer = styled.div`
  display: block;
  border-radius: 8px;
  background-color: #fff;
  margin-top: 24px;
  padding-right: 24px;
  padding-left: 24px;
`;

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

const ShowMoreAndLessWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  background-color: none;
  padding: 24px;
`;

const renderReviewBody = (filteredReviews, filterCondition) => {
  let counter = 0;
  const elements = [];
  while (counter < filteredReviews.length) {
    elements.push(
      <div key={filteredReviews[counter].id}>
        <ProductReviewGrid>
          <ProductReviewsReviewDetails>
            <ReviewDetails review={filteredReviews[counter]} filterCondition={filterCondition} />
          </ProductReviewsReviewDetails>
          <ProductReviewsReviewPhotos>
            <ReviewImage review={filteredReviews[counter]} />
          </ProductReviewsReviewPhotos>
          <ProductReviewsCustomerInfo>
            <ReviewNameAndLocation review={filteredReviews[counter]} />
          </ProductReviewsCustomerInfo>
          <ProductReviewsHelpfulButton>
            <HelpfulButton review={filteredReviews[counter]} />
          </ProductReviewsHelpfulButton>
        </ProductReviewGrid>
        {counter < filteredReviews.length - 1 && <ProductReviewDivider />}
      </div>,
    );
    counter += 1;
  }
  return <div>{elements}</div>;
};

const RenderReviews = (props) => {
  const {
    seeMoreReviews,
    resetReviewDisplayCount,
    reviewDisplayCount,
    filteredReviews,
    filterCondition,
  } = props;
  const reviewsToRender = filteredReviews.slice(0, reviewDisplayCount);
  return (
    <div>
      <RenderReviewsContainer>
        {filteredReviews.length && renderReviewBody(reviewsToRender, filterCondition)}
      </RenderReviewsContainer>
      <ShowMoreAndLessWrapper>
        <ShowMoreButton
          seeMoreReviews={seeMoreReviews}
          reviewDisplayCount={reviewDisplayCount}
          filteredReviews={filteredReviews}
        />
        <ShowLessButton
          resetReviewDisplayCount={resetReviewDisplayCount}
          reviewDisplayCount={reviewDisplayCount}
        />
      </ShowMoreAndLessWrapper>
    </div>
  );
};

RenderReviews.propTypes = {
  seeMoreReviews: PropTypes.func.isRequired,
  resetReviewDisplayCount: PropTypes.func.isRequired,
  reviewDisplayCount: PropTypes.number.isRequired,
  filteredReviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterCondition: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default RenderReviews;
