import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store";
import ScoreSelectorGrid from "./scoreSelectorGrid/RunSelector";
import ExtranSelectorGrid from "./scoreSelectorGrid/ExtrasSelector";

import SegmentedButton from './Components/SegmentedButton'

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <div>
    <h1>Cricker Scorer API</h1>
     <SegmentedButton/>
    <div>
      <ScoreSelectorGrid />
      </div>
      <div>
        <ExtranSelectorGrid />
        </div>
    </div>
  </Provider>
);

export default App;
