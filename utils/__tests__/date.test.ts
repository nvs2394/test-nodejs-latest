import { equal } from "node:assert";
import test, { describe } from "node:test";
import { getCurrentDateOfMonth } from "../date";

describe('date', () => {
  test('should return current date of month', () => {
    equal(getCurrentDateOfMonth(), new Date().getDate())
  })
})