import {
  SET_CURRENT_SCORE,
  SET_EXTRAS,
  ACTION_UPDATE_CURRENT_OVER_FOR_BALL,
  NEXT_BALL
} from "./actions";
import { gameState } from "./state";
import { batsmanStrikeChangeReducer } from "./strikeChangeReducer";
import { currentOverReducer } from "./currentOverReducer";
import { currentScoreReducer } from "./currentScoreReducer";
import { extrasReducer } from "./extrasReducer";
import { updateTeamScoreReducer } from "./updateTeamScoreReducer";

const reducer = (state = gameState, action) => {
  switch (action.type) {
    case SET_CURRENT_SCORE:
      return currentScoreReducer(state, action);
    case SET_EXTRAS:
      return extrasReducer(state, action);
    case ACTION_UPDATE_CURRENT_OVER_FOR_BALL:
      return currentOverReducer(state, action);
    case NEXT_BALL:
      const st = updateTeamScoreReducer(state);
      return batsmanStrikeChangeReducer(st);

    default:
      return state;
  }
};

export default reducer;
