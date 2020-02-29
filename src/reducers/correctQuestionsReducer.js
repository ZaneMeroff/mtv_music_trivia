export const correctQuestions = (state = [], action) => {
  switch(action.type) {
    case 'SAVE_CORRECT_QUESTION':
      return [...state, action.question]
    case 'CLEAR_CORRECT_QUESTIONS':
      return state = []
    default:
      return state;
  }
}
