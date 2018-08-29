export const updateTeamScoreReducer = state => {
  const newState = Object.assign({}, state);
  newState.teams[newState.currentBattingTeam].runs +=
    newState.currentSelectedScore.value + newState.currentSelectedExtra.value;
  return newState;
};
