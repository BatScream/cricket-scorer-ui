import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store";
import ScoreSelectorGrid from "./scoreSelectorGrid/RunSelector";
import ExtranSelectorGrid from './Extras/ExtraGrid'

const store = configureStore();

const App = () => (
  <Provider store={store}>
  <div>
    <ScoreSelectorGrid />
    <div>
      <ExtranSelectorGrid />
    </div>
</div>
  </Provider>
);

export default App;
