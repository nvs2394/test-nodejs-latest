import { equal } from "node:assert";
import test, { describe } from "node:test";
import { getCurrentDateOfMonth } from "../date";

describe('date', () => {
  test('should return current date of month', (context) => {
    context.mock.timers.enable({ apis: ['Date'], now: new Date(2021, 8, 11) })
    equal(getCurrentDateOfMonth(), 11)
  })
})