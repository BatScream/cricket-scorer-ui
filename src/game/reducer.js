import {
  SET_CURRENT_SCORE,
  SET_EXTRAS,
  ACTION_UPDATE_CURRENT_OVER_FOR_BALL,
  NEXT_BALL
} from "./actions";

const initialState = {
  maxOvers: 20,
  currentBatsmen: {
    team:
      "team1" /*instead of using team id, we can check for which team is batting currently*/,
    players: [1, 2],
    onStrike: 0
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
            wicket: 0
          }
        }
      }
    },
    team2: {
      name: "Team 2",
      runs: 0,
      wickets: 0,
      oversPlayed: 0,
      batting: false
    }
  },
  currentOver: [{ id: 1, runs: 3, extras: "B", wicket: "NWK" }],
  currentSelectedScore: {},
  currentSelectedExtra: {}
};

const batsmanStrikeChangeReducer = state => {
  console.log("Batsman currently on strike:" + state.currentBatsmen.onStrike);
  const os =
    state.currentSelectedScore % 2 === 0
      ? state.currentBatsmen.onStrike
      : +!state.currentBatsmen.onStrike;
  console.log("Batsman on strike after run:" + os);
  return {
    ...state,
    currentBatsmen: { ...state.currentBatsmen, onStrike: os }
  };
};

const currentScoreReducer = (state, action) => {
  return { ...state, currentSelectedScore: action.value };
};

const extrasReducer = (state, action) => {
  return { ...state, currentSelectedExtra: action.value };
};

const currentOverReducer = (state, action) => {
  const newState = Object.assign({}, state);
  newState.currentOver.push(action.updateOver);
  return newState;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_SCORE:
      return currentScoreReducer(state, action);
    case SET_EXTRAS:
      return extrasReducer(state, action);
    case ACTION_UPDATE_CURRENT_OVER_FOR_BALL:
      return currentOverReducer(state, action);
    case NEXT_BALL:
      return batsmanStrikeChangeReducer(state);

    default:
      return state;
  }
};

export default reducer;
