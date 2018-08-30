export const handleFallOfWicket = state => {
  let copiedState = Object.assign({}, state);
  console.log("invoked", copiedState.isOut);
  const batsmanWhoIsOut =
    copiedState.currentBatsmen.players[copiedState.currentBatsmen.onStrike];

  copiedState.isOut = true;
  copiedState.playersOut.push(parseInt(batsmanWhoIsOut));

  copiedState.battingStats[batsmanWhoIsOut]["isOut"] = true;
  return copiedState;
};

export const changeBatsmanIfWicketHasFallen = (state, payload) => {
  let copiedState = Object.assign({}, state);
  if (copiedState.isOut) {
    copiedState.currentBatsmen.players[copiedState.currentBatsmen.onStrike] =
      payload.nextBatsman;
    copiedState.teams[copiedState.currentBattingTeam].wickets++;
  }
  return copiedState;
};
