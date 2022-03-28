import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Feedback from './pages/Feedback';
import Login from './pages/Login';
import Config from './pages/Config';
import Ranking from './pages/Ranking';
import NotFound from './pages/NotFound';
import Quizz from './pages/Quizz';

import './App.css';

export default function App() {
  return (
    <Switch>
      <Route
        path="/question/:qNumber"
        render={ (props) => <Quizz routeProps={ props } /> }
      />
      <Route path="/config" component={ Config } />
      <Route exact path="/feedback" component={ Feedback } />
      <Route exact path="/ranking" component={ Ranking } />
      <Route exact path="/" component={ Login } />
      <Route exact path="*" component={ NotFound } />
    </Switch>
  );
}
