import { triviaData } from '../reducers/triviaDataReducer.js'

describe('correctQuestions', () => {
  it('should return the initial state if no state is provided', () => {
    const expected = [];
    const result = triviaData(undefined, {});
    expect(result).toEqual(expected)
  })

  it('should return the correct state if the action type is GET_TRIVIA_DATA', () => {
    const question = [{
      question: 'The band Muse released their first album, Showbiz, in what year?',
      correct_answer: '1999',
      incorrect_answers: [ '1998', '2000', '2001']
    }]

    const mockState = [];
    const mockAction = {
      type: 'GET_TRIVIA_DATA',
      triviaData: question
    }
    const expected = [{
      question: 'The band Muse released their first album, Showbiz, in what year?',
      correct_answer: '1999',
      incorrect_answers: [ '1998', '2000', '2001']
    }]

    const result = triviaData(mockState, mockAction);
    expect(result).toEqual(expected)
  })
})
