import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import FoodPage from './components/FoodPage';
import DetailsPage from './components/DetailsPage';
import ExploreOrigin from './components/ExploreOrigin';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/comidas" />
        <Route exact path="/bebidas" />
        <Route path="/receitas-feitas" />
        <Route path="/receitas-favoritas" />
        <Route exact path="/explorar" />
        <Route exact path="/explorar/comidas" />
        <Route exact path="/explorar/bebidas" />
        <Route path="/explorar/comidas/ingredientes" />
        <Route path="/explorar/bebidas/ingredientes" />
        <Route path="/explorar/comidas/area" component={ExploreOrigin} />
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
