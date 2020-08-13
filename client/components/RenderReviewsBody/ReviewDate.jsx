import React from 'react';
import PropTypes from 'prop-types';

const ReviewDate = ({ review: { date } }) => (
  <div>{date.substring(0, date.indexOf('T'))}</div>
);

ReviewDate.propTypes = {
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

export default ReviewDate;
