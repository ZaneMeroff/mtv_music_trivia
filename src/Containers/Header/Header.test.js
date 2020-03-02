import React from 'react';
import { Header, mapStateToProps } from './Header';
import { shallow } from 'enzyme';

describe('Header', () => {
  let wrapper;
  let question;
  beforeEach(() => {
    question = {question: 'Who da best band?'}
    wrapper = shallow(<Header difficulty={'easy'} correct={question} incorrect={question} />)
  })
  it ('should render a Header component', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

describe('mapStateToProps', () => {

  it('should return an object with a difficulty, array of correct questions, and an array of incorrect questions', () => {
      const mockState = {
        correct: undefined,
        difficulty: undefined,
        incorrect: undefined
      }
      const expected = {
        correct: undefined,
        difficulty: undefined,
        incorrect: undefined
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
  });

});
