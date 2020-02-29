export const saveTriviaData = triviaData => ({
  type: 'GET_TRIVIA_DATA',
  triviaData
});

export const correctQuestions = question => ({
  type: 'SAVE_CORRECT_QUESTION',
  question
});

export const clearCorrectQuestions = () => ({
  type: 'CLEAR_CORRECT_QUESTIONS'
});

export const incorrectQuestions = question => ({
  type: 'SAVE_INCORRECT_QUESTION',
  question
});

export const clearIncorrectQuestions = () => ({
  type: 'CLEAR_INCORRECT_QUESTIONS'
});

export const saveUserName = name => ({
  type: 'SAVE_USERNAME',
  name
});

export const saveDifficulty = difficulty => ({
  type: 'SAVE_DIFFICULTY',
  difficulty
});
