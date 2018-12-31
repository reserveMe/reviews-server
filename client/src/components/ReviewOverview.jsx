import React from 'react';
import PropTypes from 'prop-types';

const ReviewOverview = (props) => {
  const { reviews } = props;
  const overall = reviews.reduce((sum, element) => {
    sum += element.review.ratings.overall;
    return sum;
  }, 0);

  const food = reviews.reduce((sum, element) => {
    sum += element.review.ratings.food;
    return sum;
  }, 0);

  const service = reviews.reduce((sum, element) => {
    sum += element.review.ratings.service;
    return sum;
  }, 0);

  const ambience = reviews.reduce((sum, element) => {
    sum += element.review.ratings.ambience;
    return sum;
  }, 0);

  const value = reviews.reduce((sum, element) => {
    sum += element.review.ratings.value;
    return sum;
  }, 0);

  return (
    <div className="reviewOverview">
      <h2>What {reviews.length} People are Saying</h2>
      Overall ratings and reviews<br />
      Reviews can only be made by diners who have eaten at this restaurant.<br />
      {(overall / reviews.length).toFixed(1)}<br />
      {(food / reviews.length).toFixed(1)}<br />
      {(service / reviews.length).toFixed(1)}<br />
      {(ambience / reviews.length).toFixed(1)}<br />
      {(value / reviews.length).toFixed(1)}<br />
    </div>
  );
};

ReviewOverview.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ReviewOverview;
