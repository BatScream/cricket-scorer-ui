import { createMockStore, mockAxios } from "../testHelpers/mockHelpers";
import { fetchGameDetails, GAME_DETAILS_FETCHED } from './actions';
import reducer from "./reducer"
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
    currentOver: [{ runs: 3, extras: 'B', wicket: 'NWk' }]
  };
  expect(reducer({currentOver:[]},result)).toEqual(gameinitialState);

});


test('should return updated current over ', () => {

  const previousBall = { runs: 4, extras: 'B', wicket: 'NWk' }
  const currentState = { currentOver: [previousBall] }

  const newBall = { runs: 3, extras: 'B', wicket: 'NWk' }
  
  const action = {
    type: 'UPDATE_CURRENT_OVER_FOR_BALL',
    updateOver: newBall
  }
  const expectedState = reducer(currentState, action)

  expect([previousBall, newBall]).toEqual(expectedState.currentOver);
}
);
