import React, { Component } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../../assets/fonts';

import ReviewsOverview from '../ReviewsOverview';
import ReviewsSearch from '../ReviewsSearch';
import ReviewsSort from '../ReviewsSort';
import ReviewsDisplay from '../ReviewsDisplay';

import { getAllReviews } from '../../lib/DatabaseRequests';
import { Filter, Sort, Calc } from '../../lib/FilterSortCalc';

const ReviewsContainer = styled.div`
  width: 90vw;
  background-color: #f4f4f5;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      totalReviews: 0,
      reviewStarPercentages: {},
      reviewAverageScore: 0,
      reviewDisplayCount: 3,
      filteredReviews: [],
      filterCondition: 0,
      sortCondition: 'Most helpful',
    };
    this.filterReviewsByStarRating = this.filterReviewsByStarRating.bind(this);
    this.filterReviewsByText = this.filterReviewsByText.bind(this);
    this.sortReviewsBy = this.sortReviewsBy.bind(this);
    this.seeMoreReviews = this.seeMoreReviews.bind(this);
    this.resetReviewDisplayCount = this.resetReviewDisplayCount.bind(this);
  }

  componentDidMount() {
    getAllReviews((reviews) => {
      const { sortCondition } = this.state;
      const totalReviews = reviews.length;
      const reviewStarPercentages = Calc.getStartPercentagesFills(reviews);
      const reviewAverageScore = Calc.getTotalReviewAverageScore(reviews);
      this.sortReviewsBy(sortCondition, reviews);
      this.setState({
        reviews,
        totalReviews,
        reviewAverageScore,
        reviewStarPercentages,
      });
    });
  }

  filterReviewsByStarRating(value) {
    const { reviews, sortCondition } = this.state;
    this.sortReviewsBy(sortCondition, reviews);
    if (value === 0) {
      this.setState({
        filterCondition: value,
      });
    } else {
      const filtered = Filter.byRating(reviews, value);
      this.sortReviewsBy(sortCondition, filtered);
      if (filtered.length) {
        this.setState({ filterCondition: value });
      }
    }
  }

  filterReviewsByText(value) {
    const { reviews, sortCondition } = this.state;
    const filtered = Filter.byText(reviews, value);
    this.sortReviewsBy(sortCondition, filtered);
    this.setState({ filterCondition: value });
  }

  sortReviewsBy(value, reviews) {
    if (value === 'Includes customer photos') {
      const filteredReviews = Sort.includesCustomerPhotos(reviews);
      this.resetReviewDisplayCount();
      this.setState({ filteredReviews, sortCondition: value });
      return;
    }
    if (value === 'Most recent') {
      const filteredReviews = Sort.mostRecent(reviews);
      this.resetReviewDisplayCount();
      this.setState({ filteredReviews, sortCondition: value });
      return;
    }
    const filteredReviews = Sort.mostHelpful(reviews);
    this.resetReviewDisplayCount();
    this.setState({ filteredReviews, sortCondition: value });
  }

  seeMoreReviews() {
    this.setState((prevState) => ({ reviewDisplayCount: prevState.reviewDisplayCount + 10 }));
  }

  resetReviewDisplayCount() {
    this.setState({ reviewDisplayCount: 3 });
  }

  render() {
    const {
      reviews,
      totalReviews,
      reviewStarPercentages,
      reviewDisplayCount,
      filteredReviews,
      filterCondition,
      reviewAverageScore,
    } = this.state;
    return (
      <div>
        <ReviewsContainer>
          <ReviewsOverview
            reviews={reviews}
            totalReviews={totalReviews}
            reviewAverageScore={reviewAverageScore}
            reviewStarPercentages={reviewStarPercentages}
            filterReviewsByStarRating={this.filterReviewsByStarRating}
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
            filterReviewsByStarRating={this.filterReviewsByStarRating}
          />
          <ReviewsDisplay
            seeMoreReviews={() => this.seeMoreReviews()}
            resetReviewDisplayCount={this.resetReviewDisplayCount}
            reviewDisplayCount={reviewDisplayCount}
            filteredReviews={filteredReviews}
            filterCondition={filterCondition}
          />
          <GlobalStyle />
        </ReviewsContainer>
      </div>
    );
  }
}

export default App;
