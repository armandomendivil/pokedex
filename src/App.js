import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import PokemonList from './containers/PokemonList';
import PokemonContainer from './containers/PokemonContainer';

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <Router>
      <div className="App">
        <div className="App-header">
          <Home />
        </div>
        <div className="App-intro">
          <Switch>
            <Route exact path="/" component={PokemonList} />
            <Route exact path="/pokemon/:id" component={PokemonContainer} />
          </Switch>
        </div>
      </div>
    </Router>
  </MuiThemeProvider>
);

export default App;
