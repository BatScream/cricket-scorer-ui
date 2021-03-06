import each from 'jest-each'
import {
  updateExtraForBowlerReducer
} from './updateExtraForBowlerReducer';

test('should return updated extras given by the bowler ', () => {

  const initialState = {
    currentBowler: {
      team: 'team2',
      player: 3
  },
  currentBatsmen: {
    team:
      "team1" /*instead of using team id, we can check for which team is batting currently*/,
    players: [1, 2],
    onStrike: 0
  },
    teams: {
      team1: {
        name: "Team 1",
        runs: 10,
        },
      team2: {
        name: "Team 2",
        runs: 150,
        wickets: 5,
        oversPlayed: 20,
        batting: false,
        players: {
          3: { 
            bowlingStats:{
              extras :0
            }
          }
        }
      }
      },
    currentSelectedScore: { label: 0, value: 0 },
    currentSelectedExtra: { label: 'W', value: 0 },
    currentOver: []
  
  };

  const bowlerID = initialState.currentBowler.player;
  const bowlerTeam= initialState.currentBowler.team;

  expect(updateExtraForBowlerReducer(initialState).teams[bowlerTeam].players[bowlerID].bowlingStats.extras).toBe(1);

})

each([
  ['W', 0, 1],
   ['W', 1, 2],
   ['B', 0, 0],
   ['N', 1, 2],
  ['Lb', 2, 2],
  [null, 0, 0]

])
.test(
  'should update current bowlers extras',
  (currentBallsExtra, currentExtras, expectedUpdatedExtras) => {


    const initialState = {
      currentSelectedExtra: { label: currentBallsExtra, value: 0 },
      currentBowler: {
          team: "team2",
          player: 3
      },
      currentBatsmen: {
        team:
          "team1" /*instead of using team id, we can check for which team is batting currently*/,
        players: [1, 2],
        onStrike: 0
      },
      teams: {
        team1: {
          name: "Team 1",
          runs: 10,
          },
        team2: {
          name: "Team 2",
          runs: 150,
          wickets: 5,
          oversPlayed: 20,
          batting: false,
          players: {
            3: { 
              bowlingStats:{
                extras :currentExtras
              }
            }
          }
        }
        },
    }
  
    const bowlerID = initialState.currentBowler.player;
    const bowlerTeam= initialState.currentBowler.team;
    expect(updateExtraForBowlerReducer(initialState).teams[bowlerTeam].players[bowlerID].bowlingStats.extras).toBe(expectedUpdatedExtras);
  })