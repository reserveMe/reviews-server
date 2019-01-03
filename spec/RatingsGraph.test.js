import React from 'react';
import { shallow } from 'enzyme';
import RatingsGraph from '../client/src/components/RatingsGraph.jsx';

const clickFn = jest.fn();

describe('RatingsGraph', () => {
  it('Should be defined', () => {
    expect(RatingsGraph).toBeDefined();
  });
  // it('Should render a state change on div click', () => {
  //   const component = shallow(<RatingsGraph handleRatingsFilter={clickFn} />);
  //   component
  //     .find('[id="5"]')
  //     .simulate('click', { target: { id: '5' } });
  //   expect(clickFn).toHaveBeenCalled();
  // });
});
