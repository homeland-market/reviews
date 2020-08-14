import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const SearchFullWrapper = styled.div`
`;

class SearchReviews extends Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };
  }

  handleSearchChange(event) {
    const queryIgnoreCaseTrim = event.target.value.toLowerCase().trim();
    this.setState({ query: queryIgnoreCaseTrim });
  }

  handleSearchClick() {
    const { query } = this.state;
    const { filterReviewsByText } = this.props;
    document.getElementById('search-bar').reset();
    filterReviewsByText(query);
  }

  render() {
    return (
      <SearchFullWrapper>
        <h1> SEARCH REVIEWS </h1>
        <form id="search-bar">
          <input
            onChange={(e) => this.handleSearchChange(e)}
            type="text"
            className="input"
            id="searchReviews"
            placeholder="Search Reviews"
          />
          <button type="button" onClick={() => this.handleSearchClick()}>Search Item</button>
        </form>
      </SearchFullWrapper>
    );
  }
}

SearchReviews.propTypes = {
  filterReviewsByText: PropTypes.func.isRequired,
};

export default SearchReviews;
