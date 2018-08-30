export const updateTeamScoreReducer = state => {
  const newState = Object.assign({}, state);
  newState.teams[newState.currentBattingTeam].runs +=
    newState.currentSelectedScore.value ||
    0 + newState.currentSelectedExtra.value ||
    0;
  return newState;
};
