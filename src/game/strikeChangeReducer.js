export const batsmanStrikeChangeReducer = state => {
  console.log("Batsman currently on strike:" + state.currentBatsmen.onStrike);
  const os =
    state.currentSelectedScore.value % 2 === 0
      ? state.currentBatsmen.onStrike
      : +!state.currentBatsmen.onStrike;
  console.log("Batsman on strike after run:" + os);
  return {
    ...state,
    currentBatsmen: { ...state.currentBatsmen, onStrike: os }
  };
};
