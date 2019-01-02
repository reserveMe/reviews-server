import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../client/src/components/App.jsx';

const APP = 'http://localhost:3004/api/restaurants/1/';

let page;
let browser;
const width = 1920;
const height = 1080;

function setup() {
  const wrapper = shallow(<App />);
  return { wrapper };
}

const clickFn = jest.fn();

describe('App', () => {
  it('Should be defined', () => {
    expect(App).toBeDefined();
  });
  it('Should have a reviews state', () => {
    const { wrapper } = setup();
    const stateProps = wrapper.state();
    expect(stateProps.hasOwnProperty('reviews')).toBe(true);
  });
  it('Should have a sortBy state', () => {
    const { wrapper } = setup();
    const stateProps = wrapper.state();
    expect(stateProps.hasOwnProperty('sortBy')).toBe(true);
  });
  it('Should have a filteredReviews state', () => {
    const { wrapper } = setup();
    const stateProps = wrapper.state();
    expect(stateProps.hasOwnProperty('filteredReviews')).toBe(true);
  });
  it('Should mount correctly', () => {
    expect(mount(
      <App />,
    )).toMatchSnapshot();
  });
  it('Should render correctly', () => {
    expect(render(
      <App />,
    )).toMatchSnapshot();
  });
  it('Should fetch reviews on #componentDidMount', () => {
    const app = shallow(<App />);
    app.instance().componentDidMount();
  });
});
