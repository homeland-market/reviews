/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewsRender from './components/ReviewsRender';
import ReviewsOverview from './components/ReviewsOverview';
import SortReviews from './components/SortReviews';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlId: window.location.pathname,
      reviews: [],
      reviewDisplayCount: 3,
      filteredReviews: [],
      starRatingFilter: 0,
    };

    this.seeMoreReviews = this.seeMoreReviews.bind(this);
    this.resetReviewDisplayCount = this.resetReviewDisplayCount.bind(this);
    this.filterReviews = this.filterReviews.bind(this);
    this.sortReviewsBy = this.sortReviewsBy.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    const { urlId } = this.state;
    if (urlId !== '/') {
      axios.get(`/api/reviews${urlId}`)
        .then((data) => {
          this.setState({
            reviews: data.data,
            filteredReviews: data.data.sort((a, b) => b.helpful - a.helpful),
          });
        })
        .catch((err) => console.error(err));
    }
  }

  filterReviews(value) {
    const { reviews } = this.state;
    const { starRatingFilter } = this.state;
    if (starRatingFilter === value) {
      this.setState({
        reviewDisplayCount: 3,
        filteredReviews: reviews,
        starRatingFilter: 0,
      });
    } else {
      const filtered = reviews.filter((review) => review.rating === value);
      if (filtered.length) {
        this.setState({
          reviewDisplayCount: 3,
          filteredReviews: filtered,
          starRatingFilter: value,
        });
      }
    }
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
    const { reviews, reviewDisplayCount, filteredReviews } = this.state;
    return (
      <div>
        <h1>
          REVIEWS & RATINGS
        </h1>
        <ReviewsOverview
          reviews={reviews}
          filterReviews={this.filterReviews}
        />
        <SortReviews
          reviewDisplayCount={reviewDisplayCount}
          filteredReviews={filteredReviews}
          sortReviewsBy={this.sortReviewsBy}
        />
        <ReviewsRender
          seeMoreReviews={this.seeMoreReviews}
          resetReviewDisplayCount={this.resetReviewDisplayCount}
          reviewDisplayCount={reviewDisplayCount}
          filteredReviews={filteredReviews}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('reviews'));
