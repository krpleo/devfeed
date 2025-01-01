import baseConfig from "@devfeed/eslint-config/base"
import reactConfig from "@devfeed/eslint-config/react"

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ["dist/**"],
  },
  ...baseConfig,
  ...reactConfig,
]
