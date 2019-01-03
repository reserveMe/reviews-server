import React from 'react';
import { shallow } from 'enzyme';
import ReviewOverview from '../client/src/components/ReviewOverview.jsx';
import { reviews } from './testingDummyData.js';

describe('ReviewOverview', () => {
  it('Should be defined', () => {
    expect(ReviewOverview).toBeDefined();
  });
  // it('Should render correctly', () => {
  //   const component = shallow(<ReviewOverview reviews={reviews} />);
  //   expect(component).toMatchSnapshot();
  // });
});
