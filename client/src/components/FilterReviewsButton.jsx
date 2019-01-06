import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles/FilterReviewsStyles.jsx';

class FilterReviewsButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.handleFilterClick = this.handleFilterClick.bind(this);
  }

  handleFilterClick(e) {
    const { handleReviewsFilter } = this.props;
    this.setState({
      clicked: !this.state.clicked,
    });
    handleReviewsFilter(e.target.name);
  }

  render() {
    const { tag } = this.props;
    const addDot = this.state.clicked || tag[0] <= 5
      ? (<Styled.FilterDot />)
      : (' ');
    const tagTwo = tag[0] <= 5
      ? <br />
      : (
        <Styled.FilterTagTwo>
          {' '}
          {'('}
          {tag[1]}
          {')'}
        </Styled.FilterTagTwo>
      );
    return (
      <Styled.FilterButton name={tag[0]} onClick={this.handleFilterClick}>
        {tag[0]}
        {' '}
        {tagTwo}
        {' '}
        {addDot}
      </Styled.FilterButton>
    );
  }
}

FilterReviewsButton.propTypes = {
  tag: PropTypes.array.isRequired,
  handleReviewsFilter: PropTypes.func.isRequired,
};

export default FilterReviewsButton;
