import each from "jest-each";
import { isEndOfOver } from "../helpers/overhelpers";

each([
  [[], false],
  [[null, null, null, null, null], false],
  [[null, null, null, null, null, null], true],
  [[null, null, null, null, null, "W"], false],
  [[null, null, null, null, null, "N"], false],
  [[null, null, null, null, null, "B"], true],
  [[null, null, null, null, null, "Lb"], true],
  [[null, null, null, null, null, "W", "N"], false],
  [[null, null, null, null, null, "W", "N", null], true]
]).test(
  "should indicate end of over",
  (extrasInCurrentOver, expectedResult) => {
    const currentOver = extrasInCurrentOver.map(extras => ({ extras: extras }));
    expect(isEndOfOver(currentOver)).toBe(expectedResult);
  }
);
