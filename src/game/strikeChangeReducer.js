export const batsmanStrikeChangeReducer = state => {
  const batsmanOnStrike = state.currentBatsmen.onStrike;
  if (batsmanOnStrike !== 0 && batsmanOnStrike !== 1) {
    console.log(
      "Silently Failing and not updating the state because the striker index is out of range",
      batsmanOnStrike
    );
    return state;
  }
  console.log("Batsman currently on strike:" + batsmanOnStrike);
  const os =
    (state.currentSelectedScore.value + state.currentSelectedExtra.value) %
    2 ===
    0
      ? batsmanOnStrike
      : +!batsmanOnStrike;
  console.log("Batsman on strike after run:" + os);
  return {
    ...state,
    currentBatsmen: { ...state.currentBatsmen, onStrike: os }
  };
};
