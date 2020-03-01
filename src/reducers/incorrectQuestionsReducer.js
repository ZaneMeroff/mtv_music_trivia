export const incorrectQuestions = (state = [], action) => {
  switch(action.type) {
    case 'SAVE_INCORRECT_QUESTION':
      return [...state, action.question]
    case 'CLEAR_INCORRECT_QUESTIONS':
      return state = []
    default:
      return state;
  }
}
