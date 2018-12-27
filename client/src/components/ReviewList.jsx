import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 1,
    };
  }

  render() {
    return (
      <div className="reviewEntries">
        {this.props.reviews.map(review => (
          <ReviewListEntry review={review} />
        ))}
      </div>
    );
  }
}

export default ReviewList;
