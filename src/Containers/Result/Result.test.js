import React from 'react';
import { Result, mapStateToProps } from './Result';
import { shallow } from 'enzyme';

describe('Result', () => {
  let wrapper;
  let question;
  beforeEach(() => {
    question = [{question: 'Who da best band?'}]
    wrapper = shallow(<Result username={'Bob'} right={question} wrong={question} />)
  })
  it ('should render a Result component', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

describe('mapStateToProps', () => {
  it('should return an object with a user, right questions array, and wrong questions array', () => {
    const question = [{question: 'Who da best band?'}]
    const mockState = {
      username: 'Bob',
      right: question,
      wrong: question
    };
    const expected = {
      username: 'Bob',
      right: question,
      wrong: question
    };
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected)
  });
});
