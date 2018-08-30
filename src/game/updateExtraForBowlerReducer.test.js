import each from 'jest-each'
import {
  updateExtraForBowlerReducer
} from './updateExtraForBowlerReducer';

test('should return updated extras given by the bowler ', () => {

  const initialState = {
    currentBallsExtra: 'W',
    currentBowler: {
      team: "team2",
      player: 3
    },
    teams: {
      team2: {
        players: {
          3: {
            name: "Virat Kohli",
            bowlingStats: {
              extras: 0
            }
          }
        }
      }
    }
  }

  const bowlerID = initialState.currentBowler.player;
  const bowlerTeam = initialState.currentBowler.team;
  expect(updateExtraForBowlerReducer(initialState).teams[bowlerTeam].players[bowlerID].bowlingStats.extras).toBe(1);

})

each([
    ['W', 0, 1],
    ['W', 1, 2],
    ['B', 0, 0],
    ['N', 1, 2],
    ['Lb', 1, 2],
    [null, 0, 0],

  ])
  .test(
    'should update current bowlers extras',
    (currentBallsExtra, currentExtras, expectedUpdatedExtras) => {


      const initialState = {
        currentBallsExtra: currentBallsExtra,
        currentBowler: {
          team: "team2",
          player: 3
        },
        teams: {
          team2: {
            players: {
              3: {
                name: "Virat Kohli",
                bowlingStats: {
                  extras: currentExtras
                }
              }
            }
          }
        }
      }

      const bowlerID = initialState.currentBowler.player;
      const bowlerTeam = initialState.currentBowler.team;
      expect(updateExtraForBowlerReducer(initialState).teams[bowlerTeam].players[bowlerID].bowlingStats.extras).toBe(expectedUpdatedExtras);
    }
  )