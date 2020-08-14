import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import styled from 'styled-components';
import GlobalStyle from './assets/fonts';

import ReviewsOverview from './components/ReviewsOverview';
import SearchReviews from './components/SearchReviews';
import SortReviews from './components/SortReviews';
import RenderReviews from './components/RenderReviews';

import { getAllReviews } from './lib/DatabaseRequests';
import { getStartPercentagesFills } from './lib/ReviewFiltering';

const FullWrapper = styled.div`
  display: block;
  background-color: #f4f4f5;
`;

const ReviewsContainer = styled.div`
  width: 90vw;
  display: grid;
  grid-template-rows: 3fr 4fr 4fr 1fr;
  background-color: #f4f4f5;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 24px;
  padding-top: 20px;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      reviewTotal: 0,
      reviewPercentages: {},
      filteredReviews: [],
      reviewDisplayCount: 3,
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
      const reviewPercentages = getStartPercentagesFills(reviews);
      this.setState({
        reviews,
        reviewTotal: reviews.length,
        reviewPercentages,
        filteredReviews: reviews.sort((a, b) => b.helpful - a.helpful),
      });
    });
  }

  filterReviews(value) {
    const { reviews } = this.state;
    if (value === 0) {
      this.setState({
        reviewDisplayCount: 3,
        filteredReviews: reviews,
        filterCondition: value,
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
    const { reviews } = this.state;
    const filtered = reviews.filter((review) => review.comment.toLowerCase().includes(value));
    this.setState({
      reviewDisplayCount: 3,
      filterCondition: value,
      filteredReviews: filtered,
    });
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
      reviewTotal,
      reviewPercentages,
      reviewDisplayCount,
      filteredReviews,
      filterCondition,
    } = this.state;
    return (
      <div>
        <GlobalStyle />
        <FullWrapper>
          <ReviewsContainer>
            <ReviewsOverview
              reviews={reviews}
              reviewTotal={reviewTotal}
              reviewPercentages={reviewPercentages}
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
          </ReviewsContainer>
        </FullWrapper>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('reviews'));
