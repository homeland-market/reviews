import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { updateHelpfulCount } from '../../../../lib/DatabaseRequests';

import { StrippedButton } from '../../../../assets/styles';
import { HelpfulSVG, HelpfulSVGPath } from '../../../../assets/svg';

const HelpfulReviewButton = styled(StrippedButton)`
  background-color: ${(props) => (props.helpfulToggle ? '#7f187f;' : '#fff')};
  border: 1px solid #8d8a90;
  border-radius: 24px;
  color: ${(props) => (props.helpfulToggle ? '#fff;' : '#221924')};
  display: inline-block;
  height: 32px;
  line-height: 1;
  padding: 3px 16px;
  position: relative;
  text-decoration: none;
  transition: .25ms cubic-bezier(.65,.05,.36,1);

  &:hover {
    background-color: ${(props) => (props.helpfulToggle ? '#691568;' : '#d9d8db')};
    border-color: #47404a;
    box-shadow: 0 0 0 1px #1364f1;
    transition-duration: 0s,0s,.25s;
  }

  &:focus {
    box-shadow: 0 0 0 1px #1364f1;
    z-index: 1;
`;

const HelpfulButtonContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
`;

const HelpfulButtonText = styled.span`
  color: ${(props) => (props.helpfulToggle ? '#fff;' : '#221924')};
`;

const HelpfulCountContainer = styled.span`
  color: ${(props) => (props.helpfulToggle ? '#fff;' : '#221924')};
  flex-direction: row;
  margin-left: 8px;
`;

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
    const { helpfulCount, helpfulToggle } = this.state;
    return (
      <HelpfulReviewButton
        type="submit"
        onClick={() => this.handleHelpfulClick()}
        helpfulToggle={helpfulToggle}
      >
        <HelpfulButtonContainer>
          <HelpfulSVG
            viewBox="0 0 28 28"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            helpfulToggle={helpfulToggle}
          >
            <path d={HelpfulSVGPath} />
          </HelpfulSVG>
          <HelpfulButtonText helpfulToggle={helpfulToggle}>
            Helpful
          </HelpfulButtonText>
          <HelpfulCountContainer helpfulToggle={helpfulToggle}>
            {helpfulCount}
          </HelpfulCountContainer>
        </HelpfulButtonContainer>
      </HelpfulReviewButton>
    );
  }
}

HelpfulButton.defaultProps = {
  review: {
    id: 2,
    url_id: 2,
    name: 'Yu-Lin',
    location: 'California',
    date: '2020-20-20T20:20:20.000Z',
    comment: 'Reviews are fun',
    rating: 2,
    helpful: 2,
    img: 'https://bit.ly/3kMfzKt',
  },
};

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
  }),
};

export default HelpfulButton;
