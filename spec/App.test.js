import React from 'react';
import { shallow } from 'enzyme';
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

describe('App', () => {
  it('Should have a reviews state', () => {
    const { wrapper } = setup();
    const stateProps = wrapper.state();
    expect(stateProps.hasOwnProperty('reviews')).toBe(true);
  });
});
