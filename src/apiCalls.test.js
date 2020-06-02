import { fetchTriviaData } from './apiCalls';

describe('getMoviesData', () => {
  let mockResponse = [{
      category: "Entertainment: Music",
      type: "multiple",
      difficulty: "easy",
      question: "Who had a 1983 hit with the song &#039;Africa&#039;?",
      correct_answer: "Toto",
      incorrect_answers: [
        "Foreigner",
        "Steely Dan",
        "Journey"
      ]
    }]

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it('should call fetch with the correct url', () => {
    const difficulty = 'easy';
    fetchTriviaData(difficulty)
    expect(window.fetch).toHaveBeenCalledWith(`https://opentdb.com/api.php?amount=10&category=12&difficulty=${difficulty}&type=multiple`)
  });

  it('should return an array of movies', () => {
    fetchTriviaData()
      .then(questions => expect(questions).toEqual(mockResponse));
  });

  it('should return an error if the response is not okay', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('200 status code not found: getTriviaData throw error'))
    })
    expect(fetchTriviaData()).rejects.toEqual(Error('200 status code not found: getTriviaData throw error'))
  })

  it('should return an error if promise is rejected', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        json: () => Promise.resolve(mockResponse)
      });
    });
    expect(fetchTriviaData()).rejects.toEqual(Error('200 status code not found: getTriviaData throw error'))
  });

});
