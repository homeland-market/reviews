import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import { StrippedButton } from '../../assets/styles';
import { ArrowSVG, ArrowSVGPath } from '../../assets/svg';

const CustomerPhotosContainer = styled.div`
  position: relative;
  overflow: hidden;
  flex-direction: row;
  padding-bottom: 12px;
  padding-top: 12px;
`;

// -208 for cell moving
const CarouselContainer = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  will-change: transform;
  white-space: normal;
  position: relative;
  width: 100%;
  transform: ${(props) => (props.translateX > 0 ? 'translateX(0px)' : `translateX(${props.translateX}px)`)};
  list-style: none;
  padding: 12px 4px;
  margin: 0;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(.53, 0.34 , 0.51, 0.9) 0s;;
  transition-property: background-color, transform, color, border-color, margin;
`;

const CustomerPhotoContainer = styled.div`
  min-width: 208px;
  border: 2px solid transparent;
  border-radius: 8px;
  padding: 4px;
  cursor: pointer;
  outline: none
  background: 0;

  &:hover {
    border-color: #7f187f;
  }

`;

const CustomerImageSize = styled.div`
  padding-bottom: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`;

const CustomerImage = styled.img`
  max-width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  max-height: 100%;
`;

const NextImageButton = styled(StrippedButton)`
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(34,25,36,.2);
  border: 2px solid transparent;
  transition-duration: .25s;
  transition-timing-function: cubic-bezier(.65,.05,.36,1);
  transition-property: background-color,transform,color,border-color,margin;
  z-index: 1;

  &:hover {
    border-color: #7f187f;
  }

  &:hover ${ArrowSVG} {
    fill: #7f187f;
  }
`;

const PreviousImageButton = styled(NextImageButton)`
  left: 16px;
`;

class ReviewsCustomerPhotos extends Component {
  constructor(props) {
    super(props);
    this.state = { translateX: 0 };
  }

  moveRight() {
    this.setState((PrevState) => ({ translateX: PrevState.translateX - 208 }));
  }

  moveLeft() {
    if (this.state.translateX !== 0) {
      this.setState((PrevState) => ({ translateX: PrevState.translateX + 208 }));
    }
  }

  render() {
    return (
      <section>
        <h1>Customer Photos</h1>
        <CustomerPhotosContainer>
          <PreviousImageButton onClick={() => this.moveLeft()}>
            <ArrowSVG
              viewBox="0 0 28 28"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              transform="rotate(180)"
            >
              <path d={ArrowSVGPath} />
            </ArrowSVG>
          </PreviousImageButton>
          <CarouselContainer translateX={this.state.translateX}>
            <li>
              <CustomerPhotoContainer>
                <CustomerImageSize>
                  <CustomerImage src="https://secure.img1-fg.wfcdn.com/im/84725723/c_crop-h200-w200%5Ecompr-r85/1183/118375629/default_name.jpg" />
                </CustomerImageSize>
              </CustomerPhotoContainer>
            </li>
            <li>
              <CustomerPhotoContainer>
                <CustomerImageSize>
                  <CustomerImage src="https://secure.img1-fg.wfcdn.com/im/84725723/c_crop-h200-w200%5Ecompr-r85/1183/118375629/default_name.jpg" />
                </CustomerImageSize>
              </CustomerPhotoContainer>
            </li>
            <li>
              <CustomerPhotoContainer>
                <CustomerImageSize>
                  <CustomerImage src="https://secure.img1-fg.wfcdn.com/im/84725723/c_crop-h200-w200%5Ecompr-r85/1183/118375629/default_name.jpg" />
                </CustomerImageSize>
              </CustomerPhotoContainer>
            </li>
            <li>
              <CustomerPhotoContainer>
                <CustomerImageSize>
                  <CustomerImage src="https://secure.img1-fg.wfcdn.com/im/84725723/c_crop-h200-w200%5Ecompr-r85/1183/118375629/default_name.jpg" />
                </CustomerImageSize>
              </CustomerPhotoContainer>
            </li>
            <li>
              <CustomerPhotoContainer>
                <CustomerImageSize>
                  <CustomerImage src="https://secure.img1-fg.wfcdn.com/im/84725723/c_crop-h200-w200%5Ecompr-r85/1183/118375629/default_name.jpg" />
                </CustomerImageSize>
              </CustomerPhotoContainer>
            </li>
            <li>
              <CustomerPhotoContainer>
                <CustomerImageSize>
                  <CustomerImage src="https://secure.img1-fg.wfcdn.com/im/84725723/c_crop-h200-w200%5Ecompr-r85/1183/118375629/default_name.jpg" />
                </CustomerImageSize>
              </CustomerPhotoContainer>
            </li>
            <li>
              <CustomerPhotoContainer>
                <CustomerImageSize>
                  <CustomerImage src="https://secure.img1-fg.wfcdn.com/im/84725723/c_crop-h200-w200%5Ecompr-r85/1183/118375629/default_name.jpg" />
                </CustomerImageSize>
              </CustomerPhotoContainer>
            </li>
            <li>
              <CustomerPhotoContainer>
                <CustomerImageSize>
                  <CustomerImage src="https://secure.img1-fg.wfcdn.com/im/84725723/c_crop-h200-w200%5Ecompr-r85/1183/118375629/default_name.jpg" />
                </CustomerImageSize>
              </CustomerPhotoContainer>
            </li>
            <li>
              <CustomerPhotoContainer>
                <CustomerImageSize>
                  <CustomerImage src="https://secure.img1-fg.wfcdn.com/im/84725723/c_crop-h200-w200%5Ecompr-r85/1183/118375629/default_name.jpg" />
                </CustomerImageSize>
              </CustomerPhotoContainer>
            </li>
          </CarouselContainer>
          <NextImageButton onClick={() => this.moveRight()}>
            <ArrowSVG
              viewBox="0 0 28 28"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path d={ArrowSVGPath} />
            </ArrowSVG>
          </NextImageButton>
        </CustomerPhotosContainer>
      </section>
    );
  }
}

export default ReviewsCustomerPhotos;
