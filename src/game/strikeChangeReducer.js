export const batsmanStrikeChangeReducer = state => {
  
  const batsmanOnStrike = state.currentBatsmen.onStrike;
  if (batsmanOnStrike !== 0 && batsmanOnStrike !== 1) {
    console.log(
      "Silently Failing and not updating the state because the striker index is out of range",
      batsmanOnStrike
    );
    return state;
  }

  const strikeChange = (state.currentSelectedScore.value + state.currentSelectedExtra.value) % 2 !== 0
  const nextOnStrike = strikeChange ? +!batsmanOnStrike : batsmanOnStrike;
  
  return {
    ...state,
    currentBatsmen: { ...state.currentBatsmen, onStrike: nextOnStrike }
  };
};
