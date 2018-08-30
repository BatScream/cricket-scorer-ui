export const handleFallOfWicket = state => {
  let copiedState = Object.assign({}, state);
  console.log("invoked", copiedState.isOut);
  if (copiedState.isOut) return copiedState;
  const batsmanWhoIsOut =
    copiedState.currentBatsmen.players[copiedState.currentBatsmen.onStrike];
  copiedState.isOut = true;
  copiedState.playersOut.push(Number(batsmanWhoIsOut));
  copiedState.teams[copiedState.currentBattingTeam].wickets++;
  copiedState.battingStats[batsmanWhoIsOut]["isOut"] = true;
  return copiedState;
};

export const changeBatsmanIfWicketHasFallen = (state, payload) => {
  let copiedState = Object.assign({}, state);
  if (copiedState.isOut) {
    copiedState.currentBatsmen.players[copiedState.currentBatsmen.onStrike] =
      payload.nextBatsman;
  }
  return copiedState;
};
