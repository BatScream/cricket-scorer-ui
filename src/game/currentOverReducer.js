export const currentOverReducer = (state) => {
  const newState = Object.assign({}, state);
  newState.currentOver.push({
    "runs": state.currentSelectedScore.value,
    "extras": state.currentSelectedExtra.label,
    "wicket": state.isOut ? "Wk" : 'NWk'
  });
  return newState;
};