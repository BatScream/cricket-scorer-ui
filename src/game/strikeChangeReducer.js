export const batsmanStrikeChangeReducer = state => {
  
  const batsmanOnStrike = state.currentBatsmen.onStrike;
  
  if (batsmanOnStrike !== 0 && batsmanOnStrike !== 1) {
    console.log(
      "Silently Failing and not updating the state because the striker index is out of range",
      batsmanOnStrike
    );
    return state;
  }

  const isOddRunsScored = (state.currentSelectedScore.value + state.currentSelectedExtra.value) % 2 !== 0
  
  let isStrikeChanged = isOddRunsScored;

  if (isEndOfOver(state.currentOver)) {
    isStrikeChanged = !isStrikeChanged;
  }

  const nextOnStrike = isStrikeChanged ? +!batsmanOnStrike : batsmanOnStrike;

  return {
    ...state,
    currentBatsmen: { ...state.currentBatsmen, onStrike: nextOnStrike }
  };
};

export const isEndOfOver = (currentOver) => {

  const numberOfLegitimateBalls =
      currentOver
          .filter(ball => isLegitimateBall(ball))
          .length;
  
  return numberOfLegitimateBalls === 6;
}

const isLegitimateBall = (ball) => !ball.extras || ball.extras === 'B' || ball.extras === 'Lb'
