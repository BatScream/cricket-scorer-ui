import { updateTeamOversPlayed } from "./updateTeamOversPlayed";
import each from "jest-each";

each([
  [[], 0, 0],
  [[], 1.1, 1.1],
  [[{ runs: 1 }], 0, 0.1],
  [[{ runs: 1 }, { runs: 1 }], 0.1, 0.2],
  [[{ runs: 1 }, { runs: 0, extras: "W" }], 0.1, 0.1],
  [[{ runs: 1 }, { runs: 0, extras: "W" }, { runs: 0, extras: "N" }], 0.1, 0.1],
  [
    [
      { runs: 1 },
      { runs: 0, extras: "W" },
      { runs: 0, extras: "N" },
      { runs: 1 }
    ],
    0.1,
    0.2
  ],
  [
    [
      { runs: 1 },
      { runs: 0, extras: "W" },
      { runs: 0, extras: null, wicket: true }
    ],
    0.1,
    0.2
  ],
  [[{ runs: 1 }, { runs: 2 }, { runs: 3 }, { runs: 4 }, { runs: 5 }], 0.4, 0.5],
  [
    [
      { runs: 1 },
      { runs: 1 },
      { runs: 1 },
      { runs: 1 },
      { runs: 1 },
      { runs: 1 }
    ],
    2.5,
    3.0
  ],
  [[{ runs: 1 }], 3.0, 3.1]
]).test(
  "Should Return the expected over",
  (ballArr, oversPlayed, expectedOver) => {
    const input = buildState(ballArr, oversPlayed);
    expect(totalOversPlayed(input)).toBe(expectedOver);
  }
);

const buildState = (ballArr, oversPlayed) => ({
  currentOver: ballArr,
  currentBattingTeam: "team1",
  teams: {
    team1: {
      oversPlayed
    }
  }
});

const totalOversPlayed = inputState => {
  return updateTeamOversPlayed(inputState).teams.team1.oversPlayed;
};
