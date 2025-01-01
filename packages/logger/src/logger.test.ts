import { describe, expect, it, jest } from "@jest/globals";

import log from "./logger";

beforeEach(() => {
  jest.resetAllMocks();
});

describe("Logger", () => {
  it("should log an error", () => {
    const error = new Error("Test error");
    const consoleError = jest
      .spyOn(console, "error")
      .mockImplementation(() => undefined);

    log("error", error);

    expect(consoleError).toHaveBeenCalledTimes(1);
  });

  it("should log a warning", () => {
    const warning = "Test warning";
    const consoleWarn = jest
      .spyOn(console, "warn")
      .mockImplementation(() => undefined);

    log("warn", warning);

    expect(consoleWarn).toHaveBeenCalledTimes(1);
  });

  it("should log a message", () => {
    const message = "Test message";
    const consoleInfo = jest
      .spyOn(console, "info")
      .mockImplementation(() => undefined);

    log("info", message);

    expect(consoleInfo).toHaveBeenCalledTimes(1);
  });

  it("should log a number", () => {
    const number = 42;
    const consoleDebug = jest
      .spyOn(console, "debug")
      .mockImplementation(() => undefined);

    log("debug", number);

    expect(consoleDebug).toHaveBeenCalledTimes(1);
  });
});
