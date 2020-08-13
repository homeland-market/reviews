import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { updateHelpfulCount } from '../lib/DatabaseRequests';

class HelpfulButton extends Component {
  constructor(props) {
    super(props);
    const { review: { helpful } } = this.props;
    this.state = { helpfulToggle: false, helpfulCount: helpful };
  }

  handleHelpfulClick() {
    const { review: { helpful, id } } = this.props;
    const { helpfulToggle } = this.state;

    if (!helpfulToggle) {
      this.setState({ helpfulToggle: true, helpfulCount: helpful + 1 });
      updateHelpfulCount(helpful + 1, id);
    } else {
      this.setState({ helpfulToggle: false, helpfulCount: helpful });
      updateHelpfulCount(helpful, id);
    }
  }

  render() {
    const { helpfulCount } = this.state;
    return <button type="submit" onClick={() => this.handleHelpfulClick()}>{helpfulCount}</button>;
  }
}

HelpfulButton.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number,
    url_id: PropTypes.number,
    name: PropTypes.string,
    location: PropTypes.string,
    date: PropTypes.string,
    comment: PropTypes.string,
    rating: PropTypes.number,
    helpful: PropTypes.number,
    img: PropTypes.string,
  }).isRequired,
};

export default HelpfulButton;
