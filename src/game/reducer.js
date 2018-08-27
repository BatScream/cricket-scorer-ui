import { SET_CURRENT_SCORE, SET_EXTRAS } from "./actions";

const initialState = {};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_SCORE:
      return { ...state, currentSelectedScore: action.value };
    case SET_EXTRAS:
      //TODO this need to be modified for the state
      return { ...state, currentSelectedExtra: action.value };

    default:
      return state;
  }
};

export default reducer;
