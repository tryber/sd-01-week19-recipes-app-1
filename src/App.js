import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import MealPage from './components/MealPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/comidas" component={MealPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
