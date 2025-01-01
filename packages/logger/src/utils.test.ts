import { describe, expect, it } from "@jest/globals"

import { checkLength, getTime } from "./utils"

describe("Utility functions", () => {
  describe("checkLength", () => {
    it("should add a leading zero to single digit numbers", () => {
      const input = 5

      const result = checkLength(input)

      expect(result).toBe("05")
    })

    it("should not add a leading zero to double digit numbers", () => {
      const input = 15

      const result = checkLength(input)

      expect(result).toBe("15")
    })

    it("should return a typeof string", () => {
      const input = 5

      const result = checkLength(input)

      expect(typeof result).toBe("string")
    })
  })

  describe("getTime", () => {
    it("should return a formatted time", () => {
      const result = getTime()

      expect(result).toMatch(/^\d{2}:\d{2}:\d{2}$/)
    })

    it("should return a typeof string", () => {
      const result = getTime()

      expect(typeof result).toBe("string")
    })
  })
})
