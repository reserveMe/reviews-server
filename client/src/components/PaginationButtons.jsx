import React from 'react';
import PropTypes from 'prop-types';

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
      <button type="button" id={pageNum} onClick={this.handlePageClick}>
        {pageNum}
      </button>
    );
  }
}

PaginationButtons.propTypes = {
  pageNum: PropTypes.number.isRequired,
  handlePageRender: PropTypes.func.isRequired,
};


export default PaginationButtons;
