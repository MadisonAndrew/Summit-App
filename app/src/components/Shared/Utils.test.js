const { verifyName } = require("./Utils.js")

test("test", () => {
  expect(verifyName("test")).toBe("test")
})