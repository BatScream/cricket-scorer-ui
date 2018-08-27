import { SET_CURRENT_SCORE } from "./actions";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_SCORE:
      return { ...state, currentSelectedScore: action.value };
    default:
      return state;
  }
};

export default reducer;
