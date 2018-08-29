import { batsmanStrikeChangeReducer } from "./strikeChangeReducer";
import each from 'jest-each';

each([
  [0, false],
  [1, true],
  [2, false],
  [3, true],
  [4, false],
  [5, true],
  [6, false]
])
.test(
  'change batsman at strikers end based on runs scored', 
  (runs, shouldStrikeChange) => {
    expect(strikeChangeForRuns(runs)).toBe(shouldStrikeChange);
  }
);

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
