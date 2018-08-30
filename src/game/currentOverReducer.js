import { isEndOfOver } from "../helpers/overhelpers";
export const currentOverReducer = state => {
  const newState = Object.assign({}, state);

  if (isEndOfOver(newState.currentOver)) newState.currentOver.length = 0;

  newState.currentOver.push({
    runs: state.currentSelectedScore.value || 0,
    extras: state.currentSelectedExtra.label,
    wicket: state.isOut
  });
  return newState;
};
