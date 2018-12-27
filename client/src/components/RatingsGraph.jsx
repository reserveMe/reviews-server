import React from 'react';

class RatingsGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterClick: false,
    };
    this.handleFilterClick = this.handleFilterClick.bind(this);
  }

  handleFilterClick(e) {
    // eslint-disable-next-line arrow-parens
    this.setState((state) => ({
      filterClick: !state.filterClick,
    }));
    let filter = this.state.filterClick ? 'null' : e.target.id;
    this.props.handleRatingsFilter(filter);
  }

  render() {
    return (
      <div className="ratingsGraph">
        <div id="5" onClick={this.handleFilterClick}>five star bar graph</div>
        <div id="4" onClick={this.handleFilterClick}>four star bar graph</div>
        <div id="3" onClick={this.handleFilterClick}>three star bar graph</div>
        <div id="2" onClick={this.handleFilterClick}>two star bar graph</div>
        <div id="1" onClick={this.handleFilterClick}>one star bar graph</div>
      </div>
    );
  }
}

export default RatingsGraph;
