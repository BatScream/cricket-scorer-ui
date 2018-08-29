export const gameState = {
  maxOvers: 20,
  currentBallsRun : 0,
  currentBallsExtra : 'B',
  currentBallsWicket : 'NWK',
  currentBowler: {
    team: "team2",
    player: 3
},
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
            wicket: 0,
            extras: 0
          }
        },
        2: {
          name: "Shewag",
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
            wicket: 0,
            extras: 0
          },
          3: {
            name: "Virat Kohli",
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
              wicket: 0,
              extras: 0
            }
        }
      }
    }},
    team2: {
      name: "Team 2",
      runs: 150,
      wickets: 5,
      oversPlayed: 20,
      batting: false,
      players: {
        1: { 
          name: "Brett Lee" ,
          battingStats: {
            runs : 0,
            balls:0,
            fours:0,
            sixes:0,
            strikeRate:0
          },
          bowlingStats:{
            overs:0,
            maiden:0,
            run:0,
            wicket:0,
            extras :0
          }
        },
        2: { 
          name: "Brett Lee" ,
          battingStats: {
            runs : 0,
            balls:0,
            fours:0,
            sixes:0,
            strikeRate:0
          },
          bowlingStats:{
            overs:0,
            maiden:0,
            run:0,
            wicket:0,
            extras :0

          }
        },
        3: { 
          name: "Virat Kohli" ,
          battingStats: {
            runs : 0,
            balls:0,
            fours:0,
            sixes:0,
            strikeRate:0
          },
          bowlingStats:{
            overs:0,
            maiden:0,
            run:0,
            wicket:0,
            extras :0
          }
        }
      }
    }
    },
  currentSelectedScore: { label: 0, value: 0 },
  currentSelectedExtra: { label: 0, value: 0 },
  // currentOver: [{ id: 1, runs: 3, extras: "B", wicket: "NWK" }],
  currentOver: []

};





