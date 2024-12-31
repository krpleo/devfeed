type LogType = "info" | "error" | "warn" | "debug";
type LogMessage = string | number | boolean;

const log = (type: LogType, message: LogMessage) => {
  console[type](`[${Date.now()}] [${type.toUpperCase()}] ${message}`);
};

export default log;
