import React from 'react';
import ReactDOM from 'react-dom';
import { Intro } from './Intro';
import { fetchTriviaData } from '../../apiCalls';
import { shallow } from 'enzyme';

  //* * * * * * NEED TO TEST mapDispatchToProps * * * * * *

describe('Intro', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Intro />);
  })

  describe('Intro container/component', () => {

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should start off with a default state', () => {
      const expectedState = {name: '', difficultyDropBox: null}
      expect(wrapper.state()).toEqual(expectedState)
    })

    // it('when startGame is envoked, so should clearCorrectQuestions, clearIncorrectQuestions, storeUserName, storeDifficulty, and getTriviaData', () => {
    //   wrapper.instance().props = {clearCorrectQuestions: jest.fn() }
    //   const spy1 = jest.spyOn(wrapper.instance().props, 'clearCorrectQuestions')
    //   wrapper.instance().props = {clearIncorrectQuestions: jest.fn() }
    //   const spy2 = jest.spyOn(wrapper.instance().props, 'clearIncorrectQuestions')
    //
    //   wrapper.instance().startGame()
    //   expect(spy1).toHaveBeenCalled();
    //   expect(spy2).toHaveBeenCalled();
    // })

    // it('when getTriviaData is called, so should fetchTriviaData', () => {
    //   wrapper.instance().getTriviaData()
    //   expect(fetchTriviaData).toHaveBeenCalled()
    // });

    // it('creatAllAnswers', () => {
    //   const mockCorrectAnswer = 'A'
    //   const mockIncorrectAnswers = ['B', 'C', 'D']
    //   const result = wrapper.instance().createAllAnswers(mockCorrectAnswer, mockIncorrectAnswers)
    //   const allAnswers = [...mockIncorrectAnswers, mockCorrectAnswer]
    //   global.Math.random = jest.fn().mockImplementation(() => {
    //     return 1
    //   })
    //   expect(result).toEqual(wrapper.instance().shuffleAnswers(allAnswers))
    // });

    // it('shuffleAnswers', () => {
    //   global.Math.random = jest.fn().mockImplementation(() => {
    //     return 1
    //   })
    //   const answersArray = ['A', 'B', 'C', 'D']
    //   const result = wrapper.instance().shuffleAnswers(answersArray)
    //   expect(result).toEqual(['A', 'B', 'C', 'D'])
    // });

    // it('restructureData', () => {
    //   wrapper.instance().createAllAnswers = jest.fn()
    //   const mockDirtyData = {
    //     question: 'What is rocknRoll?',
    //     correct_answer: 'FUN!',
    //     incorrect_answers: ['good', 'bad', 'ok'],
    //     all_answers: this.createAllAnswers('FUN!', ['good', 'bad', 'ok'] )
    //   }
    //   const expected = {
    //     question: 'What is rocknRoll?',
    //     correct_answer: 'FUN!',
    //     incorrect_answers: ['good', 'bad', 'ok'],
    //     all_answers: this.createAllAnswers('FUN!', ['good', 'bad', 'ok'] ),
    //     your_answer: null
    //   }
    //   const result = wrapper.instance().restructureData(mockDirtyData)
    //   expect(result).toEqual()
    // });

    it('when storeUserName is called, so should saveUserNameToStore with name', () => {
      const name = 'Bob'
      wrapper.instance().props = {saveUserNameToStore: name => name}
      const spy = jest.spyOn(wrapper.instance().props, 'saveUserNameToStore')
      wrapper.instance().storeUserName(name)
      expect(spy).toHaveBeenCalledWith(name);
    });

    it('when storeDifficulty is called, so should saveDifficultyToStore with difficulty', () => {
      const difficulty = 'easy'
      wrapper.instance().props = {saveDifficultyToStore: difficulty => difficulty}
      const spy = jest.spyOn(wrapper.instance().props, 'saveDifficultyToStore')
      wrapper.instance().storeDifficulty(difficulty)
      expect(spy).toHaveBeenCalledWith(difficulty);
    });

    it('should update state when updateDropBoxState is called', () => {
      const mockDifficulty = 'easy'
      const expectedDifficulty = 'easy';
      wrapper.instance().updateDropBoxState(mockDifficulty)
      expect(wrapper.state('difficultyDropBox')).toEqual(expectedDifficulty)
    });

    it('should update state when updateState is called', () => {
      const mockEventName = {
        target: {
          name: 'name',
          value: 'Bob'
        }
      }
      const expectedName = 'Bob';
      wrapper.instance().updateState(mockEventName)
      expect(wrapper.state('name')).toEqual(expectedName)
    });

    it('should call startGame when start game button is clicked', () => {
    wrapper.instance().startGame = jest.fn();
    wrapper.instance().forceUpdate()
    wrapper.find('#start-game-button').simulate('click')
    expect(wrapper.instance().startGame).toHaveBeenCalled()
    });

  });

});
