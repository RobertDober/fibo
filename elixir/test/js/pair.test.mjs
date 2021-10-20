import mocha_ from "mocha"
const {mocha} = mocha_
import chai_ from "chai"
const expect = chai_.expect

import {ipow} from "../../js/pair.mjs"


const base = [1, 0]
describe("ipow", () => {
  it("works for n = 1", () => {
    expect(ipow(base, 1)).to.deep.equal(base)
  })
  it("works for n = 10", () => {
    expect(ipow(base, 10)).to.deep.equal([55, 34])
  })
})
