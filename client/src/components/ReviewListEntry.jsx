import React from 'react';

class ReviewListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: 'idk',
    };
  }

  render() {
    return (
      <div className="reviewEntry">
        {this.props.review.reviewer.nickname}<br />
        {this.props.review.reviewer.location}<br />
        {this.props.review.reviewer.review_count} reviews<br />
        {this.props.review.review.ratings.overall}<br />
        Dined on {this.props.review.reviewer.date_dined}<br />
        Overall {this.props.review.review.ratings.overall}<br />
        Food {this.props.review.review.ratings.food}<br />
        Service {this.props.review.review.ratings.service}<br />
        Ambience {this.props.review.review.ratings.ambience}<br />
        {this.props.review.review.text}<br />
      </div>
    );
  }
}

export default ReviewListEntry;