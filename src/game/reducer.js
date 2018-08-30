import {
  SET_CURRENT_SCORE,
  SET_EXTRAS,
  ACTION_UPDATE_CURRENT_OVER_FOR_BALL,
  NEXT_BALL,
  ACTION_UPDATE_EXTRA_FOR_CURRENT_BOWLER
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
    case ACTION_UPDATE_EXTRA_FOR_CURRENT_BOWLER :
        let bowlerTeam = state.currentBowler.team;
        let batsmanTeam = state.currentBatsmen.team;
        let bowlerid= state.currentBowler.player;
        let currentExtras = state.teams[bowlerTeam].players[bowlerid].bowlingStats.extras;
        
      
        console.log("Before ::::"+state.currentSelectedExtra.label);

        if(state.currentSelectedExtra.label!== 'B' && state.currentSelectedExtra.label !== 'Lb'){
          if(state.currentSelectedExtra.label !== null)
          {
            console.log("currentExtraClicked ::::"+state.currentSelectedExtra.label);
            console.log("state ::::"+state.currentSelectedExtra);

          currentExtras +=  1;
          state.teams[bowlerTeam].players[bowlerid].bowlingStats.extras=currentExtras;
          state.teams[batsmanTeam].runs += 1;
        }
      }
      console.log("After ::::"+state.currentSelectedExtra.label);

        console.log("Extras ::::"+state.teams[bowlerTeam].players[bowlerid].bowlingStats.extras);
        console.log("TotalScore ::::"+state.teams[batsmanTeam].runs);

        return { ...state, state: state.teams[bowlerTeam].players[bowlerid].bowlingStats.extras };
    default:
      return state;
  }
};
export default reducer;
