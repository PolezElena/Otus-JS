import max from "../src/max"

describe("function max", function () {
  it("imported without error", function () {
    expect(max).toBeDefined()
  })
  it("is function", function () {
    expect(typeof max).toBe("function")
  })
  test("finds max of 2 numbers", function () {
    const result = max(1, 2)
    expect(result).toBe(2)
  })
  test("finds max of 3 numbers", function () {
    const result = max(1, 2, 88)
    expect(result).toBe(88)
  })
  test("can not find max when not numbers passed", function () {
    const result = max(1, 2, "qqq")
    expect(result).toBeNaN()
  })
})
