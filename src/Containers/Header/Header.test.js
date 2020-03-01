import React from 'react';
import { Header, mapStateToProps } from './Header';
import { shallow } from 'enzyme';

  //  * * * * * Get mapStateToProps to pass!

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
    const questions = [{question: 'Who da best band?'}]
    const mockState = {
      difficulty: 'easy',
      correctQuestions: questions,
      incorrectQuestions: questions,
    };
    const expected = {
      difficulty: 'easy',
      correctQuestions: questions,
      incorrectQuestions: questions,
    };
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected)
  });
});
