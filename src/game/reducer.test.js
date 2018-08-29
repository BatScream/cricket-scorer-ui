import reducer from "./reducer";
import { gameState } from "./state";
const expectedState = Object.assign(gameState)

test("should return initial start when reducer is called for the first time", () => {
  expect(gameState).toEqual(reducer(undefined, { type: "@@INIT" }));
});

test("testing reducer for intial state and empty action", () => {
  expect(reducer(undefined, {})).toEqual(gameState);
});

test("testing reducer for action SET_CURRENT_SCORE", () => {
  const SetCurrentScoreAction = {
    type: "SET_CURRENT_SCORE",
    value: 4
  };
  const mockState = { currentSelectedScore: 4 };
  expect(reducer({}, SetCurrentScoreAction)).toEqual(mockState);
});
test("testing reducer for action SET_CURRENT_SCORE", () => {
  const SetCurrentScoreAction = {
    type: "SET_EXTRAS",
    value: 4
  };
  const mockState = { currentSelectedExtra: 4 };
  expect(reducer({}, SetCurrentScoreAction)).toEqual(mockState);
});
