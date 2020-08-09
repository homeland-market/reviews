import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewsRender from './components/ReviewsRender';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      urlId: window.location.pathname,
    };
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    const { urlId } = this.state;
    axios.get(`/api/reviews${urlId}`)
      .then((data) => {
        this.setState({
          reviews: data.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { reviews } = this.state;
    return (
      <div>
        <h1>
          Hello World
        </h1>
        <ReviewsRender reviews={reviews} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('reviews'));
