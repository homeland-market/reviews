import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewsRender from './components/ReviewsRender';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      reviewCount: 3,
      urlId: window.location.pathname,
    };

    this.seeMoreReviews = this.seeMoreReviews.bind(this);
    this.resetReviewCount = this.resetReviewCount.bind(this);
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

  seeMoreReviews() {
    this.setState((prevState) => ({
      reviewCount: prevState.reviewCount + 10,
    }));
  }

  resetReviewCount() {
    this.setState({
      reviewCount: 3,
    });
  }

  render() {
    const { reviews } = this.state;
    const { reviewCount } = this.state;
    return (
      <div>
        <h1>
          Hello World
        </h1>
        <ReviewsRender
          seeMoreReviews={this.seeMoreReviews}
          resetReviewCount={this.resetReviewCount}
          reviewCount={reviewCount}
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
