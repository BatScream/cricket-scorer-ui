import axios from "axios";
import config from "../config";

// Actions
export const GAME_DETAILS_FETCHED = "GAME_DETAILS_FETCHED";
export const SET_CURRENT_SCORE = "SET_CURRENT_SCORE";
export const SET_EXTRAS = "SET_EXTRAS";
export const NEXT_BALL = "NEXT_BALL";
export const ACTION_UPDATE_CURRENT_OVER_FOR_BALL =
  "ACTION_UPDATE_CURRENT_OVER_FOR_BALL";
export const ACTION_UPDATE_EXTRA_FOR_CURRENT_BOWLER =
  "ACTION_UPDATE_EXTRA_FOR_CURRENT_BOWLER";
export const FALL_OF_WICKET = "FALL_OF_WICKET";

// Action Creators

export const fetchGameDetails = () => async dispatch => {
  const response = await axios.get(config.apiUrl);
  dispatch({
    type: GAME_DETAILS_FETCHED,
    payload: {
      gameDetails: response.data
    }
  });
};

export const updateOverWithBall = updateOverWithBall => ({
  type: ACTION_UPDATE_CURRENT_OVER_FOR_BALL,
  updateOver: updateOverWithBall
});

export const nextBallAction = () => ({
  type: NEXT_BALL
});

//action
export const updateExtrasForBowler = updateExtrasForBowler => ({
  type: ACTION_UPDATE_EXTRA_FOR_CURRENT_BOWLER
});
