export const correctQuestions = (state = [], action) => {
  switch(action.type) {
    case 'SAVE_CORRECT_QUESTION':
      return [...state, action.question]
    default:
      return state;
  }
}
