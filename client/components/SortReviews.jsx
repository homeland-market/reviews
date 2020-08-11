import React from 'react';
import PropTypes from 'prop-types';

class SortReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Most relevant' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSumbit = this.handleSumbit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.handleSumbit(event.target.value);
  }

  handleSumbit(value) {
    const { sortReviewsBy } = this.props;
    sortReviewsBy(value);
  }

  renderReviewsWith() {
    const { starRatingFilter, textFilter } = this.props;
    if (starRatingFilter !== 0 && textFilter === '') {
      return `reviews with "${starRatingFilter} stars". `;
    }
    if (starRatingFilter === 0 && textFilter !== '') {
      return `reviews with "${textFilter}". `;
    }
    return 'reviews.';
  }

  render() {
    const {
      filteredReviews,
      reviewDisplayCount,
      starRatingFilter,
      filterReviews,
      textFilter,
    } = this.props;
    const { value } = this.state;
    return (
      <section>
        <h1>
          REVIEWS SORT
        </h1>
        <div>
          Showing
          {' '}
          {filteredReviews.length ? '1-' : '0-'}
          {reviewDisplayCount > filteredReviews.length
            ? filteredReviews.length : reviewDisplayCount}
          {' '}
          of
          {' '}
          {filteredReviews.length}
          {' '}
          {this.renderReviewsWith()}
          {starRatingFilter !== 0 || textFilter !== '' ? (
            <button type="button" onClick={() => filterReviews(0)} onKeyPress={() => filterReviews(0)}>
              Clear
            </button>
          ) : null}
        </div>
        <div>
          <span>Sort By </span>
          <select value={value.value} onChange={this.handleChange}>
            <option value="Most relevant">Most relevant</option>
            <option value="Includes customer photos">Includes customer photos</option>
            <option value="Most recent">Most recent</option>
            <option value="Most helpful">Most helpful</option>
          </select>
        </div>
      </section>
    );
  }
}

SortReviews.propTypes = {
  reviewDisplayCount: PropTypes.number.isRequired,
  filteredReviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  sortReviewsBy: PropTypes.func.isRequired,
  starRatingFilter: PropTypes.number.isRequired,
  filterReviews: PropTypes.func.isRequired,
  textFilter: PropTypes.string,
};

SortReviews.defaultProps = {
  textFilter: '',
};

export default SortReviews;