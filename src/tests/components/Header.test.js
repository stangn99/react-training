// react-test-renderer
import React from 'react';
import {shallow} from 'enzyme';
import tojson from 'enzyme-to-json';
import Header from '../../components/Header';

test('Should render the header', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();

  // expect(wrapper.find('h1').text()).toBe('Expensify')
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot()
  // console.log(renderer.getRenderOutput());
  
  
  
})

