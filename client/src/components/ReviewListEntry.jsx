import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';

const ReviewListEntry = (props) => {
  const { review } = props;
  return (
    <div className="reviewEntry">
      {review.reviewer.nickname}
      <br />
      {review.reviewer.location}
      <br />
      {review.reviewer.review_count}
      {' '}
      reviews
      <br />
      {review.review.ratings.overall}
      <br />
      Dined on
      {' '}
      {format(review.reviewer.date_dined, 'MMMM D, YYYY')}
      <br />
      Overall
      {' '}
      {review.review.ratings.overall}
      <br />
      Food
      {' '}
      {review.review.ratings.food}
      <br />
      Service
      {' '}
      {review.review.ratings.service}
      <br />
      Ambience
      {' '}
      {review.review.ratings.ambience}
      <br />
      {review.review.text}
      <br />
    </div>
  );
};

ReviewListEntry.propTypes = {
  review: PropTypes.object.isRequired,
};

export default ReviewListEntry;
