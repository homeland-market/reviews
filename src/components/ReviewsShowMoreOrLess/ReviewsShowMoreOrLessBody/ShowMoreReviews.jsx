import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Parse } from '../../../lib/FilterSortCalcParse';

import { ShowMoreOrLessButton } from '../../../assets/styles';
import { DownArrowSVG, DownArrowSVGPath } from '../../../assets/svg';

class ShowMoreReviews extends Component {
  constructor(props) {
    super(props);
    this.state = { showButton: true };
  }

  hideShowMoreButton() {
    this.setState((prevState) => ({ showButton: !prevState.showButton }));
  }

  render() {
    const { increaseReviewDisplayCount, reviewDisplayCount, filteredReviewsLength } = this.props;
    const { showButton } = this.state;
    return (
      <section>
        {reviewDisplayCount < filteredReviewsLength && showButton && ( // AWFUL... BUT WORKS
          <ShowMoreOrLessButton
            type="button"
            onClick={() => { increaseReviewDisplayCount(); this.hideShowMoreButton(); }}
            onKeyPress={increaseReviewDisplayCount}
          >
            {Parse.showMoreReviewsNumber(filteredReviewsLength, reviewDisplayCount)}
            <DownArrowSVG
              viewBox="0 0 28 28"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path d={DownArrowSVGPath} />
            </DownArrowSVG>
          </ShowMoreOrLessButton>
        )}
        {reviewDisplayCount < filteredReviewsLength && !showButton && ( // AWFUL... BUT WORKS
          <ShowMoreOrLessButton
            type="button"
            onClick={() => { increaseReviewDisplayCount(); this.hideShowMoreButton(); }}
            onKeyPress={increaseReviewDisplayCount}
          >
            {Parse.showMoreReviewsNumber(filteredReviewsLength, reviewDisplayCount)}
            <DownArrowSVG
              viewBox="0 0 28 28"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path d={DownArrowSVGPath} />
            </DownArrowSVG>
          </ShowMoreOrLessButton>
        )}
      </section>
    );
  }
}

ShowMoreReviews.defaultProps = {
  reviewDisplayCount: 3,
  filteredReviewsLength: 0,
};

ShowMoreReviews.propTypes = {
  reviewDisplayCount: PropTypes.number,
  filteredReviewsLength: PropTypes.number,
  increaseReviewDisplayCount: PropTypes.func.isRequired,
};

export default ShowMoreReviews;
