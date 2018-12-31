import React from 'react';
import PropTypes from 'prop-types';

class SortReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'newest',
    };
    this.handleSortChange = this.handleSortChange.bind(this);
  }

  handleSortChange(e) {
    const { handleSortByChange } = this.props;
    this.setState({
      selected: e.target.value,
    });
    handleSortByChange(e.target.value);
  }

  render() {
    const { selected } = this.state;
    return (
      <form>
        <label>
          Sort by
          <select id={selected} value={selected} onChange={this.handleSortChange}>
            <option value="newest">Newest</option>
            <option value="highest_rating">Highest rating</option>
            <option value="lowest_rating">Lowest rating</option>
          </select>
        </label>
      </form>
    );
  }
}

SortReviews.propTypes = {
  handleSortByChange: PropTypes.func.isRequired,
};

export default SortReviews;
