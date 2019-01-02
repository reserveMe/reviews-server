import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles/PaginationButtonStyles.jsx';

class PaginationButtons extends React.Component {
  constructor(props) {
    super(props);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick(e) {
    const { handlePageRender } = this.props;
    handlePageRender(e.target.id);
  }

  render() {
    const { pageNum } = this.props;
    return (
      <Styled.PaginationButton type="button" id={pageNum} onClick={this.handlePageClick}>
        {pageNum}
      </Styled.PaginationButton>
    );
  }
}

PaginationButtons.propTypes = {
  pageNum: PropTypes.number.isRequired,
  handlePageRender: PropTypes.func.isRequired,
};


export default PaginationButtons;
