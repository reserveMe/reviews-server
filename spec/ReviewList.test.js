import React from 'react';
import { shallow, mount } from 'enzyme';
import ReviewList from '../client/src/components/ReviewList.jsx';
import { reviews } from './testingDummyData.js';

describe('ReviewList', () => {
  let reviewlist;

  beforeEach(() => {
    reviewlist = mount(<ReviewList reviews={reviews} />);
  });

  it('Should be defined', () => {
    expect(ReviewList).toBeDefined();
  });
  // it('Should require reviews prop', () => {
  //   expect(reviewlist.props().reviews).toBeDefined();
  // });
});
