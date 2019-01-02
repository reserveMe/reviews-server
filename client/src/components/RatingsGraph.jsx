import React from 'react';
import * as Styled from './styles/RatingsGraphStyles.jsx';

class RatingsGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterRating: null,
    };
    this.handleFilterClick = this.handleFilterClick.bind(this);
  }

  handleFilterClick(e) {
    if (this.state.filterRating === e.target.id) {
      this.setState({
        filterRating: null
      }, () => {
        this.props.handleRatingsFilter('null');
      });
    } else {
      this.setState({
        filterRating: e.target.id,
      }, () => {
        this.props.handleRatingsFilter(this.state.filterRating);
      });
    }
  }

  render() {
    const fiveStars = this.props.reviews.filter(element => element.review.ratings.overall === 5);

    const fourStars = this.props.reviews.filter(element => element.review.ratings.overall === 4);

    const threeStars = this.props.reviews.filter(element => element.review.ratings.overall === 3);

    const twoStars = this.props.reviews.filter(element => element.review.ratings.overall === 2);

    const oneStars = this.props.reviews.filter(element => element.review.ratings.overall === 1);

    return (
      <Styled.RatingsGraphSection>
        <Styled.RatingsGraphSectionInner>
          <Styled.RatingsItem>
            <Styled.RatingsLabel>
              <span>
                5
              </span>
              <Styled.RatingsBarGraph className="reviewbaritem" id="5" onClick={this.handleFilterClick}>
                <Styled.RatingBar barWidth={(fiveStars.length * 100) / this.props.reviews.length} />
              </Styled.RatingsBarGraph>
            </Styled.RatingsLabel>
          </Styled.RatingsItem>
          <Styled.RatingsItem>
            <Styled.RatingsLabel>
              <span>
                4
              </span>
              <Styled.RatingsBarGraph className="reviewbaritem" id="4" onClick={this.handleFilterClick}>
                <Styled.RatingBar barWidth={(fourStars.length * 100) / this.props.reviews.length} />
              </Styled.RatingsBarGraph>
            </Styled.RatingsLabel>
          </Styled.RatingsItem>
          <Styled.RatingsItem>
            <Styled.RatingsLabel>
              <span>
                3
              </span>
              <Styled.RatingsBarGraph className="reviewbaritem" id="3" onClick={this.handleFilterClick}>
                <Styled.RatingBar barWidth={(threeStars.length * 100) / this.props.reviews.length} />
              </Styled.RatingsBarGraph>
            </Styled.RatingsLabel>
          </Styled.RatingsItem>
          <Styled.RatingsItem>
            <Styled.RatingsLabel>
              <span>
                2
              </span>
              <Styled.RatingsBarGraph className="reviewbaritem" id="2" onClick={this.handleFilterClick}>
                <Styled.RatingBar barWidth={(twoStars.length * 100) / this.props.reviews.length} />
              </Styled.RatingsBarGraph>
            </Styled.RatingsLabel>
          </Styled.RatingsItem>
          <Styled.RatingsItem>
            <Styled.RatingsLabel>
              <span>
                1
              </span>
              <Styled.RatingsBarGraph className="reviewbaritem" id="1" onClick={this.handleFilterClick}>
                <Styled.RatingBar barWidth={(oneStars.length * 100) / this.props.reviews.length} />
              </Styled.RatingsBarGraph>
            </Styled.RatingsLabel>
          </Styled.RatingsItem>
        </Styled.RatingsGraphSectionInner>
      </Styled.RatingsGraphSection>
    );
  }
}

export default RatingsGraph;
