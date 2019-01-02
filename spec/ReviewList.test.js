import React from 'react';
import { shallow, mount } from 'enzyme';
import ReviewList from '../client/src/components/ReviewList.jsx';
import { reviews } from './testingDummyData.js';

const APP = 'http://localhost:3004/api/restaurants/1/';

let page;
let browser;
const width = 1920;
const height = 1080;

function setup() {
  const wrapper = shallow(<ReviewList />);
  return { wrapper };
}

describe('ReviewList', () => {
  let reviewlist;

  beforeEach(() => {
    reviewlist = mount(<ReviewList reviews={reviews} />);
  });

  it('Should be defined', () => {
    expect(ReviewList).toBeDefined();
  });
  it('Should require reviews prop', () => {
    expect(reviewlist.props().reviews).toBeDefined();
  });
});
