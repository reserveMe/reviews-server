import React from 'react';
import { shallow } from 'enzyme';
import FilterReviewsButton from '../client/src/components/FilterReviewsButton.jsx';

const clickFn = jest.fn();

describe('FilterReviewsButton', () => {
  it('Should be defined', () => {
    expect(FilterReviewsButton).toBeDefined();
  });
  // it('Should render a state change on filter button click', () => {
  //   const component = shallow(<FilterReviewsButton tag={['Comfort Food', 4]} handleReviewsFilter={clickFn} />);
  //   component
  //     .find('button')
  //     .simulate('click', { target: { name: 'Comfort Food' } });
  //   expect(clickFn).toHaveBeenCalled();
  // });
});
