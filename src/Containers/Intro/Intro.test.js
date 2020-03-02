import React from 'react';
import ReactDOM from 'react-dom';
import { Intro, mapDispatchToProps } from './Intro';
import { fetchTriviaData } from '../../apiCalls';
import { shallow } from 'enzyme';
import { saveTriviaData, saveUserName, saveDifficulty, clearCorrectQuestions, clearIncorrectQuestions } from '../../actions/index';
import { mockRandom } from 'jest-mock-random';

jest.mock('../../apiCalls')

describe('Intro', () => {

  let wrapper, mockProps, mockState;

  beforeEach(() => {

    mockProps = {
      clearCorrectQuestions: jest.fn(),
      clearIncorrectQuestions: jest.fn(),
      saveUserNameToStore: jest.fn(),
      saveDifficultyToStore: jest.fn()
    }

    mockState = {
      name: '',
      difficultyDropBox: 'easy',
      formCompleted: false
    }

    wrapper = shallow(<Intro
      {...mockProps}
      />);
    mockRandom([.01]);
  })

  describe('Intro container/component', () => {

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should start off with a default state', () => {
      const expectedState = {name: '', difficultyDropBox: 'easy', formCompleted: false}
      expect(wrapper.state()).toEqual(expectedState)
    })

    it('when startGame is envoked, so should clearCorrectQuestions, clearIncorrectQuestions, storeUserName, storeDifficulty, and getTriviaData', () => {
      wrapper.instance().getTriviaData = jest.fn();
      wrapper.instance().storeUserName = jest.fn();
      wrapper.instance().storeDifficulty = jest.fn();
      wrapper.instance().startGame()
      expect(mockProps.clearCorrectQuestions).toHaveBeenCalled();
      expect(mockProps.clearIncorrectQuestions).toHaveBeenCalled();
      expect(wrapper.instance().storeUserName).toHaveBeenCalledWith('')
      expect(wrapper.instance().storeDifficulty).toHaveBeenCalledWith('easy')
      expect(wrapper.instance().getTriviaData).toHaveBeenCalled();
    })

    it('when getTriviaData is called, so should fetchTriviaData', () => {
      let mockResponse = [{
          category: "Entertainment: Music",
          type: "multiple",
          difficulty: "easy",
          question: "Who had a 1983 hit with the song &#039;Africa&#039;?",
          correct_answer: "Toto",
          incorrect_answers: [
            "Foreigner",
            "Steely Dan",
            "Journey"]
        }]
      fetchTriviaData.mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
      wrapper.instance().getTriviaData()
      expect(fetchTriviaData).toHaveBeenCalledWith('easy')
    });

    it('creatAllAnswers should call shuffleAnswers with allAnswers', () => {
      const mockCorrectAnswer = 'A'
      const mockIncorrectAnswers = ['B', 'C', 'D']
      const result = wrapper.instance().createAllAnswers(mockCorrectAnswer, mockIncorrectAnswers)
      const allAnswers = [...mockIncorrectAnswers, mockCorrectAnswer]
      expect(result).toEqual(wrapper.instance().shuffleAnswers(allAnswers))
    });

    it('shuffleAnswers should shuffle the array its given', () => {
      global.Math.random = jest.fn().mockImplementation(() => .01)
      const answersArray = ['A', 'B', 'C', 'D']
      const result = wrapper.instance().shuffleAnswers(answersArray)
      expect(result).toEqual(['B','C', 'D', 'A'])
    });

    it('restructureData', () => {
      const mockDirtyData = { results: [{
        question: 'What is rocknRoll?',
        correct_answer: 'FUN!',
        incorrect_answers: ['good', 'bad', 'ok'],
      }]}
      const expected = [{
        question: 'What is rocknRoll?',
        correct_answer: 'FUN!',
        incorrect_answers: ['good', 'bad', 'ok'],
        all_answers: ['bad', 'ok', 'FUN!', 'good' ],
        your_answer: null
      }]
      const result = wrapper.instance().restructureData(mockDirtyData)
      expect(result).toEqual(expected)
    });

    it('should remove weird characters as data is passed in', () => {
      const dirtyData = 'Which English guitarist has the nickname &quot;Slowhand&quot;?'
      const expected = 'Which English guitarist has the nickname Slowhand?'
      const result = wrapper.instance().cleanData(dirtyData)
      expect(result).toEqual(expected)
    });

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

    it('should update state when onSubmit is called', () => {
      const mockEvent = { preventDefault: jest.fn() }
      const mockState = { formCompleted: true }
      wrapper.setState(mockState)
      wrapper.instance().onSubmit(mockEvent)
      expect(wrapper.state('formCompleted')).toEqual(true)
    });

    it('should call startGame when start game button is clicked', () => {
      wrapper.instance().startGame = jest.fn();
      wrapper.instance().forceUpdate()
      wrapper.find('#start-game-button').simulate('click')
      expect(wrapper.instance().startGame).toHaveBeenCalled()
    });
  });
});

describe('mapDispatchToProps', () => {

  it('should dispatch saveTriviaData with triviaData', () => {
    const mockDispatch = jest.fn();
    const triviaData = {
      question: 'Which band is best?',
      correct_answer: 'The Beatles',
      incorrect_answers: ['The Who', 'Rush']
    }
    const actionToDispatch = saveTriviaData(triviaData)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.saveTriviaDataToStore(triviaData)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

  it('should dispatch saveUserName with userName', () => {
    const mockDispatch = jest.fn();
    const userName = 'Bob'
    const actionToDispatch = saveUserName(userName)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.saveUserNameToStore(userName)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

  it('should dispatch saveDifficulty with difficulty', () => {
    const mockDispatch = jest.fn();
    const difficulty = 'easy'
    const actionToDispatch = saveDifficulty(difficulty)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.saveDifficultyToStore(difficulty)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

  it('should dispatch clearCorrectQuestions', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = clearCorrectQuestions()
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.clearCorrectQuestions()
    expect(mockDispatch).toHaveBeenCalled()
  })

  it('should dispatch clearIncorrectQuestions', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = clearIncorrectQuestions()
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.clearIncorrectQuestions()
    expect(mockDispatch).toHaveBeenCalled()
  })

});
