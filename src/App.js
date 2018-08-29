import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store";
import ConnectedTeamScore from "./teamscore/teamscore.js";
import ConnectedScoreSelectorGrid from "./scoreSelectorGrid/RunSelector";
import ExtranSelectorGrid from "./scoreSelectorGrid/ExtrasSelector";
import { ConnectedPlayerSelector } from "./playerSelectorGrid/playerSelector";
import ConnectedCurrentOverDisplay from "./store/viewController.js";
import Next from "./next/next";

const store = configureStore();
const App = () => (
  <Provider store={store}>
    <div>
      <ConnectedTeamScore />
      <ConnectedCurrentOverDisplay />
      <ConnectedPlayerSelector />
      <ConnectedScoreSelectorGrid />
      <div>
        <ExtranSelectorGrid />
      </div>
      <Next />
    </div>
  </Provider>
);

//TODO - do we need so many div containers

export default App;
