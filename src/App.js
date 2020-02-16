import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import FoodPage from './components/FoodPage';
import IngredientsExploreScreen from './components/IngredientsExploreScreen';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/receitas/comidas" component={FoodPage} />
        <Route path="/receitas/bebidas" component={FoodPage} />
        <Route path="/explorar/comidas/ingredientes" component={IngredientsExploreScreen} />
        <Route path="/explorar/bebidas/ingredientes" component={IngredientsExploreScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
