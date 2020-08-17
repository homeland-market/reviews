import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from 'react-select';

import { Parse } from '../../lib/FilterSortCalcParse';

import { customSortBar } from '../../assets/styles';

const SortReviewsWrapper = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

const ReviewsSearchSortFilterResults = styled.div`
  display: flex;
`;

const ClearFiltersButton = styled.div`
  background: none;
  border: none;
  color: #7f187f;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  padding-left 5px;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;

const sortByOptions = [
  { value: 'Most relevant', label: 'Most relevant' },
  { value: 'Includes customer photos', label: 'Includes customer photos' },
  { value: 'Most recent', label: 'Most recent' },
  { value: 'Most helpful', label: 'Most helpful' },
];

class ReviewsSort extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedOption: sortByOptions[0] };
    this.handleSortChange = this.handleSortChange.bind(this);
  }

  handleSortChange(selectedOption) {
    const { sortReviews, filteredReviews } = this.props;
    const { value } = selectedOption;
    this.setState({ selectedOption });
    sortReviews(filteredReviews, value);
  }

  render() {
    const {
      reviewDisplayCount,
      filteredReviews,
      filterCondition,
      filterReviewsByStarRating,
    } = this.props;
    const { selectedOption } = this.state;
    return (
      <section>
        <SortReviewsWrapper>
          <ReviewsSearchSortFilterResults>
            {Parse.showingReviewsOfText(filterCondition, reviewDisplayCount, filteredReviews)}
            {Parse.reviewsWithText(filterCondition)}
            {filterCondition !== 0 && filterCondition !== '' ? (
              <ClearFiltersButton
                type="button"
                onClick={() => filterReviewsByStarRating(0)}
                onKeyPress={() => filterReviewsByStarRating(0)}
              >
                Clear
              </ClearFiltersButton>
            ) : null}
          </ReviewsSearchSortFilterResults>
          <Select
            components={{ IndicatorSeparator: () => null }}
            styles={customSortBar}
            defaultValue={selectedOption}
            value={selectedOption}
            onChange={this.handleSortChange}
            options={sortByOptions}
            placeholder="Sort by"
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary25: '#e6d3e4',
                primary: '#d9d8db',
              },
            })}
          />
        </SortReviewsWrapper>
      </section>
    );
  }
}

ReviewsSort.defaultProps = {
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
  }],
  filterCondition: 0,
};

ReviewsSort.propTypes = {
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
    }),
    PropTypes.array),
  ]),
  filterCondition: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  filterReviewsByStarRating: PropTypes.func.isRequired,
  sortReviews: PropTypes.func.isRequired,
};

export default ReviewsSort;
