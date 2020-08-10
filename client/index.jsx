import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewsRender from './components/ReviewsRender';
import ReviewsOverview from './components/ReviewsOverview';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlId: window.location.pathname,
      reviews: [],
      reviewDisplayCount: 3,
      filteredReviews: [],
      filterToggle: {
        starRating: 0,
        orderBy: 0, // this is for ordering by pictures etc (not yet implemented)
      },
    };

    this.seeMoreReviews = this.seeMoreReviews.bind(this);
    this.resetReviewDisplayCount = this.resetReviewDisplayCount.bind(this);
    this.filterReviews = this.filterReviews.bind(this);
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
            filteredReviews: data.data,
          });
        })
        .catch((err) => console.error(err));
    }
  }

  filterReviews(key, value) {
    const { reviews } = this.state;
    const { filterToggle } = this.state;
    if (filterToggle.starRating === value) {
      this.setState({
        reviewDisplayCount: 3,
        filteredReviews: reviews,
        filterToggle: {
          starRating: 0,
        },
      });
    } else {
      const filtered = reviews.filter((review) => review[key] === value);
      this.setState({
        reviewDisplayCount: 3,
        filteredReviews: filtered,
        filterToggle: {
          starRating: value,
        },
      });
    }
  }

  // averageRaiting() {
  //   let totalScore = (reviews.reduce((a, b) => a + (b.rating || 0), 0) / reviews.length);
  //   totalScore = totalScore.toFixed(1);
  //   console.log(totalScore);
  // }

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
          Hello World
        </h1>
        <ReviewsOverview
          reviews={reviews}
          filterReviews={this.filterReviews}
        />
        <ReviewsRender
          seeMoreReviews={this.seeMoreReviews}
          resetReviewDisplayCount={this.resetReviewDisplayCount}
          reviewDisplayCount={reviewDisplayCount}
          filteredReviews={filteredReviews}
        />
        <h1>
          PLACEHOLDER
        </h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('reviews'));
