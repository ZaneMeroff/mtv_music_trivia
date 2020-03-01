import { correctQuestions } from '../reducers/correctQuestionsReducer.js'

describe('correctQuestions', () => {
  it('should return the initial state if no state is provided', () => {
    const expected = [];
    const result = correctQuestions(undefined, {});
    expect(result).toEqual(expected)
  })

  it('should return the correct state if the action type is SAVE_CORRECT_QUESTION', () => {
    const question = {
      question: 'The band Muse released their first album, Showbiz, in what year?',
      correct_answer: '1999',
      incorrect_answers: [ '1998', '2000', '2001']
    }

    const mockState = [];
    const mockAction = {
      type: 'SAVE_CORRECT_QUESTION',
      question: question
    }
    const expected = [{
      question: 'The band Muse released their first album, Showbiz, in what year?',
      correct_answer: '1999',
      incorrect_answers: [ '1998', '2000', '2001']
    }]

    const result = correctQuestions(mockState, mockAction);
    expect(result).toEqual(expected)
  })
})

it('should return the correct state if the action type is CLEAR_CORRECT_QUESTIONS', () => {
  const question = {
    question: 'The band Muse released their first album, Showbiz, in what year?',
    correct_answer: '1999',
    incorrect_answers: [ '1998', '2000', '2001']
  }

  const mockState = [];
  const mockAction = {
    type: 'CLEAR_CORRECT_QUESTIONS'
  }
  const expected = []

  const result = correctQuestions(mockState, mockAction);
  expect(result).toEqual(expected)

})
