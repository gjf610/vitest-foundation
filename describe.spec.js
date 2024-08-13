import { it, expect, describe } from 'vitest'

describe("add", () => {
  const user = { name: "cxr" }
  it("should add a item to todos", () => {
    expect(user.name).toBe("cxr")
  })
  it("should add a item to todos with reverse command", () => {
    expect(user.name).toBe('cxr')
  })
})