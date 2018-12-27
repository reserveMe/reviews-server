import React from 'react';

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
    return (
      <form>
        <label>
                Sort by
          <select value={this.state.selected} onChange={this.handleSortChange}>
            <option value="newest">Newest</option>
            <option value="highest_rating">Highest rating</option>
            <option value="lowest_rating">Lowest rating</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SortReviews;
