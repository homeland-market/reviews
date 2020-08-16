import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import styled from 'styled-components';
import GlobalStyle from './assets/fonts';

import ReviewsOverview from './components/ReviewsOverview';
import ReviewsSearch from './components/ReviewsSearch';
import ReviewsSort from './components/ReviewsSort';
import ReviewsDisplay from './components/ReviewsDisplay';

import { getAllReviews } from './lib/DatabaseRequests';
import { getStartPercentagesFills, getTotalReviewAverageScore } from './lib/ReviewFiltering';

const ReviewsContainer = styled.div`
  width: 90vw;
  background-color: #f4f4f5;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      reviewTotal: 0,
      reviewAverageScore: 0,
      reviewDisplayCount: 3,
      reviewStarPercentages: {},
      filteredReviews: [],
      filterCondition: 0,
      sortCondition: 'Most helpful',
    };
    this.seeMoreReviews = this.seeMoreReviews.bind(this);
    this.resetReviewDisplayCount = this.resetReviewDisplayCount.bind(this);
    this.filterReviews = this.filterReviews.bind(this);
    this.sortReviewsBy = this.sortReviewsBy.bind(this);
    this.filterReviewsByText = this.filterReviewsByText.bind(this);
  }

  componentDidMount() {
    getAllReviews((reviews) => {
      const { sortCondition } = this.state;
      const reviewStarPercentages = getStartPercentagesFills(reviews);
      const reviewAverageScore = getTotalReviewAverageScore(reviews);
      this.sortReviewsBy(sortCondition, reviews);
      this.setState({
        reviews,
        reviewTotal: reviews.length,
        reviewAverageScore,
        reviewStarPercentages,
      });
    });
  }

  filterReviews(value) {
    const { reviews, sortCondition } = this.state;
    this.sortReviewsBy(sortCondition, reviews);
    if (value === 0) {
      this.setState({
        filterCondition: value,
      });
    } else {
      const filtered = reviews.filter((review) => review.rating === value);
      this.sortReviewsBy(sortCondition, filtered);
      if (filtered.length) {
        this.setState({
          filterCondition: value,
        });
      }
    }
  }

  filterReviewsByText(value) {
    const { reviews, sortCondition } = this.state;
    const filtered = reviews.filter((review) => review.comment.toLowerCase().includes(value));
    this.sortReviewsBy(sortCondition, filtered);
    this.setState({
      filterCondition: value,
    });
  }

  sortReviewsBy(value, reviews) {
    if (value === 'Includes customer photos') {
      const sorted = reviews.sort((a, b) => (a.img === null)
        - (b.img === null) || +(a > b) || -(a < b));
      this.setState({
        filteredReviews: sorted,
        sortCondition: value,
        reviewDisplayCount: 3,
      });
      return;
    }
    if (value === 'Most recent') {
      const sorted = reviews.sort((a, b) => new Date(b.date)
        - new Date(a.date));
      this.setState({
        filteredReviews: sorted,
        sortCondition: value,
        reviewDisplayCount: 3,
      });
      return;
    }
    // value must === 'Most helpful' || 'Most relevant'
    const sorted = reviews.sort((a, b) => b.helpful - a.helpful);
    this.setState({
      filteredReviews: sorted,
      sortCondition: value,
      reviewDisplayCount: 3,
    });
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
      reviewTotal,
      reviewStarPercentages,
      reviewDisplayCount,
      filteredReviews,
      filterCondition,
      reviewAverageScore,
    } = this.state;
    return (
      <div>
        <GlobalStyle />
        <ReviewsContainer>
          <ReviewsOverview
            reviews={reviews}
            reviewTotal={reviewTotal}
            reviewAverageScore={reviewAverageScore}
            reviewStarPercentages={reviewStarPercentages}
            filterReviews={this.filterReviews}
            filterCondition={filterCondition}
          />
          <ReviewsSearch
            filterReviewsByText={this.filterReviewsByText}
          />
          <ReviewsSort
            reviewDisplayCount={reviewDisplayCount}
            filteredReviews={filteredReviews}
            sortReviewsBy={this.sortReviewsBy}
            filterCondition={filterCondition}
            filterReviews={this.filterReviews}
          />
          <ReviewsDisplay
            seeMoreReviews={this.seeMoreReviews}
            resetReviewDisplayCount={this.resetReviewDisplayCount}
            reviewDisplayCount={reviewDisplayCount}
            filteredReviews={filteredReviews}
            filterCondition={filterCondition}
          />
        </ReviewsContainer>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('reviews'));
