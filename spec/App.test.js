import React from 'react';
// import { shallow, mount, render } from 'enzyme';
// import renderer from 'react-test-renderer';
// import 'jest-styled-components';
import { shallow, render, mount } from 'enzyme';
// import toJSON from 'enzyme-to-json';
import App from '../client/src/components/App.jsx';

function setup() {
  const wrapper = shallow(<App />);
  return { wrapper };
}

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
  // it('Should mount correctly', () => {
  //   expect(shallow(
  //     <App />,
  //   )).toMatchSnapshot();
  // });
  it('Should render correctly', () => {
    const wrapper = render(<App />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
  // it('Should render correctly', () => {
  //   expect(render(
  //     <App />,
  //   )).toMatchSnapshot();
  // });
  // it('Should fetch reviews on #componentDidMount', () => {
  //   const app = shallow(<App />);
  //   app.instance().componentDidMount();
  // });
});
