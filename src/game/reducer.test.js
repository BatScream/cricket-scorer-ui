import reducer from './reducer'
import SET_CURRENT_SCORE from './actions.js'

const expectedState = {
    maxOvers: 20,
    currentBatsmen: {
      team:
        "team1" /*instead of using team id, we can check for which team is batting currently*/,
      players: [1, 2],
      onStrike: 1
    },
    teams: {
      team1: {
        name: "Team 1",
        runs: 120,
        wickets: 7,
        oversPlayed: 15.4,
        batting: true,
         players: {
        1: {
          name: 'Sachin',
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
          name: 'Shewag',
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
        runs: 150,
        wickets: 5,
        oversPlayed: 20,
        batting: false
      },
    
    
  },
  currentOver: [
    
  ],
  currentSelectedScore:{
  
  },
  currentSelectedExtra:{
    
  }
  }



/*
 

*/

test('should return initial start when reducer is called for the first time', () => {
    expect(expectedState).toEqual(reducer(undefined, { type: '@@INIT' }));
})

test("testing reducer for intial state and empty action", () => {
    expect(reducer(undefined, {})).toEqual(expectedState);

})

test("testing reducer for action SET_CURRENT_SCORE", () => {
    const SetCurrentScoreAction = {
        type: "SET_CURRENT_SCORE",
        value: 4
    }
    const mockState = { currentSelectedScore: 4 }
    expect(reducer({}, SetCurrentScoreAction)).toEqual(mockState);

})
test("testing reducer for action SET_CURRENT_SCORE", () => {
    const SetCurrentScoreAction = {
        type: "SET_EXTRAS",
        value: 4
    }
    const mockState = { currentSelectedExtra: 4 }
    expect(reducer({}, SetCurrentScoreAction)).toEqual(mockState);

})
