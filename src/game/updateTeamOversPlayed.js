import { isEndOfOver, isLegitimateBall } from "../helpers/overHelpers";

export const updateTeamOversPlayed = state => {
  const newState = Object.assign({}, state);
  if (
    newState.currentOver.length === 0 ||
    !isLegitimateBall(newState.currentOver[newState.currentOver.length - 1])
  )
    return state;

  let oversPlayed = newState.teams[newState.currentBattingTeam].oversPlayed;
  oversPlayed = isEndOfOver(newState.currentOver)
    ? Math.ceil(oversPlayed)
    : oversPlayed + 0.1;
  newState.teams[newState.currentBattingTeam].oversPlayed = oversPlayed;
  return newState;
};
