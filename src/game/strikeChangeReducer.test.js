import { batsmanStrikeChangeReducer } from "./strikeChangeReducer";
import each from 'jest-each';

each([
  [0, [], false],
  [1, [], true],
  [2, [], false],
  [3, [], true],
  [4, [], false],
  [5, [], true],
  [6, [], false],

  [0, [null], false],
  [3, [null], true],
  [0, [null, null, null, null, null, null], true],
  [1, [null, null, null, null, null, null], false],
  [0, [null, null, null, null, null, 'W'], false],
  [5, [null, null, null, null, null, 'N'], true],
  [0, [null, null, null, null, null, 'B'], true],
  [3, [null, null, null, null, null, 'Lb'], false],
  [0, [null, null, null, null, null, 'W', null], true],
  [3, [null, null, null, null, null, 'W', null], false],
])
.test(
  'change batsman at strikers end based on runs scored and end of over', 
  (runs, extrasInCurrentOver, shouldStrikeChange) => {
    
    const actualResult = strikeChangeForRuns(runs, extrasInCurrentOver);
    expect(actualResult).toBe(shouldStrikeChange);
  }
);

const strikeChangeForRuns = (runs, extrasInCurrentOver) => {
  return !!batsmanStrikeChangeReducer(getObjectForStrikerXAndScoreY(runs, extrasInCurrentOver))
    .currentBatsmen.onStrike;
};

const getObjectForStrikerXAndScoreY = (runs, extrasInCurrentOver) => ({
  currentBatsmen: {
    players: [1, 2],
    onStrike: 0
  },
  currentSelectedScore: { label: runs, value: runs },
  currentSelectedExtra: { label: 0, value: 0 },
  currentOver: createCurrentOver(extrasInCurrentOver)
});

const createCurrentOver = (extrasInCurrentOver) => extrasInCurrentOver.map(extras => ({ extras: extras }))
