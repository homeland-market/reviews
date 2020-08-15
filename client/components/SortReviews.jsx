import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from 'react-select';

const SortReviewsWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const ReviewsSearchSortFilterResults = styled.div`
  display: flex;
`;

const ClearFiltersButton = styled.div`
  color: #7f187f;
  display: inline-block;
  cursor: pointer;
  background: none;
  outline: inherit;
  border: none;
  padding-left 5px;
  text-decoration: underline;
  font-size: 16px;
  &:hover {
    text-decoration: none;
  }
`;

const customStyles = {
  container: (provided) => ({
    ...provided,
    borderRadius: '8px',
    display: 'flex',
    width: '250px',
    textAlign: 'left',
    minHeight: '56px',
    position: 'relative',
    minWidth: '40%',
    background: '#fff',
  }),
  control: (provided) => ({
    ...provided,
    borderRadius: '8px',
    border: '2px solid #b9b6bc',
    minHeight: '56px',
    height: '56px',
    minWidth: '100%',
    fontWeight: 900,
    color: '#221924',
    transition: 'border-color .25s cubic-bezier(.65,.05,.36,1)',
    '&:hover': {
      transitionDuration: '0s,0s,.25s',
      borderColor: '#47404a',
    },
  }),
  option: (provided) => ({
    ...provided,
    color: '#221924',
    borderRadius: '8px',
    marginLeft: '8px',
    marginRight: '8px',
    marginTop: '8px',
    marginBottom: '8px',
    width: 'auto',
  }),
  input: (provided) => ({
    ...provided,
    minHeight: '1px',
    minWidth: '100%',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    minHeight: '1px',
    height: '24px',
  }),
  clearIndicator: (provided) => ({
    ...provided,
    minHeight: '1px',
  }),
  valueContainer: (provided) => ({
    ...provided,
    minHeight: '1px',
    height: '40px',
    paddingTop: '0',
    paddingBottom: '0',
    marginLeft: '5px',
  }),
  singleValue: (provided) => ({
    ...provided,
    minHeight: '1px',
    color: '#221924',
  }),
};

const options = [
  { value: 'Most relevant', label: 'Most relevant' },
  { value: 'Includes customer photos', label: 'Includes customer photos' },
  { value: 'Most recent', label: 'Most recent' },
  { value: 'Most helpful', label: 'Most helpful' },
];

class SortReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedOption: { value: 'Most relevant', label: 'Most relevant' } };
    this.handleChange = this.handleChange.bind(this);
    this.handleSumbit = this.handleSumbit.bind(this);
  }

  handleChange(selectedOption) {
    const { value } = selectedOption;
    this.setState({ selectedOption });
    this.handleSumbit(value);
  }

  handleSumbit(value) {
    const { sortReviewsBy, filteredReviews } = this.props;
    sortReviewsBy(value, filteredReviews);
  }

  showingReviewsOf() {
    const { filteredReviews, reviewDisplayCount } = this.props;
    const prefix = filteredReviews.length ? '1-' : '0-';
    const suffix = reviewDisplayCount > filteredReviews.length
      ? filteredReviews.length : reviewDisplayCount;
    const totalReviews = filteredReviews.length;
    return `Showing ${prefix}${suffix} of ${totalReviews} `;
  }

  renderReviewsWith() {
    const { filterCondition } = this.props;
    if (filterCondition !== 0 && typeof filterCondition === 'number') {
      return `reviews with "${filterCondition} stars".`;
    }
    if (filterCondition !== '' && typeof filterCondition === 'string') {
      return `reviews with "${filterCondition}".`;
    }
    return 'reviews.';
  }

  render() {
    const {
      filterCondition,
      filterReviews,
    } = this.props;
    const { selectedOption } = this.state;
    return (
      <SortReviewsWrapper>
        <ReviewsSearchSortFilterResults>
          {this.showingReviewsOf()}
          {this.renderReviewsWith()}
          {filterCondition !== 0 && filterCondition !== '' ? (
            <ClearFiltersButton type="button" onClick={() => filterReviews(0)} onKeyPress={() => filterReviews(0)}>
              Clear
            </ClearFiltersButton>
          ) : null}
        </ReviewsSearchSortFilterResults>
        <Select
          components={{ IndicatorSeparator: () => null }}
          styles={customStyles}
          defaultValue={selectedOption}
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
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
    );
  }
}

SortReviews.propTypes = {
  reviewDisplayCount: PropTypes.number.isRequired,
  filteredReviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  sortReviewsBy: PropTypes.func.isRequired,
  filterCondition: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  filterReviews: PropTypes.func.isRequired,
};

export default SortReviews;
