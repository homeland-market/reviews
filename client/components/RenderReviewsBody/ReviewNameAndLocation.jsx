/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

import styled from 'styled-components';

const ProductReviewCustomerInfo = styled.header`
  display: block;
`;

const CustomerNameAndLocation = styled.div`
  display:flex;
  flex-direction: column;
  margin-bottom: 4px;
`;

const CustomerName = styled.p`
  color: #221924;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 12px;
  padding: 0;
`;

const CustomerLocation = styled.p`
  font-size: 13px;
  line-height: 1;
  color: #615c65;
  margin: 0;
  padding: 0;
`;

const ReviewComplianceBadge = styled.h5`
  position: relative;
  font-size: 100%;
  font-weight: 400;
  margin: 0;
  padding: 0;
  display: block;
`;

const ProductReviewComplianceBadge = styled.button`
  color: #615c65;
  font-size: 13px;
  text-transform: uppercase;
  text-align: left;
  -webkit-tap-highlight-color: transparent;
  outline: none;
  background: 0;
  cursor: pointer;
  border: 0;
  margin: 0;
  padding: 0;
`;

const ReviewNameAndLocation = ({ review: { name, location } }) => (
  <ProductReviewCustomerInfo>
    <CustomerNameAndLocation>
      <CustomerName>
        {name}
      </CustomerName>
      <CustomerLocation>
        {location}
      </CustomerLocation>
    </CustomerNameAndLocation>
    <ReviewComplianceBadge>
      <ProductReviewComplianceBadge data-tip="This reviewer purchased this item <br>from Wayfair." data-for="wayfair-tt" data-delay-hide="100" data-delay-show="200">
        Verified Buyer
      </ProductReviewComplianceBadge>
      <center>
        <ReactTooltip id="wayfair-tt" place="right" effect="solid" html={true} />
      </center>
    </ReviewComplianceBadge>
  </ProductReviewCustomerInfo>
);

ReviewNameAndLocation.propTypes = {
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

export default ReviewNameAndLocation;
