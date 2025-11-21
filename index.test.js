import { sum } from './index.js'

describe('sum', () => {
  it('should return true when 1 + 2 == 3', () => {
    expect(sum(1, 2)).toBe(true)
  })
})
