/* eslint-disable no-console */
import ReactDOM from 'react-dom';
import React from 'react';
import axios from 'axios';
import ReviewsOverview from './components/ReviewsOverview';
import ReviewsRender from './components/ReviewsRender';
import SearchReviews from './components/SearchReviews';
import SortReviews from './components/SortReviews';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlId: window.location.pathname,
      reviews: [],
      reviewDisplayCount: 3,
      filteredReviews: [],
      filterReviewsBy: 0,
    };
    this.seeMoreReviews = this.seeMoreReviews.bind(this);
    this.resetReviewDisplayCount = this.resetReviewDisplayCount.bind(this);
    this.filterReviews = this.filterReviews.bind(this);
    this.sortReviewsBy = this.sortReviewsBy.bind(this);
    this.filterReviewsByText = this.filterReviewsByText.bind(this);
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
    const { filterReviewsBy } = this.state;
    if (filterReviewsBy === value || value === 0) {
      this.setState({
        reviewDisplayCount: 3,
        filteredReviews: reviews,
        filterReviewsBy: 0,
      });
    } else {
      const filtered = reviews.filter((review) => review.rating === value);
      if (filtered.length) {
        this.setState({
          reviewDisplayCount: 3,
          filteredReviews: filtered,
          filterReviewsBy: value,
        });
      }
    }
  }

  filterReviewsByText(value) {
    this.setState((prevState) => ({
      filterReviewsBy: value,
      filteredReviews: prevState.reviews.filter((review) => review.comment.includes(value)),
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
      filterReviewsBy,
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
          filterReviewsBy={filterReviewsBy}
          filterReviews={this.filterReviews}
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
