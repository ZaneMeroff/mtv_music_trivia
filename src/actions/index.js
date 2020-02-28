export const saveTriviaData = triviaData => ({
  type: 'GET_TRIVIA_DATA',
  triviaData
});

export const correctQuestions = question => ({
  type: 'SAVE_CORRECT_QUESTION',
  question
});

export const incorrectQuestions = question => ({
  type: 'SAVE_INCORRECT_QUESTION',
  question
});

export const saveUserName = name => ({
  type: 'SAVE_USERNAME',
  name
});

export const saveDifficulty = difficulty => ({
  type: 'SAVE_DIFFICULTY',
  difficulty
});
