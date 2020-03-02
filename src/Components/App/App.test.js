import React from 'react';
import ReactDOM from 'react-dom';
import  { App } from './App';
import { shallow } from 'enzyme';

describe('App', () => {

  describe('App container/component', () => {

    it('should match the snapshot', () => {
      const wrapper = shallow(<App />);
      expect(wrapper).toMatchSnapshot();
    });

  });

});
