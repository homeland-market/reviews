import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImagesContainer = styled.div`
  margine: -4px -4px 0;
`;

const ProductReviewPhotosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
`;

const ProductReviewSingleImageWindow = styled.div`
  height: 64px;
  margin: 4px;
  width: 64px;
`;

const CustomerImageHolder = styled.div`
  border-radius: 4px;
  padding-bottom: 100%;
  position: relative;
  overflow: hidden;
`;

const CustomerImageSizer = styled.div`
  bottom: 0;
  left: 0;
  margin: auto;
  max-height: 100%;
  max-width: 100%;
  position: absolute;
  right: 0;
  top: 0;
`;

const CustomerImage = ({ review: { img, id } }) => (
  img === null ? null : (
    <ImagesContainer>
      <ProductReviewPhotosContainer>
        <ProductReviewSingleImageWindow>
          <CustomerImageHolder>
            <CustomerImageSizer>
              <img src={img} alt={id} />
            </CustomerImageSizer>
          </CustomerImageHolder>
        </ProductReviewSingleImageWindow>
      </ProductReviewPhotosContainer>
    </ImagesContainer>
  )
);

CustomerImage.defaultProps = {
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

CustomerImage.propTypes = {
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

export default CustomerImage;
