import { userName } from '../reducers/userNameReducer.js'

describe('userName', () => {
  it('should return the initial state if no state is provided', () => {
    const expected = '';
    const result = userName(undefined, '');
    expect(result).toEqual(expected)
  })

  it('should return the correct state if the action type is SAVE_USERNAME', () => {
    const mockUsername = 'Bob the Builder'

    const mockState = '';
    const mockAction = {
      type: 'SAVE_USERNAME',
      name: mockUsername
    }
    const expected = 'Bob the Builder'

    const result = userName(mockState, mockAction);
    expect(result).toEqual(expected)
  })
})
