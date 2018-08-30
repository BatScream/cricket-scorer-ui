import { numberOfLegitimateBalls } from "../helpers/overHelpers";
export const currentOverReducer = state => {
  const newState = Object.assign({}, state);

  newState.currentOver.push({
    runs: state.currentSelectedScore.value || 0,
    extras: state.currentSelectedExtra.label,
    wicket: state.isOut
  });
  if (numberOfLegitimateBalls(newState.currentOver) > 6) {
    let arr = [];
    arr.push(newState.currentOver[newState.currentOver.length - 1]);
    newState.currentOver = arr;
  }
  return newState;
};
