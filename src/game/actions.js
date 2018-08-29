import axios from "axios";
import config from "../config";

export const GAME_DETAILS_FETCHED = "GAME_DETAILS_FETCHED";

export const SET_CURRENT_SCORE = (data)=>({
  type: "SET_CURRENT_SCORE",
  data: data
})

export const SET_EXTRAS = "SET_EXTRAS";
export const ACTION_UPDATE_CURRENT_OVER_FOR_BALL =
  "UPDATE_CURRENT_OVER_FOR_BALL";
export const NEXT_BALL = "NEXT_BALL";

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
export const updateOverWithBall = updateOverWithBall => ({
  type: ACTION_UPDATE_CURRENT_OVER_FOR_BALL,
  updateOver: updateOverWithBall
});

export const nextBallAction = () => ({
  type: NEXT_BALL
});
