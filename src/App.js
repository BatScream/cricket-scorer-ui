import React  from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import ConnectedTeamScore from './teamscore/teamscore.js'

const store = configureStore();

const App = () =>
  <Provider store={store} >
    <div>
      <ConnectedTeamScore />
    </div>
  </Provider>;


export default App;
