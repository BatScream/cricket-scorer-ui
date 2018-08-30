export const resetCurrentScoreAndExtras = state => {
  let copiedState = Object.assign({}, state);
  copiedState.currentSelectedScore = {};
  copiedState.currentSelectedExtra = {
    label: null,
    value: 0
  };
  copiedState.isOut = false;
  return copiedState;
};
