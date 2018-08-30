
import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store";
import Home from "./home/home"

const store = configureStore();
const App = () => (
  <Provider store={store}>
    <div>
      <Home />
    </div>
  </Provider>
);

//TODO - do we need so many div containers

export default App;
