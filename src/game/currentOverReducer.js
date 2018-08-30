export const currentOverReducer = state => {
  const newState = Object.assign({}, state);

  newState.currentOver.push({
    runs: state.currentSelectedScore.value || 0,
    extras: state.currentSelectedExtra.label,
    wicket: state.isOut
  });
  if (newState.currentOver.length > 6) {
    let arr = [];
    arr.push(newState.currentOver[newState.currentOver.length - 1]);
    newState.currentOver = arr;
  }
  return newState;
};
