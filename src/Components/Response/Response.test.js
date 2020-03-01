import React from 'react';
import Response from './Response';
import { shallow } from 'enzyme';

describe('Loading', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Response text='RIGHT!' />)
  })

  it ('should render a Response component', () => {
    expect(wrapper).toMatchSnapshot()
  })

})
