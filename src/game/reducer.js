import { SET_CURRENT_SCORE, SET_EXTRAS, NEXT_BALL } from "./actions";
import { gameState } from "./state";
import { batsmanStrikeChangeReducer } from "./strikeChangeReducer";
import { currentOverReducer } from "./currentOverReducer";
import { currentScoreReducer } from "./currentScoreReducer";
import { extrasReducer } from "./extrasReducer";
import { updateTeamScoreReducer } from "./updateTeamScoreReducer";
import { updateBatsmanStateWithCurrentScore } from "./currentBatsmanScoreUpdateReducer";
import { updateExtraForBowlerReducer } from "./updateExtraForBowlerReducer";
import { resetCurrentScoreAndExtras } from "../helpers/stateLifeCycleHelpers";
import { updateTeamOversPlayed } from "./updateTeamOversPlayed";

const reducer = (state = gameState, action) => {
  switch (action.type) {
    case SET_CURRENT_SCORE:
      return currentScoreReducer(state, action);
    case SET_EXTRAS:
      return extrasReducer(state, action);
    case NEXT_BALL:
      return nextActionReducer(state);
    default:
      return state;
  }
};
const nextActionReducer = state => {
  let copiedState = Object.assign({}, state);
  copiedState = currentOverReducer(copiedState);
  copiedState = updateExtraForBowlerReducer(copiedState);
  copiedState = updateBatsmanStateWithCurrentScore(copiedState);
  copiedState = batsmanStrikeChangeReducer(copiedState);
  copiedState = updateTeamScoreReducer(copiedState);
  copiedState = updateTeamOversPlayed(copiedState);
  copiedState = resetStateAfterNextAction(copiedState);
  return copiedState;
};

const resetStateAfterNextAction = state => {
  return resetCurrentScoreAndExtras(state);
};

export default reducer;
