import mocha_ from "mocha"
const {mocha} = mocha_
import chai_ from "chai"
const expect = chai_.expect

import {range} from "../../../js/tools.mjs"

describe("default step of 1", () => {
  it("works for an edge case of empty", () => {
    expect(range(7, 4)).to.be.empty
  })
  it("works for a simple range", () => {
    expect(range(3, 7)).to.deep.equal([3, 4, 5, 6, 7])
  })
})

describe("steps greater", () => {
  it("works for an edge case of empty", () => {
    expect(range(7, 4, 2)).to.be.empty
  })
  it("works for an aligned range", () => {
    expect(range(7, 9, 2)).to.deep.equal([7, 9])
  })
  it("works for unaligned ranges", () => {
    expect(range(1, 2, 100)).to.deep.equal([1])
  })
  it("...even with more elements", () => {
    expect(range(1, 8, 3)).to.deep.equal([1, 4, 7])
  })
})
