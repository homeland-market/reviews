import React from 'react';
import PropTypes from 'prop-types';

class SearchReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  handleChange(event) {
    const queryIgnoreCaseTrim = event.target.value.toLowerCase().trim();
    this.setState({ query: queryIgnoreCaseTrim });
  }

  searchReviewText() {
    const { query } = this.state;
    const { filterReviewsByText } = this.props;
    document.getElementById('search-bar').reset();
    filterReviewsByText(query);
  }

  render() {
    return (
      <section>
        <h1> SEARCH REVIEWS </h1>
        <form id="search-bar">
          <input
            onChange={(e) => this.handleChange(e)}
            type="text"
            className="input"
            id="searchReviews"
            placeholder="Search Reviews"
          />
          <button type="button" onClick={() => this.searchReviewText()}>
            Search Item
          </button>
        </form>
      </section>
    );
  }
}

SearchReviews.propTypes = {
  filterReviewsByText: PropTypes.func.isRequired,
};

export default SearchReviews;
