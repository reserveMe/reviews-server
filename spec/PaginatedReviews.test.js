import React from 'react';
import { shallow } from 'enzyme';
import PaginatedReviews from '../client/src/components/PaginatedReviews.jsx';
import { reviews } from './testingDummyData.js';

const APP = 'http://localhost:3004/api/restaurants/1/';

let page;
let browser;
const width = 1920;
const height = 1080;

function setup() {
  const wrapper = shallow(<PaginatedReviews />);
  return { wrapper };
}

describe('PaginatedReviews', () => {
  it('Should be defined', () => {
    expect(PaginatedReviews).toBeDefined();
  });
  // it('Should render correctly', () => {
  //   const component = shallow(<PaginatedReviews reviews={reviews} />);
  //   expect(component).toMatchSnapshot();
  // });
});
