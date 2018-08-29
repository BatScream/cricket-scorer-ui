import { batsmanStrikeChangeReducer } from "./strikeChangeReducer";

test("ShouldNotRotateStrikeWhenTheCurrentRunsScoredIs_0", () => {
  expect(strikeChangeForRuns(0)).toBe(false);
});

test("ShouldRotateStrikeWhenTheCurrentRunsScoredIs_1", () => {
  expect(strikeChangeForRuns(1)).toBe(true);
});

test("ShouldNotRotateStrikeWhenTheCurrentRunsScoredIs_2", () => {
  expect(strikeChangeForRuns(2)).toBe(false);
});

test("ShouldRotateStrikeWhenTheCurrentRunsScoredIs_3", () => {
  expect(strikeChangeForRuns(3)).toBe(true);
});

test("ShouldNotRotateStrikeWhenTheCurrentRunsScoredIs_4", () => {
  expect(strikeChangeForRuns(4)).toBe(false);
});

test("ShouldRotateStrikeWhenTheCurrentRunsScoredIs_5", () => {
  expect(strikeChangeForRuns(5)).toBe(true);
});

test("ShouldNotRotateStrikeWhenTheCurrentRunsScoredIs_6", () => {
  expect(strikeChangeForRuns(6)).toBe(false);
});

const strikeChangeForRuns = runs => {
  return !!batsmanStrikeChangeReducer(getObjectForStrikerXAndScoreY(runs))
    .currentBatsmen.onStrike;
};

const getObjectForStrikerXAndScoreY = runs => ({
  currentBatsmen: {
    players: [1, 2],
    onStrike: 0
  },
  currentSelectedScore: { label: runs, value: runs }
});
