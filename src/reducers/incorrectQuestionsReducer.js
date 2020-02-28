export const incorrectQuestions = (state = [], action) => {
  switch(action.type) {
    case 'SAVE_INCORRECT_QUESTION':
      return [...state, action.question]
    default:
      return state;
  }
}
