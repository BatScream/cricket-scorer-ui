export const isEndOfOver = currentOver => {
  const numberOfLegitimateBalls = currentOver.filter(ball =>
    isLegitimateBall(ball)
  ).length;

  return numberOfLegitimateBalls === 6;
};

export const isLegitimateBall = ball =>
  !ball.extras || ball.extras === "B" || ball.extras === "Lb";
