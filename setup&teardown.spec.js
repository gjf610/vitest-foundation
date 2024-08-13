import { beforeEach, beforeAll, afterEach, afterAll, test } from 'vitest'
// 1. 他们的执行顺序
// beforeAll beforeEach test afterEach afterAll

beforeAll(() => {
  console.log('before all')
})
beforeEach(() => {
  console.log('before each')
})
test('first', () => {
  console.log('first')
})
test("second", () => {
  console.log("second")
})
afterEach(() => {
  console.log("after each")
})
afterAll(() => {
  console.log('after all')
})
// 2. 在什么时候用
