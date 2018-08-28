import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import ConnectedTeamScore from './teamscore/teamscore.js'
import ScoreSelectorGrid from "./scoreSelectorGrid/RunSelector";
import ExtranSelectorGrid from "./scoreSelectorGrid/ExtrasSelector";

import SegmentedButton from './Components/SegmentedButton'
import ConnectedCurrentOverDisplay from './store/viewController.js';


const store = configureStore();
const App = () =>
  <Provider store={store} >
    <div>
      <ConnectedTeamScore />
      <ConnectedCurrentOverDisplay />
      <SegmentedButton />
      <ScoreSelectorGrid />
      <div>
      <ExtranSelectorGrid />
      </div>
    </div>
  </Provider>;

//TODO - do we need so many div containers

export default App;
