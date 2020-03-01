import React from 'react';
import ReactDOM from 'react-dom';
import { Round } from './Round';
import { shallow } from 'enzyme';

  //* * * * * * NEED TO TEST mapDispatchToProps * * * * * *

  //* * * * * * NEED TO TEST mapStateToProps * * * * * *

describe('Round', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Round triviaData={{question: 'What is music?'}}/>);
  })

  describe('Round container/component', () => {

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should start off with a default state', () => {
      const expectedState = {
        selectedAnswer: null,
        errorMessage: '',
        rightORwrong: null,
        counter: 0
      }
      expect(wrapper.state()).toEqual(expectedState)
    })

    it('should update state when updateSelectedAnswer is called', () => {
      const mockAnswer = 'The Beatles';
      const expectedAnswer = 'The Beatles';
      wrapper.instance().updateSelectedAnswer(mockAnswer)
      expect(wrapper.state('selectedAnswer')).toEqual(expectedAnswer)
    });

    it('submitAnswer', () => {
    // * * * * * * * * * * * * * * * * * * * * * * * *
    // * * * * * * * * * * * * * * * * * * * * * * * *
    // * * * * * * * * * * * * * * * * * * * * * * * *
    });

    it('should update state when resetForNextRound is called', () => {
      wrapper.instance().resetForNextRound()
      expect(wrapper.state('errorMessage')).toEqual('')
    });

    // it('should call updateSelectedAnswer when an answer button is clicked', () => {
    // wrapper.instance().updateSelectedAnswer = jest.fn();
    // wrapper.instance().forceUpdate()
    // wrapper.find('.answer-button').simulate('click')
    // expect(wrapper.instance().updateSelectedAnswer).toHaveBeenCalled()
    // });

    // it('should call submitAnswer when submit answer button is clicked', () => {
    // wrapper.instance().submitAnswer = jest.fn();
    // wrapper.instance().forceUpdate()
    // wrapper.find('.submit-answer-button').simulate('click')
    // expect(wrapper.instance().submitAnswer).toHaveBeenCalled()
    // });

  })

  // describe('displayRightOrWrong', () => {
  //   it('should return Response component with RIGHT! if rightORwrong is true', () => {
  //     const mockRightOrWrong = true;
  //     const result = wrapper.instance().displayRightOrWrong(mockRightOrWrong)
  //     const expected = <Response text='RIGHT!'/>
  //     expect(result).toEqual(expected)
  //   });
  //   it('should return Response component with WRONG! if rightORwrong is false', () => {
  //     const mockRightOrWrong = false;
  //     const result = wrapper.instance().displayRightOrWrong(mockRightOrWrong)
  //     const expected = <Response text='WRONG!'/>
  //     expect(result).toEqual(expected)
  //   });
  // })

})
