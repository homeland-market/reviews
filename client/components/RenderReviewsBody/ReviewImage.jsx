import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const ImageContainerFullWidth = styled.div`
  margine: -4px -4px 0;
`;

const ProductReviewPhoto = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
`;

const ProductReviewItem = styled.div`
  width: 64px;
  height: 64px;
  margin: 4px;
`;

const ProductReviewImageHolder = styled.div`
  padding-bottom: 100%;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`;

const ProductImageComponent = styled.div`
  max-height: 100%;
  max-width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;

const ReviewImage = ({ review: { img, id } }) => (
  img === null ? null : (
    <ImageContainerFullWidth>
      <ProductReviewPhoto>
        <ProductReviewItem>
          <ProductReviewImageHolder>
            <ProductImageComponent>
              <img src={img} alt={id} />
            </ProductImageComponent>
          </ProductReviewImageHolder>
        </ProductReviewItem>
      </ProductReviewPhoto>
    </ImageContainerFullWidth>
  )
);

ReviewImage.propTypes = {
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

export default ReviewImage;
