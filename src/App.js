import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import ConnectedTeamScore from './teamscore/teamscore.js'
import ScoreSelectorGrid from "./scoreSelectorGrid/RunSelector";
import ExtranSelectorGrid from "./scoreSelectorGrid/ExtrasSelector";

const store = configureStore();

const App = () =>
  <Provider store={store} >
    <div>
      <ConnectedTeamScore />
      <ScoreSelectorGrid />
      <div>
        <ExtranSelectorGrid />
      </div>
    </div>
  </Provider>;

export default App;
