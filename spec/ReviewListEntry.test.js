import React from 'react';
import { shallow } from 'enzyme';
import ReviewListEntry from '../client/src/components/ReviewListEntry.jsx';

const APP = 'http://localhost:3004/api/restaurants/1/';

let page;
let browser;
const width = 1920;
const height = 1080;

function setup() {
  const wrapper = shallow(<ReviewListEntry />);
  return { wrapper };
}

describe('ReviewListEntry', () => {
  it('Should be defined', () => {
    expect(ReviewListEntry).toBeDefined();
  });
});
