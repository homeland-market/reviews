import React from 'react';
import PropTypes from 'prop-types';

class HelpfulButton extends React.Component {
  constructor(props) {
    super(props);
    const { review } = this.props;
    this.state = {
      helpfulToggle: false,
      helpfulCount: review.helpful,
    };
  }

  helpfulClicker(review) {
    const { helpfulToggle } = this.state;
    const { updateReviewHelpfulness } = this.props;
    const clickedId = review.id;
    if (helpfulToggle === false) {
      updateReviewHelpfulness(review.helpful + 1, clickedId); // this might be buggy
      this.setState((prevState) => ({
        helpfulToggle: true,
        helpfulCount: prevState.helpfulCount + 1,
      }));
    } else {
      this.setState((prevState) => ({
        helpfulToggle: false,
        helpfulCount: prevState.helpfulCount - 1,
      }));
      updateReviewHelpfulness(review.helpful, clickedId); // this might be buggy
    }
  }

  render() {
    const { review } = this.props;
    const { helpfulCount } = this.state;
    return (
      <button type="button" value={review} onClick={() => this.helpfulClicker(review)}>{helpfulCount}</button>
    );
  }
}

HelpfulButton.propTypes = {
  updateReviewHelpfulness: PropTypes.func.isRequired,
  review: PropTypes.object.isRequired,
};

export default HelpfulButton;
