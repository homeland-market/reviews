import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ShowLessButtonWrap = styled.button`
  color: #7f187f;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  transition-duration: .25s;
  transition-timing-function: cubic-bezier(.65,.05,.36,1);
  transition-property: background-color,transform,color,border-color;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  text-decoration: underline;
  transition: opacity 500ms ease-in-out 0s;
  opacity: 1;

  &:hover {
    text-decoration: none;
  }
`;

const UpArrowSVGContainer = styled.svg`
  width: 28px;
  height: 28px;
  display: inline-block;
  fill: #7f187f;
  vertical-align: middle;
  pointer-events: none;
  overflow: hidden;
`;

const UpArrowSVGPath = styled.path`
  d: path("M8.9 16.8c.4.4 1 .4 1.4.1l3.8-3.5 3.8 3.4c.4.4 1 .3 1.4-.1.4-.4.3-1-.1-1.4l-4.5-4c-.2-.2-.4-.3-.7-.3s-.5.1-.7.3l-4.5 4c-.3.4-.3 1.1.1 1.5z")
`;

const ProductReviewListDivider = styled.div`
  background: #615c65;
  border-radius: 0;
  height: 28px;
  width: 1px;
  margin-left: 16px;
  margin-right: 16px;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const ShowLessButton = ({ resetReviewDisplayCount, reviewDisplayCount }) => {
  if (reviewDisplayCount > 3) {
    return (
      <ShowLessButtonWrap
        type="button"
        onClick={resetReviewDisplayCount}
        onKeyPress={resetReviewDisplayCount}
      >
        <ProductReviewListDivider />
        Show Less
        <UpArrowSVGContainer
          viewBox="0 0 28 28"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <UpArrowSVGPath />
        </UpArrowSVGContainer>
      </ShowLessButtonWrap>
    );
  }
  return null;
};

ShowLessButton.propTypes = {
  resetReviewDisplayCount: PropTypes.func.isRequired,
  reviewDisplayCount: PropTypes.number.isRequired,
};

export default ShowLessButton;
