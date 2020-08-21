import React, { Component } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../../assets/fonts';

import {
  MainLoadingPlaceholder,
  BarsLoadingPlaceholder,
} from '../LoadingPlaceholder/LoadingPlaceholder';

import ReviewsHeader from '../ReviewsHeader/ReviewsHeader';
import ReviewsOverview from '../ReviewsOverview/ReviewsOverview';
import ReviewsCustomerPhotos from '../ReviewsCustomerPhotos/ReviewsCustomerPhotos';
import ReviewsSearch from '../ReviewsSearch/ReviewsSearch';
import ReviewsSort from '../ReviewsSort/ReviewsSort';
import ReviewsDisplay from '../ReviewsDisplay/ReviewsDisplay';
import ReviewsShowMoreOrLess from '../ReviewsShowMoreOrLess/ReviewsShowMoreOrLess';

import { getAllReviews } from '../../lib/DatabaseRequests';
import { Filter, Sort, Calc } from '../../lib/FilterSortCalcParse';

const ReviewsWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1600px;
  width: 90vw;
`;

class Reviews extends Component {
  constructor() {
    super();
    this.state = {
      reviewsLoaded: false,
      reviews: [],
      totalReviewsCount: 0,
      customerImages: null,
      reviewStarPercentages: {},
      reviewAverageScore: 0,
      reviewDisplayCount: 0,
      filteredReviews: [],
      filterCondition: 0,
      sortCondition: 'Most helpful',
    };
    this.reviewScroll = React.createRef();
    this.filterReviewsByStarRating = this.filterReviewsByStarRating.bind(this);
    this.filterReviewsByText = this.filterReviewsByText.bind(this);
    this.sortReviews = this.sortReviews.bind(this);
    this.increaseReviewDisplayCount = this.increaseReviewDisplayCount.bind(this);
    this.resetReviewDisplayCount = this.resetReviewDisplayCount.bind(this);
    this.scrollToReviewsBody = this.scrollToReviewsBody.bind(this);
    this.scrollToReviewsOverview = this.scrollToReviewsOverview.bind(this);
  }

  componentDidMount() {
    getAllReviews((reviews) => {
      const totalReviewsCount = reviews.length;
      const customerImages = Filter.byCustomerPhotos(reviews);
      const reviewStarPercentages = Calc.getStartPercentagesFills(reviews);
      const reviewAverageScore = Calc.getTotalReviewAverageScore(reviews);
      this.sortReviews(reviews);
      this.setState({
        reviews,
        totalReviewsCount,
        customerImages,
        reviewAverageScore,
        reviewStarPercentages,
      });
      this.loadReviewsContent();
    });
  }

  loadReviewsContent() {
    setTimeout(() => {
      this.setState(() => ({ reviewsLoaded: true }));
    }, 1000);
  }

  filterReviewsByStarRating(value) {
    const { reviews } = this.state;
    if (value === 0) {
      this.sortReviews([...reviews]);
      this.setState({ filterCondition: value });
    } else {
      const filtered = Filter.byRating([...reviews], value);
      this.sortReviews(filtered);
      if (filtered.length) { this.setState({ filterCondition: value }); }
    }
  }

  filterReviewsByText(value) {
    const { reviews } = this.state;
    const filtered = Filter.byText([...reviews], value);
    this.sortReviews(filtered);
    this.setState({ filterCondition: value });
  }

  sortReviews(reviews, value) {
    const { sortCondition } = this.state;
    const condition = value || sortCondition;
    if (condition === 'Includes customer photos') {
      const filteredReviews = Sort.includesCustomerPhotos(reviews);
      this.resetReviewDisplayCount();
      this.setState({ filteredReviews, sortCondition: condition });
      return;
    }
    if (value === 'Most recent') {
      const filteredReviews = Sort.mostRecent(reviews);
      this.resetReviewDisplayCount();
      this.setState({ filteredReviews, sortCondition: condition });
      return;
    }
    const filteredReviews = Sort.mostHelpful(reviews);
    this.resetReviewDisplayCount();
    this.setState({ filteredReviews, sortCondition: condition });
  }

  increaseReviewDisplayCount() {
    this.setState((prevState) => ({ reviewDisplayCount: prevState.reviewDisplayCount + 10 }));
  }

  resetReviewDisplayCount() {
    this.setState({ reviewDisplayCount: 3 });
  }

  scrollToReviewsBody(condition) {
    const { filterCondition } = this.state;
    if (condition !== filterCondition) {
      window.scrollTo(0, this.reviewScroll.current.offsetTop);
    }
  }

  scrollToReviewsOverview() {
    window.scrollTo(0, this.reviewScroll.current.offsetTop);
  }

  render() {
    const {
      reviewsLoaded,
      reviews,
      totalReviewsCount,
      customerImages,
      reviewStarPercentages,
      reviewAverageScore,
      reviewDisplayCount,
      filteredReviews,
      filterCondition,
    } = this.state;
    return (
      <ReviewsWrapper>
        <GlobalStyle />
        <section>
          <ReviewsHeader />
          {!reviewsLoaded ? <MainLoadingPlaceholder /> : (
            <ReviewsOverview
              reviews={reviews}
              totalReviewsCount={totalReviewsCount}
              reviewStarPercentages={reviewStarPercentages}
              reviewAverageScore={reviewAverageScore}
              filterCondition={filterCondition}
              filterReviewsByStarRating={this.filterReviewsByStarRating}
              scrollToReviewsBody={this.scrollToReviewsBody}
            />
          )}
          {!reviewsLoaded ? <BarsLoadingPlaceholder /> : (
            <section>
              {customerImages && (
                <ReviewsCustomerPhotos
                  customerImages={customerImages}
                />
              )}
            </section>
          )}
          {!reviewsLoaded ? null : (
            <section>
              <ReviewsSearch
                reviewScroll={this.reviewScroll}
                filterReviewsByText={this.filterReviewsByText}
              />
              <ReviewsSort
                reviewDisplayCount={reviewDisplayCount}
                filteredReviews={filteredReviews}
                filterCondition={filterCondition}
                filterReviewsByStarRating={this.filterReviewsByStarRating}
                sortReviews={this.sortReviews}
              />
              <ReviewsDisplay
                reviewDisplayCount={reviewDisplayCount}
                filteredReviews={filteredReviews}
                filterCondition={filterCondition}
                increaseReviewDisplayCount={this.increaseReviewDisplayCount}
                resetReviewDisplayCount={this.resetReviewDisplayCount}
              />
              <ReviewsShowMoreOrLess
                reviewDisplayCount={reviewDisplayCount}
                filteredReviewsLength={filteredReviews.length}
                increaseReviewDisplayCount={this.increaseReviewDisplayCount}
                resetReviewDisplayCount={this.resetReviewDisplayCount}
                scrollToReviewsOverview={this.scrollToReviewsOverview}
              />
            </section>
          )}
        </section>
      </ReviewsWrapper>
    );
  }
}

export default Reviews;
