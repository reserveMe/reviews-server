import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import * as Styled from './styles/ReviewListStyles.jsx';

class ReviewListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      readAll: false,
    };
    this.getReviewText = this.getReviewText.bind(this);
    this.toggleText = this.toggleText.bind(this);
  }

  getReviewText() {
    const { readAll } = this.state;
    const { review } = this.props;
    if (readAll) {
      return review.review.text;
    }
    if (review.review.text.length >= 215) {
      return `${review.review.text.slice(0, 215)}...`;
    }
    return review.review.text.slice(0, 215);
  }

  toggleText() {
    this.setState({
      readAll: !this.state.readAll
    });
  }

  render() {
    const { review } = this.props;
    return (
      <Styled.ReviewEntry>
        <Styled.AuthorSection>
          <Styled.AuthorBubble>
            <span>
              {review.reviewer.nickname[review.reviewer.nickname.length - 1] === review.reviewer.nickname[review.reviewer.nickname.length - 1].toUpperCase()
                ? review.reviewer.nickname[0] + review.reviewer.nickname[review.reviewer.nickname.length - 1]
                : review.reviewer.nickname[0].toUpperCase()}
            </span>
          </Styled.AuthorBubble>
          <Styled.AuthorName>
            {review.reviewer.nickname}
          </Styled.AuthorName>
          <Styled.AuthorLocation>
            {review.reviewer.location}
          </Styled.AuthorLocation>
          <Styled.AuthorReviewCount>
            {review.reviewer.review_count}
            {' '}
            reviews
          </Styled.AuthorReviewCount>
        </Styled.AuthorSection>
        <Styled.ReviewDetailsSection>
          <Styled.ReviewRatingHeader>
            <Styled.ReviewRatingContainer>
              <Styled.ReviewRatingItemBack>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </Styled.ReviewRatingItemBack>
              <Styled.ReviewRatingItemFront ratingWidth={review.review.ratings.overall}>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </Styled.ReviewRatingItemFront>
            </Styled.ReviewRatingContainer>
            <Styled.DinedDesc>
              · Dined on
              {' '}
              {format(review.reviewer.date_dined, 'MMMM D, YYYY')}
            </Styled.DinedDesc>
          </Styled.ReviewRatingHeader>
          <Styled.ReviewEntryRating>
            <Styled.ReviewEntryRatingCategory>
              Overall
            </Styled.ReviewEntryRatingCategory>
            <Styled.ReviewEntryRatingQuantity>
              {' '}
              {review.review.ratings.overall}
            </Styled.ReviewEntryRatingQuantity>
            <Styled.ReviewEntryMidDot>
              ·
            </Styled.ReviewEntryMidDot>
            <Styled.ReviewEntryRatingCategory>
              Food
            </Styled.ReviewEntryRatingCategory>
            <Styled.ReviewEntryRatingQuantity>
              {' '}
              {review.review.ratings.food}
            </Styled.ReviewEntryRatingQuantity>
            <Styled.ReviewEntryMidDot>
              ·
            </Styled.ReviewEntryMidDot>
            <Styled.ReviewEntryRatingCategory>
              Service
            </Styled.ReviewEntryRatingCategory>
            <Styled.ReviewEntryRatingQuantity>
              {' '}
              {review.review.ratings.service}
            </Styled.ReviewEntryRatingQuantity>
            <Styled.ReviewEntryMidDot>
              ·
            </Styled.ReviewEntryMidDot>
            <Styled.ReviewEntryRatingCategory>
              Ambience
            </Styled.ReviewEntryRatingCategory>
            <Styled.ReviewEntryRatingQuantity>
              {' '}
              {review.review.ratings.ambience}
            </Styled.ReviewEntryRatingQuantity>
          </Styled.ReviewEntryRating>
          <br />
          {this.getReviewText()}
          <br />
          {review.review.text.length > 215
            ? (
              <Styled.ReviewTextReadClick onClick={this.toggleText}>
                {this.state.readAll ? '- Read less' : '+ Read more'}
                <br />
              </Styled.ReviewTextReadClick>
            )
            : (<br />)}
        </Styled.ReviewDetailsSection>
      </Styled.ReviewEntry>
    );
  }
}

ReviewListEntry.propTypes = {
  review: PropTypes.object.isRequired,
};

export default ReviewListEntry;
