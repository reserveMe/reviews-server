import React from 'react';
import { shallow } from 'enzyme';
import PaginationButtons from '../client/src/components/PaginationButtons.jsx';

const clickFn = jest.fn();

describe('PaginationButtons', () => {
  it('Should be defined', () => {
    expect(PaginationButtons).toBeDefined();
  });
  // it('Should render a state change on button click', () => {
  //   const component = shallow(<PaginationButtons pageNum={1} handlePageRender={clickFn} />);
  //   component
  //     .find('button')
  //     .simulate('click', { target: { id: 1 } });
  //   expect(clickFn).toHaveBeenCalled();
  // });
});
