/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

import { StrippedButton } from '../../../../assets/styles';

const ProductReviewCustomerInfoContainer = styled.header`
  display: block;
`;

const CustomerNameAndLocation = styled.div`
  display:flex;
  flex-direction: column;
  margin-bottom: 4px;
`;

const CustomerName = styled.p`
  color: #221924;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.5;
  margin-bottom: 12px;
  margin-top: 0;
  padding: 0;
`;

const CustomerLocation = styled.p`
  color: #615c65;
  font-size: 13px;
  line-height: 1;
  margin: 0;
  padding: 0;
`;

const ReviewComplianceBadge = styled.h5`
  display: block;
  font-weight: 400;
  font-size: 100%;
  margin: 0;
  padding: 0;
  position: relative;
`;

const ProductReviewComplianceBadge = styled(StrippedButton)`
  color: #615c65;
  font-size: 13px;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
`;

const NameAndLocation = ({ review: { name, location } }) => (
  <ProductReviewCustomerInfoContainer>
    <CustomerNameAndLocation>
      <CustomerName>
        {name}
      </CustomerName>
      <CustomerLocation>
        {location}
      </CustomerLocation>
    </CustomerNameAndLocation>
    <ReviewComplianceBadge>
      <ProductReviewComplianceBadge
        data-tip="This reviewer purchased this item<br>from Unfair."
        data-for="unfair-tt"
        data-delay-hide="100"
        data-delay-show="200"
      >
        Verified Buyer
      </ProductReviewComplianceBadge>
      <center>
        <ReactTooltip
          id="unfair-tt"
          place="right"
          effect="solid"
          html={true}
        />
      </center>
    </ReviewComplianceBadge>
  </ProductReviewCustomerInfoContainer>
);

NameAndLocation.defaultProps = {
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

NameAndLocation.propTypes = {
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

export default NameAndLocation;
