import "mocha"

import { assert } from "chai"

import { rpcURL, repoData } from "./test"
import { SICash } from "./SICash"
import { Contract } from "./Contract"

describe("SICash", () => {
  const sicash = new SICash(rpcURL, repoData)

  it("can instantiate a contract", () => {
    const contract = sicash.contract("test/contracts/Methods.sol")
    assert.instanceOf(contract, Contract)
  })

  it("throws an error if contract is not known", () => {
    // assertThrow
    assert.throw(() => {
      sicash.contract("test/contracts/Unknown.sol")
    })
  })
})
