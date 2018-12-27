import React from 'react';

class PaginationBubbles extends React.Component {
  constructor(props) {
    super(props);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick(e) {
    this.props.handlePageRender(e.target.id);
  }

  render() {
    return (
      <li id={this.props.pageNum} onClick={this.handlePageClick}>{this.props.pageNum}</li>
    );
  }
}

export default PaginationBubbles;
