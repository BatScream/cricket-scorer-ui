export const currentScoreReducer = (state, action) => {
  return { ...state, currentSelectedScore: action.value };
};
