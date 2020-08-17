import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Calc } from '../../../lib/FilterSortCalc';

import { SmallStarSVG, StarSVGPath } from '../../../assets/svg';
import { StrippedButton } from '../../../assets/styles';

const StarNumber = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 2em;
`;

const FillBarContainer = styled.div`
  width: 100%;
`;

const FillBarBackground = styled.div`
  background-color: ${(props) => (props.filterCondition === props.rating ? '#b9b6bc' : '#d9d8db')};
  border-radius: 50vw;
  height: 24px;
  overflow: hidden;
  transition: background-color .1s cubic-bezier(.65,.05,.36,1);
}
`;

const FillBarFill = styled.div`
  background-color: ${(props) => (props.filterCondition === props.rating ? '#520f54' : '#7f187f')};
  border-radius: 50vw 0 0 50vw;
  height: 100%;
  width: ${(props) => props.reviewStarPercentages}%;
  transition: width .5s cubic-bezier(0.65, 0.05, 0.36, 1),
              background-color .1s cubic-bezier(.65,.05,.36,1);
`;

const StarReviewCount = styled.div`
  flex-shrink: 0;
  padding-left: 12px;
  width: 2em;
`;

const RatingButtonWrapper = styled(StrippedButton)`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  max-width: 350px;
  min-width: 300px;

  &:hover ${FillBarFill} {
    background-color: #520f54;
    transition: width .5s cubic-bezier(0.65, 0.05, 0.36, 1),
                background-color .1s cubic-bezier(.65,.05,.36,1);
  }

  &:hover ${FillBarBackground} {
    background-color: #b9b6bc;
    transition: width .5s cubic-bezier(0.65, 0.05, 0.36, 1),
                background-color .1s cubic-bezier(.65,.05,.36,1);
  }

  &:hover ${SmallStarSVG} {
    fill: #520f54;
    transition: width .5s cubic-bezier(0.65, 0.05, 0.36, 1),
                background-color .1s cubic-bezier(.65,.05,.36,1);
  }
`;

const IndividualStarRating = ({
  rating,
  reviews,
  reviewStarPercentages,
  filterCondition,
  filterReviewsByStarRating,
}) => (
  <RatingButtonWrapper
    onClick={() => (filterCondition !== rating ? filterReviewsByStarRating(rating)
      : filterReviewsByStarRating(0))}
  >
    <StarNumber>
      {rating}
    </StarNumber>
    <SmallStarSVG
      rating={rating}
      filterCondition={filterCondition}
      viewBox="0 0 20 13"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <StarSVGPath />
    </SmallStarSVG>
    <FillBarContainer>
      <FillBarBackground
        rating={rating}
        filterCondition={filterCondition}
      >
        <FillBarFill
          rating={rating}
          reviewStarPercentages={reviewStarPercentages}
          filterCondition={filterCondition}
        />
      </FillBarBackground>
    </FillBarContainer>
    <StarReviewCount>
      {Calc.totalStarReviewCount(reviews, rating)}
    </StarReviewCount>
  </RatingButtonWrapper>
);

IndividualStarRating.defaultProps = {
  rating: 0,
  reviews: {
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
  reviewStarPercentages: '0',
  filterCondition: 2,
};

IndividualStarRating.propTypes = {
  rating: PropTypes.number,
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
  })),
  reviewStarPercentages: PropTypes.string,
  filterCondition: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  filterReviewsByStarRating: PropTypes.func.isRequired,
};

export default IndividualStarRating;
