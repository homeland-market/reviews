import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';

const RatingBlock = styled.div`
  display: block;
  text-align: center;
`;

const RatingAverageBlock = styled.span`
  display: flex;
  flex-direction column;
  justify-content: space-between;
  font-size: 3.815rem;
`;

const ReviewStarsMain = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;
`;

const TotalReviewsBlock = styled.span`
  font-weight: 700;
  margin-top: 16px;
`;

class ReviewAverageRating extends Component {
  constructor(props) {
    super(props);
    this.state = { reviewAverage: 0 };
  }

  componentDidUpdate() {
    const { reviews } = this.props;
    const { reviewAverage } = this.state;
    if (reviews.length && reviewAverage === 0) {
      const reviewTotal = reviews.reduce((acc, review) => acc + (review.rating || null), 0);
      const average = (reviewTotal / reviews.length).toFixed(1);
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ reviewAverage: average });
    }
  }

  totalReviews() {
    const { reviews } = this.props;
    return `${reviews.length} Reviews`;
  }

  render() {
    const { reviewAverage } = this.state;
    return (
      <RatingBlock>
        <RatingAverageBlock>
          {reviewAverage}
        </RatingAverageBlock>
        <div className="ReviewStartsWrapper">
          <ReviewStarsMain>
            <StarRatings
              rating={Number(reviewAverage)}
              starDimension="45px"
              starSpacing="0px"
              starRatedColor="#f6b71d"
              svgIconPath="M6.64 10.94L3.7 12.48c-.97.52-1.6.05-1.43-1.04l.56-3.26-2.36-2.3c-.8-.78-.55-1.54.54-1.7L4.3 3.7 5.75.76c.5-1 1.28-1 1.77 0L9 3.7l3.26.48c1.1.16 1.34.92.55 1.7l-2.36 2.3.56 3.26c.2 1.1-.46 1.56-1.44 1.04l-2.92-1.54z"
              svgIconViewBox="0 0 20 13"
            />
          </ReviewStarsMain>
        </div>
        <TotalReviewsBlock>
          {this.totalReviews()}
        </TotalReviewsBlock>
      </RatingBlock>
    );
  }
}

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
};

export default ReviewAverageRating;
