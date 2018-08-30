export const updateExtraForBowlerReducer = (state) => {

  let bowlerTeam = state.currentBowler.team;
  let batsmanTeam = state.currentBatsmen.team;
  let bowlerid = state.currentBowler.player;
  let currentExtras = state.teams[bowlerTeam].players[bowlerid].bowlingStats.extras;


  console.log("Before ::::" + state.currentSelectedExtra.label);

  if (state.currentSelectedExtra.label !== 'B' && state.currentSelectedExtra.label !== 'Lb') {
    if (state.currentSelectedExtra.label !== null) {
      console.log("currentExtraClicked ::::" + state.currentSelectedExtra.label);
      console.log("state ::::" + state.currentSelectedExtra);

      currentExtras += 1;
      state.teams[bowlerTeam].players[bowlerid].bowlingStats.extras = currentExtras;
      state.teams[batsmanTeam].runs += 1;
    }
  }
  console.log("After ::::" + state.currentSelectedExtra.label);

  console.log("Extras ::::" + state.teams[bowlerTeam].players[bowlerid].bowlingStats.extras);
  console.log("TotalScore ::::" + state.teams[batsmanTeam].runs);

  return { ...state,
    state: state.teams[bowlerTeam].players[bowlerid].bowlingStats.extras
  };
}