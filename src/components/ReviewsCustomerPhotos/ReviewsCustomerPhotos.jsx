import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Filter } from '../../lib/FilterSortCalcParse';

import { StrippedButton } from '../../assets/styles';
import { ArrowSVG, ArrowSVGPath } from '../../assets/svg';

const CustomerPhotosContainer = styled.div`
  flex-direction: row;
  overflow: hidden;
  padding-bottom: 12px;
  padding-top: 12px;
  position: relative;
`;

const CarouselContainer = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style: none;
  margin: 0;
  padding: 12px 4px;
  position: relative;
  transform: ${(props) => (props.translateX < 0 && `translateX(${props.translateX}px)`)};
  transition-duration: 500ms;
  transition-property: background-color, transform, color, border-color, margin;
  transition-timing-function: cubic-bezier(.53, 0.34 , 0.51, 0.9) 0s;;
  white-space: normal;
  width: 100%;
  will-change: transform;
`;

const CustomerPhotoContainer = styled.div`
  border: 2px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  min-width: 208px;
  outline: none
  padding: 4px;

  &:hover {
    border-color: #7f187f;
  }

`;

const CustomerImageSize = styled.div`
  border-radius: 8px;
  overflow: hidden;
  padding-bottom: 100%;
  position: relative;
`;

const CustomerImage = styled.img`
  border-radius: 8px;
  bottom: 0;
  left: 0;
  margin: auto;
  max-height: 100%;
  max-width: 100%;
  position: absolute;
  right: 0;
  top: 0;
`;

const NextImageButton = styled(StrippedButton)`
  background-color: #fff;
  border: 2px solid transparent;
  border-radius: 50%;
  box-shadow: 0 3px 6px rgba(34,25,36,.2);
  height: 48px;
  position: absolute;
  right: 16px;
  transition-duration: .25s;
  transition-timing-function: cubic-bezier(.65,.05,.36,1);
  transition-property: background-color,transform,color,border-color,margin;
  transform: translateY(-50%);
  top: 50%;
  width: 48px;
  z-index: 1;

  &:hover ${ArrowSVG} {
    fill: #7f187f;
  }

  &:hover {
    border-color: #7f187f;
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

  moveRight(reviews, translateX, images, maxLength) {
    if (translateX === maxLength) {
      this.setState((PrevState) => ({ translateX: PrevState.translateX - 72 }));
    } else {
      this.setState((PrevState) => ({ translateX: PrevState.translateX - 208 }));
    }
  }

  moveLeft(reviews, translateX, images, maxLength) {
    if (translateX === maxLength) {
      this.setState((PrevState) => ({ translateX: PrevState.translateX + 72 }));
    } else {
      this.setState((PrevState) => ({ translateX: PrevState.translateX + 208 }));
    }
  }

  render() {
    const { reviews } = this.props;
    const { translateX } = this.state;
    const images = Filter.includesCustomerPhotos(reviews);
    const imageLength = images.length;
    const maxLength = -Math.abs(((images.length - 8) * 208));
    const totalCarouselWidth = maxLength - 72;
    return (
      <section>
        {console.log(translateX)}
        <h1>Customer Photos</h1>
        <CustomerPhotosContainer>
          {translateX !== 0 && translateX !== 136 && (
            <PreviousImageButton
              onClick={() => this.moveLeft(reviews, translateX, images, maxLength)}
            >
              <ArrowSVG
                viewBox="0 0 28 28"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                transform="rotate(180)"
              >
                <path d={ArrowSVGPath} />
              </ArrowSVG>
            </PreviousImageButton>
          )}
          <CarouselContainer translateX={translateX}>
            {images.map((image) => (
              <li key={image.id}>
                <CustomerPhotoContainer>
                  <CustomerImageSize>
                    <CustomerImage src={image.imgmedium} />
                  </CustomerImageSize>
                </CustomerPhotoContainer>
              </li>
            ))}
          </CarouselContainer>
          {translateX !== totalCarouselWidth && imageLength > 8 && (
            <NextImageButton
              onClick={() => this.moveRight(reviews, translateX, images, maxLength)}
            >
              <ArrowSVG
                viewBox="0 0 28 28"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path d={ArrowSVGPath} />
              </ArrowSVG>
            </NextImageButton>
          )}
        </CustomerPhotosContainer>
      </section>
    );
  }
}

ReviewsCustomerPhotos.defaultProps = {
  reviews: [{
    id: 2,
    url_id: 2,
    name: 'Yu-Lin',
    location: 'California',
    date: '2020-20-20T20:20:20.000Z',
    comment: 'Reviews are fun',
    rating: 2,
    helpful: 2,
    img: 'https://bit.ly/3kMfzKt',
    imgmedium: 'https://bit.ly/3kMfzKt',
  }],
};

ReviewsCustomerPhotos.propTypes = {
  reviews: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      url_id: PropTypes.number,
      name: PropTypes.string,
      location: PropTypes.string,
      date: PropTypes.string,
      comment: PropTypes.string,
      rating: PropTypes.number,
      helpful: PropTypes.number,
      img: PropTypes.string,
      imgmedium: PropTypes.string,
    }),
    PropTypes.array),
  ]),
};

export default ReviewsCustomerPhotos;
