export const triviaData = (state = [], action) => {
  switch(action.type) {
    case 'GET_TRIVIA_DATA':
      return [...action.triviaData]
    default:
      return state;
  }
}
