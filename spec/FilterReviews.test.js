import React from 'react';
import { shallow } from 'enzyme';
import FilterReviews from '../client/src/components/FilterReviews.jsx';
import { reviews } from './testingDummyData.js';

describe('FilterReviews', () => {
  it('Should be defined', () => {
    expect(FilterReviews).toBeDefined();
  });
  it('Should render correctly', () => {
    const component = shallow(<FilterReviews reviews={reviews} />);
    expect(component).toMatchSnapshot();
  });
  
});
