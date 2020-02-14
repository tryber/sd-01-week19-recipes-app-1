import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import FoodPage from './components/FoodPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/receitas/comidas" component={FoodPage} />
        <Route exact path="/receitas/bebidas" component={FoodPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
