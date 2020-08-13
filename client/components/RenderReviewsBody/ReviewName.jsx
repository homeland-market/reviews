import React from 'react';
import PropTypes from 'prop-types';

const ReviewName = ({ review: { name } }) => (
  <div>{name}</div>
);

ReviewName.propTypes = {
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

export default ReviewName;
