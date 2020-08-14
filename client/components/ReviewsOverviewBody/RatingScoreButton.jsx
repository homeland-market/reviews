import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    const { score } = this.props;
    return (
      <div>
        <div>
          {score}
        </div>
        <button type="button" onClick={() => this.handleRatingClick()}>{score}</button>
        <div>
          {this.ReviewScoreTotals()}
        </div>
      </div>
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
  score: PropTypes.number.isRequired,
  filterReviews: PropTypes.func.isRequired,
};

export default RatingScoreButton;
