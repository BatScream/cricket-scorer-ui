export const isEndOfOver = currentOver => {
  return numberOfLegitimateBalls(currentOver) === 6;
};

export const isLegitimateBall = ball =>
  !ball.extras || ball.extras === "B" || ball.extras === "Lb";

export const numberOfLegitimateBalls = currentOver => {
  return currentOver.filter(ball => isLegitimateBall(ball)).length;
};
