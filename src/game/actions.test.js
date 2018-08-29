import { createMockStore, mockAxios } from "../testHelpers/mockHelpers";
import { fetchGameDetails, GAME_DETAILS_FETCHED } from './actions';
import {reducer} from "./reducer"
import each from 'jest-each'

const mock = mockAxios();
let store;
const apiData = {
  team1: 'Team 1',
  team2: 'Team 2',
};


describe("game/actions", () => {
  beforeEach(() => {
    store = createMockStore({})
  });

  it('should dispatch gameDetailsFetched', async () => {
    mock
      .onGet('http://localhost:9090/game')
      .reply(200, apiData);

    store.dispatch(fetchGameDetails()).then(() => {
      expect(store.getActions()[0]).toEqual({
        type: GAME_DETAILS_FETCHED,
        payload: {
          gameDetails: apiData
        }
      });
    });
  });
})

test('should return current over for initial phase', () => {
  const result = {
    type: 'UPDATE_CURRENT_OVER_FOR_BALL',
    updateOver: { runs: 3, extras: 'B', wicket: 'NWk' }
  }

  const gameinitialState = {
    currentOver: []
  };
  expect(reducer({currentOver:[]},result)).toEqual(gameinitialState);

});


test('should return updated current over ', () => {
  const previousBall = { runs: 4, extras: 'B', wicket: 'NWk' }
  const newBall = { runs: 3, extras: 'B', wicket: 'NWk' }

  const stateUpated = {
    currentOver: [previousBall]
  };

  const action = {
    type: 'ACTION_UPDATE_CURRENT_OVER_FOR_BALL',
    updateOver: newBall
  }

  const expectedState = reducer(stateUpated, action)

  expect(expectedState.currentOver).toEqual([previousBall, newBall]);
}
);



test('should return updated extras given by the bowler ', () => {

  const initialState = {
    currentBallsExtra : 'W',
    currentBowler: {
        team: "team2",
        player: 3
    },
    teams: {
      team2: {
          players: {
            3: { 
              name: "Virat Kohli" ,
              bowlingStats:{
                extras : 0
              }
            }
          }
        }
      }
  }

  const action = {
    type: 'ACTION_UPDATE_EXTRA_FOR_CURRENT_BOWLER',
  }
  const bowlerID = initialState.currentBowler.player;
  const bowlerTeam= initialState.currentBowler.team;
  expect(reducer(initialState,action).teams[bowlerTeam].players[bowlerID].bowlingStats.extras).toBe(1);

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
      currentBallsExtra : currentBallsExtra,
      currentBowler: {
          team: "team2",
          player: 3
      },
      teams: {
        team2: {
            players: {
              3: { 
                name: "Virat Kohli" ,
                bowlingStats:{
                  extras : currentExtras
                }
              }
            }
          }
        }
    }
  
    const action = {
      type: 'ACTION_UPDATE_EXTRA_FOR_CURRENT_BOWLER',
    }
    const bowlerID = initialState.currentBowler.player;
    const bowlerTeam= initialState.currentBowler.team;
    expect(reducer(initialState,action).teams[bowlerTeam].players[bowlerID].bowlingStats.extras).toBe(expectedUpdatedExtras);
  }
)

