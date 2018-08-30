export const updateExtraForBowlerReducer = (state) => {
    
    let bowlerTeam = state.currentBowler.team;
    let bowlerid= state.currentBowler.player;
    let currentExtras = state.teams[bowlerTeam].players[bowlerid].bowlingStats.extras;
    if(state.currentBallsExtra !== 'B'){
        if(state.currentBallsExtra !== null)
        {
        currentExtras +=  1;
        state.teams[bowlerTeam].players[bowlerid].bowlingStats.extras=currentExtras;
      }
    }
  return { ...state, state: state.teams[bowlerTeam].players[bowlerid].bowlingStats.extras };
}