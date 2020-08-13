import ReactDOM from 'react-dom';
import React, { Component } from 'react';

import ReviewsOverview from './components/ReviewsOverview';
import SearchReviews from './components/SearchReviews';
import SortReviews from './components/SortReviews';
import RenderReviews from './components/RenderReviews';

import { getAllReviews } from './lib/DatabaseRequests';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      reviewDisplayCount: 3,
      filteredReviews: [],
      filterCondition: 0,
    };
    this.seeMoreReviews = this.seeMoreReviews.bind(this);
    this.resetReviewDisplayCount = this.resetReviewDisplayCount.bind(this);
    this.filterReviews = this.filterReviews.bind(this);
    this.sortReviewsBy = this.sortReviewsBy.bind(this);
    this.filterReviewsByText = this.filterReviewsByText.bind(this);
  }

  componentDidMount() {
    getAllReviews((reviews) => {
      this.setState({
        reviews,
        filteredReviews: reviews.sort((a, b) => b.helpful - a.helpful),
      });
    });
  }

  filterReviews(value) {
    const { reviews } = this.state;
    const { filterCondition } = this.state;
    if (filterCondition === value || value === 0) {
      this.setState({
        reviewDisplayCount: 3,
        filteredReviews: reviews,
        filterCondition: 0,
      });
    } else {
      const filtered = reviews.filter((review) => review.rating === value);
      if (filtered.length) {
        this.setState({
          reviewDisplayCount: 3,
          filteredReviews: filtered,
          filterCondition: value,
        });
      }
    }
  }

  filterReviewsByText(value) {
    this.setState((prevState) => ({
      reviewDisplayCount: 3,
      filterCondition: value,
      filteredReviews: prevState.reviews.filter((review) => review.comment.toLowerCase()
        .includes(value.toLowerCase().trim())),
    }));
  }

  sortReviewsBy(value) {
    if (value === 'Includes customer photos') {
      this.setState((prevState) => ({
        filteredReviews: prevState.filteredReviews.sort((a, b) => (a.img === null)
          - (b.img === null) || +(a > b) || -(a < b)),
      }));
    }
    if (value === 'Most recent') {
      this.setState((prevState) => ({
        filteredReviews: prevState.filteredReviews.sort((a, b) => new Date(b.date)
          - new Date(a.date)),
      }));
    }
    if (value === 'Most helpful' || value === 'Most relevant') {
      this.setState((prevState) => ({
        filteredReviews: prevState.filteredReviews.sort((a, b) => b.helpful - a.helpful),
      }));
    }
  }

  seeMoreReviews() {
    this.setState((prevState) => ({
      reviewDisplayCount: prevState.reviewDisplayCount + 10,
    }));
  }

  resetReviewDisplayCount() {
    this.setState({
      reviewDisplayCount: 3,
    });
  }

  render() {
    const {
      reviews,
      reviewDisplayCount,
      filteredReviews,
      filterCondition,
    } = this.state;
    return (
      <div>
        <h1>
          REVIEWS & RATINGS
        </h1>
        <ReviewsOverview
          reviews={reviews}
          filterReviews={this.filterReviews}
        />
        <SearchReviews
          filterReviewsByText={this.filterReviewsByText}
        />
        <SortReviews
          reviewDisplayCount={reviewDisplayCount}
          filteredReviews={filteredReviews}
          sortReviewsBy={this.sortReviewsBy}
          filterCondition={filterCondition}
          filterReviews={this.filterReviews}
        />
        <RenderReviews
          seeMoreReviews={this.seeMoreReviews}
          resetReviewDisplayCount={this.resetReviewDisplayCount}
          reviewDisplayCount={reviewDisplayCount}
          filteredReviews={filteredReviews}
          filterCondition={filterCondition}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('reviews'));
