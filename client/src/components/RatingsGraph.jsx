import React from 'react';

class RatingsGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterRating: null,
    };
    this.handleFilterClick = this.handleFilterClick.bind(this);
  }

  handleFilterClick(e) {
    if (this.state.filterRating === e.target.id) {
      this.setState({
        filterRating: null
      }, () => {
        this.props.handleRatingsFilter('null');
      });
    } else {
      this.setState({
        filterRating: e.target.id,
      }, () => {
        this.props.handleRatingsFilter(this.state.filterRating);
      });
    }
  }

  render() {
    return (
      <div className="ratingsGraph">
        <div role="presentation" id="5" onClick={this.handleFilterClick}>five star bar graph</div>
        <div role="presentation" id="4" onClick={this.handleFilterClick}>four star bar graph</div>
        <div role="presentation" id="3" onClick={this.handleFilterClick}>three star bar graph</div>
        <div role="presentation" id="2" onClick={this.handleFilterClick}>two star bar graph</div>
        <div role="presentation" id="1" onClick={this.handleFilterClick}>one star bar graph</div>
      </div>
    );
  }
}

export default RatingsGraph;
