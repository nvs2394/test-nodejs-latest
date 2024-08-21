import { mock, test } from "node:test";
import { fetchData } from "./service";
import assert from "node:assert/strict";
import axios from "axios";

test("should return response data", async () => {
  mock.method(axios, "get", async (url: string) => ({ data: { message: 'Hello, world!' } }));

  const response = await fetchData("https://example.com");
  assert.strictEqual(response.message, "Hello, world!");
})