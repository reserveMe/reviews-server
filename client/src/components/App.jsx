import React from 'react';
import Url from 'url-parse';
import ReviewOverview from './ReviewOverview.jsx';
import RatingsGraph from './RatingsGraph.jsx';
import SortReviews from './SortReviews.jsx';
import ReviewList from './ReviewList.jsx';
import Pagination from './Pagination.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      ratingFilter: null,
      sortBy: 'newest',
      pageLimit: 10,
      pageNum: 1,
    };
    this.getReviewsSorted = this.getReviewsSorted.bind(this);
    this.handleRatingsFilterChange = this.handleRatingsFilterChange.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.handlePageRender = this.handlePageRender.bind(this);
  }

  componentDidMount() {
    const url = new Url(window.location.href);
    const id = url.pathname.split('/')[3];
    fetch(`/api/restaurants/${id}/reviews`)
    // eslint-disable-next-line arrow-parens
      .then(response => response.json())
      .then((data) => {
        this.setState({
          reviews: data,
        });
      });
  }

  getReviewsSorted() {
    const url = new Url(window.location.href);
    const id = url.pathname.split('/')[3];
    fetch(`/api/restaurants/${id}/reviews?sort=${this.state.sortBy}`)
      // eslint-disable-next-line arrow-parens
      .then(response => response.json())
      .then((data) => {
        this.setState({
          reviews: data,
        });
        this.setState({
          pageNum: 1,
        });
      });
  }

  handleSortByChange(sort) {
    this.setState({
      sortBy: sort,
    }, () => this.getReviewsSorted());
  }

  handleRatingsFilterChange(rating) {
    this.setState(() => ({
      ratingFilter: parseInt(rating, 10),
    }));
  }

  handlePageRender(pageNum) {
    this.setState(() => ({
      pageNum: parseInt(pageNum, 10),
    }));
  }

  render() {
    return (
      <div className="reviewsTotal">
        <ReviewOverview reviews={this.state.reviews} />
        <RatingsGraph handleRatingsFilter={this.handleRatingsFilterChange} />
        <SortReviews handleSortByChange={this.handleSortByChange} />
        <ReviewList reviews={this.state.reviews.slice((this.state.pageLimit * (this.state.pageNum - 1)), (this.state.pageLimit * this.state.pageNum))} />
        <Pagination reviewsCount={this.state.reviews.length} pageLimit={this.state.pageLimit} handlePageRender={this.handlePageRender} />
      </div>
    );
  }
}