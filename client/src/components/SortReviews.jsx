import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles/SortReviewsStyles.jsx';

class SortReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'newest',
    };
    this.handleSortChange = this.handleSortChange.bind(this);
  }

  handleSortChange(e) {
    this.setState({
      selected: e.target.value,
    });
    this.props.handleSortByChange(e.target.value);
  }

  render() {
    const { selected } = this.state;
    return (
      <form>
        <label>
          <Styled.SortLabel>Sort by</Styled.SortLabel>
          <Styled.SortSelector id={selected} value={selected} onChange={this.handleSortChange}>
            <option value="newest">Newest</option>
            <option value="highest_rating">Highest rating</option>
            <option value="lowest_rating">Lowest rating</option>
          </Styled.SortSelector>
        </label>
      </form>
    );
  }
}

SortReviews.propTypes = {
  handleSortByChange: PropTypes.func.isRequired,
};

export default SortReviews;
