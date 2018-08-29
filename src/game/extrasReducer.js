export const extrasReducer = (state, action) => {
  return { ...state, currentSelectedExtra: action.value };
};
