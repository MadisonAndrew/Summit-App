const { verifyName, printDate, queryBuilder } = require("./Utils.js")

test("test", () => {
  expect(verifyName("")).toBe("")
})

test("test2", () => {
  expect(printDate(new Date(2010,1,1))).toBe("2/1/2010")
})


