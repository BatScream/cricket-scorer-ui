export const gameState = {
  maxOvers: 20,
  currentBattingTeam: "team1",
  currentBatsmen: {
    team:
      "team1" /*instead of using team id, we can check for which team is batting currently*/,
    players: [1, 2],
    onStrike: 0
  },
  teams: {
    team1: {
      name: "Team 1",
      runs: 0,
      wickets: 0,
      oversPlayed: 0,
      players: {
        1: {
          name: "Sachin",
          battingStats: {
            runs: 0,
            balls: 0,
            fours: 0,
            sixes: 0,
            strikeRate: 0
          },
          bowlingStats: {
            overs: 0,
            maiden: 0,
            run: 0,
            wicket: 0
          }
        },
        2: {
          name: "Sehwag",
          battingStats: {
            runs: 0,
            balls: 0,
            fours: 0,
            sixes: 0,
            strikeRate: 0
          },
          bowlingStats: {
            overs: 0,
            maiden: 0,
            run: 0,
            wicket: 0
          }
        }
      }
    },
    team2: {
      name: "Team 2",
      runs: 0,
      wickets: 0,
      oversPlayed: 0
    }
  },
  currentOver: [{ id: 1, runs: 3, extras: "B", wicket: "NWK" }],
  currentSelectedScore: { label: 0, value: 0 },
  currentSelectedExtra: { label: 0, value: 0 }
};
