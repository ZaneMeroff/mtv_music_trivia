export const userName = (state = '', action) => {
  switch(action.type) {
    case 'SAVE_USERNAME':
      return action.name
    default:
      return state;
  }
}
