import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewsRender from './components/ReviewsRender';
import ReviewsOverview from './components/ReviewsOverview';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      reviewDisplayCount: 3,
      urlId: window.location.pathname,
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
          });
        })
        .catch((err) => console.error(err));
    }
  }

  filterReviews() {
    // TODO
    const filteredReviews = ['TODO'];
    this.setState({
      reviews: filteredReviews,
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
    const { reviews } = this.state;
    const { reviewDisplayCount } = this.state;
    return (
      <div>
        <h1>
          Hello World
        </h1>
        <ReviewsOverview />
        <ReviewsRender
          seeMoreReviews={this.seeMoreReviews}
          resetReviewDisplayCount={this.resetReviewDisplayCount}
          reviewDisplayCount={reviewDisplayCount}
          reviews={reviews}
        />
        <h1>
          PLACEHOLDER
        </h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('reviews'));
