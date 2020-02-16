import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import FoodPage from './components/FoodPage';
import IngredientsExploreScreen from './components/IngredientsExploreScreen';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/explorar/comidas/ingredientes" component={IngredientsExploreScreen} />
        <Route path="/explorar/bebidas/ingredientes" component={IngredientsExploreScreen} />
        <Route path="/perfil" component={ProfilePage} />
        <Route exact path="/receitas/comidas" component={FoodPage} />
        <Route exact path="/receitas/bebidas" component={FoodPage} />
        <Route path="/receitas/comidas/:id" component={DetailsPage} />
        <Route path="/receitas/bebidas/:id" component={DetailsPage} /> 
      </Switch>
    </BrowserRouter>
  );
}

export default App;
