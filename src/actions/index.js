export const getTriviaData = triviaData => ({
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
