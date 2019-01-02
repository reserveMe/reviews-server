import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles/FilterReviewsStyles.jsx';

class FilterReviewsButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterClick = this.handleFilterClick.bind(this);
  }

  handleFilterClick(e) {
    const { handleReviewsFilter } = this.props;
    handleReviewsFilter(e.target.name);
  }

  render() {
    const { tag } = this.props;
    return (
      <Styled.FilterButton name={tag[0]} onClick={this.handleFilterClick}>
        {tag[0]}
        {' '}
        (
        {tag[1]}
        )
      </Styled.FilterButton>
    );
  }
}

FilterReviewsButton.propTypes = {
  tag: PropTypes.array.isRequired,
  handleReviewsFilter: PropTypes.func.isRequired,
};

export default FilterReviewsButton;
