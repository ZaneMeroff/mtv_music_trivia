import { difficulty } from '../reducers/difficultyReducer.js'

describe('difficulty', () => {
  it('should return the initial state if no state is provided', () => {
    const expected = '';
    const result = difficulty(undefined, '');
    expect(result).toEqual(expected)
  })

  it('should return the correct state if the action type is SAVE_DIFFICULTY', () => {
    const mockDifficulty = 'easy'

    const mockState = '';
    const mockAction = {
      type: 'SAVE_DIFFICULTY',
      difficulty: mockDifficulty
    }
    const expected = 'easy'

    const result = difficulty(mockState, mockAction);
    expect(result).toEqual(expected)
  })
})
