export const incorrectQuestions = (state = [], action) => {
  switch(action.type) {
    case 'SAVE_INCORRECT_QUESTION':
      return [...action.IncorrectQuestions]
    default:
      return state;
  }
}
