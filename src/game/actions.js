import axios from "axios";
import config from "../config";

export const GAME_DETAILS_FETCHED = "GAME_DETAILS_FETCHED";
export const SET_CURRENT_SCORE = "SET_CURRENT_SCORE";
export const SET_EXTRAS = "SET_EXTRAS";
export const ACTION_UPDATE_CURRENT_OVER_FOR_BALL = 'UPDATE_CURRENT_OVER_FOR_BALL';


export const fetchGameDetails = () => async dispatch => {
  const response = await axios.get(config.apiUrl);
  dispatch({
    type: GAME_DETAILS_FETCHED,
    payload: {
      gameDetails: response.data
    }
  });
};

//action
export const updateOverWithBall = (updateOverWithBall) =>({
  type : ACTION_UPDATE_CURRENT_OVER_FOR_BALL,
  updateOver : updateOverWithBall

});
