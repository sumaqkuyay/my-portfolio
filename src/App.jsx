import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, HashRouter,
} from 'react-router-dom';
import Homepage from './views/HomePage';
import './App.css';
import './sass/index.scss';

const App = () => (
  <Router>
    <HashRouter>
      <Switch>
        <Route path="/" component={Homepage} />
      </Switch>
    </HashRouter>
  </Router>
);

export default App;

