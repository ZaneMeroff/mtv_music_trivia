export const correctQuestions = (state = [], action) => {
  switch(action.type) {
    case 'SAVE_CORRECT_QUESTION':
      return [...action.correctQuestions]
    default:
      return state;
  }
}
