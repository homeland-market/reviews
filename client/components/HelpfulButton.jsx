import React from 'react';
import PropTypes from 'prop-types';

class HelpfulButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.searchReviewText = this.searchReviewText.bind(this);
  }
}

HelpfulButton.propTypes = {

};

export default HelpfulButton;
