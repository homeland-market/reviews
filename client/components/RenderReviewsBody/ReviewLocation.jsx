import React from 'react';
import PropTypes from 'prop-types';

const ReviewLocation = ({ review: { location } }) => (
  <div>{location}</div>
);

ReviewLocation.propTypes = {
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

export default ReviewLocation;
