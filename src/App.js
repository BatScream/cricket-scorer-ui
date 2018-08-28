import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store";
import ConnectedTeamScore from "./teamscore/teamscore.js";
import ScoreSelectorGrid from "./scoreSelectorGrid/RunSelector";
import ExtranSelectorGrid from "./scoreSelectorGrid/ExtrasSelector";

import { ConnectedPlayerSelector } from "./playerSelectorGrid/playerSelector";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <div>
      <h1>Cricker Scorer API</h1>
      <ConnectedTeamScore />
      <ConnectedPlayerSelector />
      <ScoreSelectorGrid />
      <br />
      <ExtranSelectorGrid />
    </div>
  </Provider>
);

export default App;
