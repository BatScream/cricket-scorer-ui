import { batsmanStrikeChangeReducer } from "./strikeChangeReducer";

test("ShouldNotRotateStrikeWhenTheCurrentRunsScoredIs_0", () => {
  expect(nextBatsmanOnStrikeForCurrentStrikerAndRuns(0, 0)).toBe(0);
});

test("ShouldRotateStrikeWhenTheCurrentRunsScoredIs_1", () => {
  expect(nextBatsmanOnStrikeForCurrentStrikerAndRuns(0, 1)).toBe(1);
});

test("ShouldNotRotateStrikeWhenTheCurrentRunsScoredIs_2", () => {
  expect(nextBatsmanOnStrikeForCurrentStrikerAndRuns(0, 2)).toBe(0);
});

test("ShouldRotateStrikeWhenTheCurrentRunsScoredIs_3", () => {
  expect(nextBatsmanOnStrikeForCurrentStrikerAndRuns(1, 3)).toBe(0);
});

test("ShouldNotRotateStrikeWhenTheCurrentRunsScoredIs_4", () => {
  expect(nextBatsmanOnStrikeForCurrentStrikerAndRuns(1, 4)).toBe(1);
});

test("ShouldRotateStrikeWhenTheCurrentRunsScoredIs_5", () => {
  expect(nextBatsmanOnStrikeForCurrentStrikerAndRuns(1, 5)).toBe(0);
});

test("ShouldNotRotateStrikeWhenTheCurrentRunsScoredIs_6", () => {
  expect(nextBatsmanOnStrikeForCurrentStrikerAndRuns(1, 6)).toBe(1);
});

test("ShouldNotUpdateTheStateWhenTheInputStrikerIndexIsNegative", () => {
  expect(getObjectForStrikerXAndScoreY(-3, 5)).toEqual(
    batsmanStrikeChangeReducer(getObjectForStrikerXAndScoreY(-3, 5))
  );
});

const nextBatsmanOnStrikeForCurrentStrikerAndRuns = (x, y) => {
  return batsmanStrikeChangeReducer(getObjectForStrikerXAndScoreY(x, y))
    .currentBatsmen.onStrike;
};

const getObjectForStrikerXAndScoreY = (x, y) => ({
  currentBatsmen: {
    players: [1, 2],
    onStrike: x
  },
  currentSelectedScore: { label: y, value: y }
});
