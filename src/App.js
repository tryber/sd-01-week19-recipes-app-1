import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Profile from './components/Profile';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
