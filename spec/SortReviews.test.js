import React from 'react';
import { shallow } from 'enzyme';
import SortReviews from '../client/src/components/SortReviews.jsx';

const clickFn = jest.fn();

describe('SortReviews', () => {
  it('Should be defined', () => {
    expect(SortReviews).toBeDefined();
  });
  // it('Should render a state change on select', () => {
  //   const component = shallow(<SortReviews handleSortByChange={clickFn} />);
  //   component
  //     .find('select')
  //     .simulate('change', { target: { value: 'lowest_rating' } });
  //   expect(clickFn).toHaveBeenCalled();
  // });
});
