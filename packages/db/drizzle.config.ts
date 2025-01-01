import type { Config } from "drizzle-kit"

import { env } from "@devfeed/env"

export default {
  schema: "./src/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  casing: "snake_case",
} satisfies Config
