export const difficulty = (state = '', action) => {
  switch(action.type) {
    case 'SAVE_DIFFICULTY':
      return [...action.difficulty]
    default:
      return state;
  }
}
