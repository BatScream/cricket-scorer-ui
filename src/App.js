import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store";
import ScoreSelectorGrid from "./scoreSelectorGrid/RunSelector";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <ScoreSelectorGrid />
  </Provider>
);

export default App;
