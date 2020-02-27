export const fetchTriviaData = difficulty => {
  return fetch(`https://opentdb.com/api.php?amount=10&category=12&difficulty=${difficulty}&type=multiple`)
  .then(response => {
    if (!response.ok) {
      throw Error('200 status code not found: getTriviaData throw error')
    }
    return response.json()
  })
}
