export const currentOverReducer = (state, action) => {
  const newState = Object.assign({}, state);
  newState.currentOver.push(action.updateOver);
  return newState;
};
