import React from 'react';

class FilterReviewsButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterClick = this.handleFilterClick.bind(this);
  }

  handleFilterClick(e) {
    this.props.handleReviewsFilter(e.target.name);
  }

  render() {
    return (
      <button name={this.props.tag[0]} onClick={this.handleFilterClick}>
        {this.props.tag[0]} ({this.props.tag[1]})
      </button>
    );
  }
}

export default FilterReviewsButton;
