import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from '../../containers/Home/Home';
import CharacterDetail from '../../containers/CharacterDetail/CharacterDetail';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={CharacterDetail} />
      </Switch>
    </Router>
  );
}
