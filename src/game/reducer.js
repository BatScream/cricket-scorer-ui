import {
  SET_CURRENT_SCORE,
  SET_EXTRAS,
  ACTION_UPDATE_CURRENT_OVER_FOR_BALL,
  NEXT_BALL
} from "./actions";
import { gameState } from "./state";

const batsmanStrikeChangeReducer = state => {
  console.log("Batsman currently on strike:" + state.currentBatsmen.onStrike);
  const os =
    state.currentSelectedScore.value % 2 === 0
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

const reducer = (state = gameState, action) => {
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
