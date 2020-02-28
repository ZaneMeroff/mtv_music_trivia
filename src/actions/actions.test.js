import * as actions from '../actions'

describe('actions', () => {

  it('should have a type GET_TRIVIA_DATA', () => {
    const triviaData = [{
          category: "Entertainment: Music",
          type: "multiple",
          difficulty: "easy",
          question: "Which singer was featured in Jack &Uuml; (Skrillex &amp; Diplo)&#039;s 2015 song &#039;Where Are &Uuml; Now&#039;?",
          correct_answer: "Justin Bieber",
          incorrect_answers: [
            "Selena Gomez",
            "Ellie Goulding",
            "The Weeknd"
          ]
        }]
    const expectedAction = {
      type: 'GET_TRIVIA_DATA',
      triviaData
    }
    const result = actions.saveTriviaData(triviaData)
    expect(result).toEqual(expectedAction)
  })

  it('should have a type SAVE_CORRECT_QUESTION', () => {
    const question = [{
          category: "Entertainment: Music",
          type: "multiple",
          difficulty: "easy",
          question: "Which singer was featured in Jack &Uuml; (Skrillex &amp; Diplo)&#039;s 2015 song &#039;Where Are &Uuml; Now&#039;?",
          correct_answer: "Justin Bieber",
          incorrect_answers: [
            "Selena Gomez",
            "Ellie Goulding",
            "The Weeknd"
          ]
        }]
    const expectedAction = {
      type: 'SAVE_CORRECT_QUESTION',
      question
    }
    const result = actions.correctQuestions(question)
    expect(result).toEqual(expectedAction)
  })

  it('should have a type SAVE_INCORRECT_QUESTION', () => {
    const question = [{
          category: "Entertainment: Music",
          type: "multiple",
          difficulty: "easy",
          question: "Which singer was featured in Jack &Uuml; (Skrillex &amp; Diplo)&#039;s 2015 song &#039;Where Are &Uuml; Now&#039;?",
          correct_answer: "Justin Bieber",
          incorrect_answers: [
            "Selena Gomez",
            "Ellie Goulding",
            "The Weeknd"
          ]
        }]
    const expectedAction = {
      type: 'SAVE_INCORRECT_QUESTION',
      question
    }
    const result = actions.incorrectQuestions(question)
    expect(result).toEqual(expectedAction)
  })

  it('should have a type SAVE_USERNAME', () => {
    const name = 'Biscuits';
    const expectedAction = {
      type: 'SAVE_USERNAME',
      name
    }
    const result = actions.saveUserName(name)
    expect(result).toEqual(expectedAction)
  })

  it('should have a type SAVE_DIFFICULTY', () => {
    const difficulty = 'easy'
    const expectedAction = {
      type: 'SAVE_DIFFICULTY',
      difficulty
    }
    const result = actions.saveDifficulty(difficulty)
    expect(result).toEqual(expectedAction)
  })

});
