import { getTime } from "./utils"

type LogType = "info" | "error" | "warn" | "debug"
type LogMessage = string | number | boolean | object | Error

const log = (logType: LogType, message: LogMessage) => {
  try {
    if (message instanceof Error) {
      if (logType !== "error") {
        console.warn(
          `[${getTime()}] [${"warn".toUpperCase()}]\nThe log below contains an error but the incorrect logType was used. The correct logType has been assigned.\n`,
        )
      }

      console.error(`[${getTime()}] [${logType.toUpperCase()}]\n${message.stack}\n`)
      return
    }

    console[logType](
      `[${getTime()}] [${logType.toUpperCase()}]\n${typeof message === "object" ? JSON.stringify(message) : message}`,
    )
  } catch (error) {
    log("error", error as Error)
  }
}

export default log
