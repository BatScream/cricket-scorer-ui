const updateBatsmanStateWithCurrentScore = state => {
  let copiedState = Object.assign({}, state);
  const onStrike = copiedState.currentBatsmen.onStrike;
  const currentBatsmanID = copiedState.currentBatsmen.players[onStrike];
  const currentRunScored = copiedState.currentSelectedScore.value || 0;
  const currentPlayerBattingStats = copiedState.battingStats[currentBatsmanID];
  let sixes = currentPlayerBattingStats.sixes;
  let fours = currentPlayerBattingStats.fours;
  let balls = currentPlayerBattingStats.balls;
  switch (currentRunScored) {
    case 6:
      sixes = sixes + 1;
      break;
    case 4:
      fours = fours + 1;
      break;
    default:
      break;
  }
  const runs = currentPlayerBattingStats.runs + currentRunScored;
  currentPlayerBattingStats.sixes = sixes;
  currentPlayerBattingStats.fours = fours;
  currentPlayerBattingStats.runs = runs;
  currentPlayerBattingStats.balls = balls + 1;
  return copiedState;
};

export { updateBatsmanStateWithCurrentScore };
