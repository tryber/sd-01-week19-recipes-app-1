import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import FoodPage from './components/FoodPage';
import DetailsPage from './components/DetailsPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/receitas/comidas" component={FoodPage} />
        <Route exact path="/receitas/bebidas" component={FoodPage} />
        <Route path="/receitas/comidas/:id" component={DetailsPage} />
        <Route path="/receitas/bebidas/:id" component={DetailsPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
