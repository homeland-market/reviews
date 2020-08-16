import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { updateHelpfulCount } from '../../../lib/DatabaseRequests';

const ProductHelpfulVoteButton = styled.button`
  border-radius: 24px;
  border: 1px solid #8d8a90;
  display: inline-block;
  padding: 3px 16px;
  position: relative;
  height: 32px;
  line-height: 1;
  cursor: pointer;
  outline: 0;
  color: ${(props) => (props.helpfulToggle ? '#fff;' : '#221924')};
  text-decoration: none;
  transition: border-color 1ms cubic-bezier(.22,.61,.36,1),background-color 1ms cubic-bezier(.22,.61,.36,1);
  background-color: ${(props) => (props.helpfulToggle ? '#7f187f;' : '#fff')};

  &:hover {
    background-color: ${(props) => (props.helpfulToggle ? '#691568;' : '#d9d8db')};
    transition-duration: 0s,0s,.25s
    box-shadow: 0 0 0 1px #47404a,0 0 4px #47404a;
    border-color: #47404a;
  }
`;

const HelpfulButtonContentWrap = styled.div`
  display: flex;
  pointer-events: none;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 100%;
`;

const HelpfulSVGPath = styled.path`
  d: path("M 21.5 11.8 c -0.5 -0.5 -1 -0.8 -1.5 -0.8 h -2.6 c 0.2 -0.8 0.2 -1.9
  -0.3 -3.1 c -0.6 -1.7 -1.7 -1.9 -2.3 -1.9 c -0.8 0 -1.7 0.6 -1.9 1.3 c 0 0.2
  -0.1 0.4 -0.1 0.6 c -0.1 1.1 -0.4 2.3 -1 3.5 c -0.2 -0.2 -0.5 -0.4 -0.8 -0.4
  H 7 c -0.6 0 -1 0.4 -1 1 v 9 c 0 0.6 0.4 1 1 1 h 4 c 0.6 0 1 -0.4 1 -1 v -0.1
  c 0.6 0.4 1.2 0.8 1.6 1 c 0.1 0.1 0.3 0.1 0.4 0.1 h 4 c 0.1 0 0.2 0 0.4 -0.1 h
  0.1 c 0.8 -0.3 1.8 -1.4 2.1 -2.3 c 0.3 -0.8 1.3 -5.6 1.4 -6.2 c 0.1 -0.5 -0.1 -1.1
  -0.5 -1.6 Z M 10 20 H 8 v -7 h 2 v 7 Z m 8.6 -1 c -0.1 0.3 -0.6 0.8 -0.9 1 h -3.5
  c -0.5 -0.3 -1.5 -1 -2.2 -1.6 v -4.3 c 0.6 -0.2 0.8 -0.4 0.9 -0.5 c 0.1 -0.1 0.3
  -0.3 0.5 -0.9 c 0.8 -1.6 1.2 -3.1 1.4 -4.6 V 8 h 0.1 s 0.2 0.1 0.4 0.6 c 0.6 1.5
  -0.1 2.8 -0.2 2.8 v 0.1 c 0 0.1 -0.1 0.1 -0.1 0.2 v 0.6 c 0 0.1 0 0.1 0.1 0.2 c 0
  0.1 0.1 0.1 0.1 0.2 s 0.1 0.1 0.1 0.1 s 0 0.1 0.1 0.1 h 0.1 c 0.1 0 0.1 0.1 0.2
  0.1 h 4.2 s 0.1 0.1 0.1 0.2 c -0.4 2 -1.2 5.2 -1.4 5.8 Z");
`;

const HelpfulSVGContainer = styled.svg`
  width: 28px;
  height: 28px;
  display: inline-block;
  fill: ${(props) => (props.helpfulToggle ? '#fff;' : '#221924')};
  vertical-align: middle;
  pointer-events: none;
  oveflow: hidden;
`;

const HelpfulButtonText = styled.span`
  color: ${(props) => (props.helpfulToggle ? '#fff;' : '#221924')};
`;

const HelpfulCountContainer = styled.span`
  margin-left: 8px;
  flex-direction: row;
  color: ${(props) => (props.helpfulToggle ? '#fff;' : '#221924')};
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
      <ProductHelpfulVoteButton
        type="submit"
        onClick={() => this.handleHelpfulClick()}
        helpfulToggle={helpfulToggle}
      >
        <HelpfulButtonContentWrap>
          <HelpfulSVGContainer
            viewBox="0 0 28 28"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            helpfulToggle={helpfulToggle}
          >
            <HelpfulSVGPath />
          </HelpfulSVGContainer>
          <HelpfulButtonText helpfulToggle={helpfulToggle}>
            Helpful
          </HelpfulButtonText>
          <HelpfulCountContainer helpfulToggle={helpfulToggle}>
            {helpfulCount}
          </HelpfulCountContainer>
        </HelpfulButtonContentWrap>
      </ProductHelpfulVoteButton>
    );
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
