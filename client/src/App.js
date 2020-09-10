import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './component/Home';
import Slug from './component/Slug';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:slug">
          <Slug />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
