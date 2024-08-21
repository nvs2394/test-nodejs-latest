import { describe, test } from 'node:test'
import { equal } from 'node:assert'
import { sum } from '../math'

describe('math', () => {
  test('should return sum of two number correctly', () => {
    equal(sum(1, 2), 3)
  })

  test('should return undefined if one of the number is not provided', () => {
    equal(sum(1, undefined), undefined)
  })
})