import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RatingScores = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  color: #000;
  width: 3em;
  margin-right: 4px;
`;

const StarSVGContainer = styled.svg`
  padding-left: 10px;
  fill: ${(props) => (props.toggle ? '#520f54;' : '#f6b71d')};
`;

const ProductHistogramBar = styled.div`
  width: calc(100% - 2em);
  height: 24px;
  background-color: ${(props) => (props.toggle ? '#b9b6bc' : '#d9d8db')};
  transition: background-color .1s cubic-bezier(.65,.05,.36,1);
  border-radius: 50vw;
  overflow: hidden;
}
`;

const ProductHistogramBarHighlighted = styled.div`
  width: ${(props) => props.fillPercentage}%;
  height: 100%;
  transition: width .5s cubic-bezier(0.65, 0.05, 0.36, 1),background-color .1s cubic-bezier(.65,.05,.36,1);
  background-color: ${(props) => (props.toggle ? '#520f54' : '#7f187f')};
  border-radius: 50vw 0 0 50vw;
`;

const ProductHistogramCount = styled.div`
  flex-shrink: 0;
  padding-left: 12px;
`;

const RatingButtonWrapper = styled.button`
  display: flex;
  min-width: 300px;
  max-width: 350px;
  flex-direction: row;
  flex-grow: 1;
  flex-shrink: 1;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  outline: inherit;
  &:hover ${ProductHistogramBarHighlighted} {
    transition: width .5s cubic-bezier(0.65, 0.05, 0.36, 1),background-color .1s cubic-bezier(.65,.05,.36,1);
    background-color: #520f54;
  }
  &:hover ${ProductHistogramBar} {
    transition: width .5s cubic-bezier(0.65, 0.05, 0.36, 1),background-color .1s cubic-bezier(.65,.05,.36,1);
    background-color: #b9b6bc;
  }
  &:hover ${StarSVGContainer} {
    transition: width .5s cubic-bezier(0.65, 0.05, 0.36, 1),background-color .1s cubic-bezier(.65,.05,.36,1);
    fill: #520f54;
  }
`;

class RatingScoreButton extends Component {
  constructor(props) {
    super(props);
    this.state = { ratingToggle: false };
  }

  ReviewScoreTotals() {
    const { reviews, score } = this.props;
    return reviews.reduce((acc, review) => acc + (review.rating === score ? 1 : 0), 0);
  }

  handleRatingClick() {
    const { score, filterReviews } = this.props;
    const { ratingToggle } = this.state;
    if (!ratingToggle) {
      this.setState({ ratingToggle: true });
      filterReviews(score);
    } else {
      this.setState({ ratingToggle: false });
      filterReviews(0);
    }
  }

  render() {
    const { score, reviewPercentages } = this.props;
    return (
      <RatingButtonWrapper onClick={() => this.handleRatingClick()}>
        <RatingScores>
          {score}
          <span>
            <StarSVGContainer
              toggle={this.state.ratingToggle}
              width="100%"
              height="100%"
              viewBox="0 1 20 13"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            // fill="#f6b71d"
            >
              <path d="M6.64 10.94L3.7 12.48c-.97.52-1.6.05-1.43-1.04l.56-3.26-2.36-2.3c-.8-.78-.55-1.54.54-1.7L4.3 3.7 5.75.76c.5-1 1.28-1 1.77 0L9 3.7l3.26.48c1.1.16 1.34.92.55 1.7l-2.36 2.3.56 3.26c.2 1.1-.46 1.56-1.44 1.04l-2.92-1.54z" />
            </StarSVGContainer>
          </span>
        </RatingScores>
        <ProductHistogramBar toggle={this.state.ratingToggle}>
          <ProductHistogramBarHighlighted
            toggle={this.state.ratingToggle}
            fillPercentage={reviewPercentages}
          />
        </ProductHistogramBar>
        <ProductHistogramCount>
          {this.ReviewScoreTotals()}
        </ProductHistogramCount>
      </RatingButtonWrapper>
    );
  }
}

RatingScoreButton.propTypes = {
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
  reviewPercentages: PropTypes.string,
  score: PropTypes.number.isRequired,
  filterReviews: PropTypes.func.isRequired,
};

RatingScoreButton.defaultProps = {
  reviewPercentages: '0',
};

export default RatingScoreButton;
