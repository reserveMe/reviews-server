import React from 'react';
import PropTypes from 'prop-types';
import ReviewListEntry from './ReviewListEntry.jsx';

const ReviewList = (props) => {
  const { reviews } = props;
  return (
    <div className="reviewEntries">
      {reviews.map(review => (
        <ReviewListEntry key={review.review.id} review={review} />
      ))}
    </div>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ReviewList;
