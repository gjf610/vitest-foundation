import { beforeEach, beforeAll, afterEach, afterAll, test, describe } from 'vitest'
// 1. 他们的执行顺序
// 2. 在什么时候用


// beforeAll beforeEach test afterEach afterAll
// 只执行一次 在最开始的时候
// 数据库的连接 创建临时文件的时候
beforeAll(() => {
  console.log('before all')
  return () => {
    // after all
    console.log('after all')
  }
})
// pinia  store
beforeEach(() => {
  console.log('before each')
  return () => {
    // after each
    console.log('after each')
  }
})

test('first', () => {
  console.log('first')
})
// reset
afterEach(() => {
  console.log("after each")
})
// 只需执行一次 并且在最后
// 数据库断开连接
// 临时文件就需要删除
afterAll(() => {
  console.log('after all')
})
describe("sub", () => {
  beforeEach(() => {
    console.log('sub: before each')
  })
  test('first', () => {
    console.log('sub: first')
  })
  afterEach(() => {
    console.log('sub: after each')
  })
})

