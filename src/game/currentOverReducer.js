export const currentOverReducer = state => {
  const newState = Object.assign({}, state);
  newState.currentOver.push({
    runs: state.currentSelectedScore.value || 0,
    extras: state.currentSelectedExtra.label,
    wicket: state.isOut
  });
  return newState;
};
