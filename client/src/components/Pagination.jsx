import React from 'react';
import _ from 'underscore';
import PaginationBubbles from './PaginationBubbles.jsx';

const Pagination = (props) => {
  const pageNums = _.range(1, ((Math.ceil(props.reviewsCount / props.pageLimit)) + 1));
  return (
    <div className="reviewPagination">
      <div id="reviewsBackward"> ^ </div>
      {pageNums.map(pageNum => (
        <PaginationBubbles pageNum={pageNum} handlePageRender={props.handlePageRender} />
      ))}
      <div id="reviewsForward"> ^ </div>
    </div>
  );
};

export default Pagination;
